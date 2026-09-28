import { prisma } from '../config/prisma.js';

export const logActivity = async ({ action, entityType, entityId = null, details = null, adminId }) => {
  try {
    if (!adminId) return;
    await prisma.activityLog.create({
      data: {
        action,
        entityType,
        entityId: entityId ? String(entityId) : null,
        details,
        adminId,
      },
    });
  } catch (error) {
    console.error('Failed to log activity:', error);
  }
};
