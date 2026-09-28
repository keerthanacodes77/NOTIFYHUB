import { prisma } from '../config/prisma.js';

export const getActivityLogs = async (req, res, next) => {
  try {
    const { action, entityType, limit = 50 } = req.query;

    const logs = await prisma.activityLog.findMany({
      where: {
        action: action ? action : undefined,
        entityType: entityType ? entityType : undefined,
      },
      take: parseInt(limit, 10),
    });

    return res.status(200).json({
      success: true,
      count: logs.length,
      logs,
    });
  } catch (error) {
    next(error);
  }
};
