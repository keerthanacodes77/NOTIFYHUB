import { prisma } from '../config/prisma.js';
import { logActivity } from '../utils/activityLogger.js';

export const getQueries = async (req, res, next) => {
  try {
    const { status, search } = req.query;
    const isStudent = req.user.role === 'STUDENT';

    let queries = await prisma.query.findMany({
      where: isStudent ? { studentId: req.user.id } : {},
    });

    if (status && status !== 'All') {
      queries = queries.filter(q => q.status === status.toUpperCase());
    }

    if (search) {
      const q = search.toLowerCase();
      queries = queries.filter(
        item =>
          item.subject.toLowerCase().includes(q) ||
          item.message.toLowerCase().includes(q) ||
          (item.student?.name && item.student.name.toLowerCase().includes(q)) ||
          (item.student?.email && item.student.email.toLowerCase().includes(q))
      );
    }

    return res.status(200).json({
      success: true,
      count: queries.length,
      queries,
    });
  } catch (error) {
    next(error);
  }
};

export const getQueryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const query = await prisma.query.findUnique({
      where: { id },
    });

    if (!query) {
      return res.status(404).json({
        success: false,
        message: 'Query not found.',
      });
    }

    if (req.user.role === 'STUDENT' && query.studentId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied to this query.',
      });
    }

    return res.status(200).json({
      success: true,
      query,
    });
  } catch (error) {
    next(error);
  }
};

export const createQuery = async (req, res, next) => {
  try {
    const { subject, message } = req.body;

    if (!subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Subject and message are required.',
      });
    }

    const query = await prisma.query.create({
      data: {
        subject: subject.trim(),
        message: message.trim(),
        studentId: req.user.id,
      },
    });

    return res.status(201).json({
      success: true,
      message: 'Query submitted successfully! An administrator will respond shortly.',
      query,
    });
  } catch (error) {
    next(error);
  }
};

export const replyQuery = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { response, status = 'RESOLVED' } = req.body;

    if (!response || !response.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Response text is required.',
      });
    }

    const existing = await prisma.query.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Query not found.',
      });
    }

    const updated = await prisma.query.update({
      where: { id },
      data: {
        response: response.trim(),
        status: status.toUpperCase(),
        respondedBy: req.user.id,
        respondedAt: new Date(),
      },
    });

    // Notify the student about the response
    await prisma.notification.create({
      data: {
        title: `💬 Admin Responded to: ${existing.subject.slice(0, 40)}`,
        message: `Admin ${req.user.name}: "${response.slice(0, 100)}${response.length > 100 ? '...' : ''}"`,
        type: 'QUERY_REPLY',
        read: false,
        link: '/student/qa',
        userId: existing.studentId,
      },
    });

    await logActivity({
      action: 'QUERY_RESPONDED',
      entityType: 'Query',
      entityId: id,
      details: `Administrator ${req.user.name} responded to query "${existing.subject}" (Status: ${status}).`,
      adminId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: 'Response submitted and student notified successfully!',
      query: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const updateQueryStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['OPEN', 'IN_PROGRESS', 'RESOLVED'].includes(status?.toUpperCase())) {
      return res.status(400).json({
        success: false,
        message: 'Valid status is OPEN, IN_PROGRESS, or RESOLVED.',
      });
    }

    const updated = await prisma.query.update({
      where: { id },
      data: { status: status.toUpperCase() },
    });

    await logActivity({
      action: 'QUERY_STATUS_CHANGED',
      entityType: 'Query',
      entityId: id,
      details: `Updated query status to ${status.toUpperCase()}.`,
      adminId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: `Query status updated to ${status}.`,
      query: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteQuery = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existing = await prisma.query.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Query not found.',
      });
    }

    if (req.user.role === 'STUDENT' && existing.studentId !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Access denied.',
      });
    }

    await prisma.query.delete({
      where: { id },
    });

    if (req.user.role === 'ADMIN') {
      await logActivity({
        action: 'QUERY_DELETED',
        entityType: 'Query',
        entityId: id,
        details: `Deleted student query "${existing.subject}".`,
        adminId: req.user.id,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Query deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};
