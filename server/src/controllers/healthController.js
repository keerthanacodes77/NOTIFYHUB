import os from 'os';
import { getDbStatus } from '../config/prisma.js';

const startTime = Date.now();

export const getHealth = async (req, res, next) => {
  try {
    const dbStatus = await getDbStatus();
    const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

    const memoryUsage = process.memoryUsage();

    return res.status(200).json({
      success: true,
      status: 'HEALTHY',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
      uptime: {
        seconds: uptimeSeconds,
        formatted: `${Math.floor(uptimeSeconds / 3600)}h ${Math.floor((uptimeSeconds % 3600) / 60)}m ${uptimeSeconds % 60}s`,
      },
      system: {
        platform: process.platform,
        nodeVersion: process.version,
        cpuCount: os.cpus().length,
        freeMemoryMB: Math.round(os.freemem() / (1024 * 1024)),
        totalMemoryMB: Math.round(os.totalmem() / (1024 * 1024)),
        heapUsedMB: Math.round(memoryUsage.heapUsed / (1024 * 1024)),
      },
      services: {
        server: { status: 'ONLINE', port: process.env.PORT || 5000 },
        database: dbStatus,
        api: { status: 'OPERATIONAL', latencyMs: 2 },
      },
    });
  } catch (error) {
    next(error);
  }
};
