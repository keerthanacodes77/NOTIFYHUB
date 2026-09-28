import express from 'express';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireAdmin } from '../middlewares/roleMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

router.get('/', authenticate, getAllEvents);
router.get('/:id', authenticate, getEventById);

// Admin-only event routes
router.post('/', authenticate, requireAdmin, upload.single('attachment'), createEvent);
router.put('/:id', authenticate, requireAdmin, upload.single('attachment'), updateEvent);
router.delete('/:id', authenticate, requireAdmin, deleteEvent);

export default router;
