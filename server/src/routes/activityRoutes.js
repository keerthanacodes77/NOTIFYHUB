import express from 'express';
import { getActivityLogs } from '../controllers/activityController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireAdmin } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', authenticate, requireAdmin, getActivityLogs);

export default router;
