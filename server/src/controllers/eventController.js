import { prisma } from '../config/prisma.js';
import { logActivity } from '../utils/activityLogger.js';

export const getAllEvents = async (req, res, next) => {
  try {
    const { search, month, year, upcoming, limit } = req.query;

    let events = await prisma.event.findMany({
      orderBy: { date: 'asc' },
      take: limit ? parseInt(limit, 10) : undefined,
    });

    if (upcoming === 'true') {
      const now = new Date();
      events = events.filter(e => new Date(e.date) >= new Date(now.setHours(0, 0, 0, 0)));
    }

    if (month && year) {
      events = events.filter(e => {
        const d = new Date(e.date);
        return d.getMonth() === parseInt(month, 10) && d.getFullYear() === parseInt(year, 10);
      });
    }

    if (search) {
      const q = search.toLowerCase();
      events = events.filter(
        e =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          e.organizer.toLowerCase().includes(q)
      );
    }

    return res.status(200).json({
      success: true,
      count: events.length,
      events,
    });
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id },
    });

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found.',
      });
    }

    return res.status(200).json({
      success: true,
      event,
    });
  } catch (error) {
    next(error);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const {
      title,
      description,
      date,
      startTime,
      endTime,
      venue,
      organizer,
      registrationEnabled,
      registrationDeadline,
    } = req.body;

    if (!title || !description || !date || !startTime || !endTime || !venue || !organizer) {
      return res.status(400).json({
        success: false,
        message: 'All fields (title, description, date, start time, end time, venue, organizer) are required.',
      });
    }

    let attachment = null;
    let attachmentName = null;
    let attachmentSize = null;

    if (req.file) {
      attachment = `/uploads/${req.file.filename}`;
      attachmentName = req.file.originalname;
      attachmentSize = req.file.size;
    }

    const event = await prisma.event.create({
      data: {
        title: title.trim(),
        description: description.trim(),
        date: new Date(date),
        startTime: startTime.trim(),
        endTime: endTime.trim(),
        venue: venue.trim(),
        organizer: organizer.trim(),
        registrationEnabled: registrationEnabled === 'true' || registrationEnabled === true,
        registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
        attachment,
        attachmentName,
        attachmentSize,
        createdBy: req.user.id,
      },
    });

    // Notify students of upcoming event
    const students = await prisma.user.findMany({ where: { role: 'STUDENT' } });
    for (const student of students) {
      await prisma.notification.create({
        data: {
          title: `🗓️ New Event: ${event.title}`,
          message: `Scheduled on ${new Date(event.date).toLocaleDateString()} at ${event.venue}. Organized by ${event.organizer}.`,
          type: 'EVENT',
          read: false,
          link: '/student/calendar',
          userId: student.id,
        },
      });
    }

    await logActivity({
      action: 'EVENT_CREATED',
      entityType: 'Event',
      entityId: event.id,
      details: `Created event "${event.title}" on ${event.date}.`,
      adminId: req.user.id,
    });

    return res.status(201).json({
      success: true,
      message: 'Event created successfully!',
      event,
    });
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      title,
      description,
      date,
      startTime,
      endTime,
      venue,
      organizer,
      registrationEnabled,
      registrationDeadline,
    } = req.body;

    const existing = await prisma.event.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Event not found.',
      });
    }

    const updateData = {};
    if (title) updateData.title = title.trim();
    if (description) updateData.description = description.trim();
    if (date) updateData.date = new Date(date);
    if (startTime) updateData.startTime = startTime.trim();
    if (endTime) updateData.endTime = endTime.trim();
    if (venue) updateData.venue = venue.trim();
    if (organizer) updateData.organizer = organizer.trim();
    if (registrationEnabled !== undefined) {
      updateData.registrationEnabled = registrationEnabled === 'true' || registrationEnabled === true;
    }
    if (registrationDeadline !== undefined) {
      updateData.registrationDeadline = registrationDeadline ? new Date(registrationDeadline) : null;
    }

    if (req.file) {
      updateData.attachment = `/uploads/${req.file.filename}`;
      updateData.attachmentName = req.file.originalname;
      updateData.attachmentSize = req.file.size;
    }

    const updated = await prisma.event.update({
      where: { id },
      data: updateData,
    });

    await logActivity({
      action: 'EVENT_UPDATED',
      entityType: 'Event',
      entityId: updated.id,
      details: `Updated event "${updated.title}".`,
      adminId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: 'Event updated successfully.',
      event: updated,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const existing = await prisma.event.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Event not found.',
      });
    }

    await prisma.event.delete({
      where: { id },
    });

    await logActivity({
      action: 'EVENT_DELETED',
      entityType: 'Event',
      entityId: id,
      details: `Deleted event "${existing.title}".`,
      adminId: req.user.id,
    });

    return res.status(200).json({
      success: true,
      message: 'Event deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};
