import express from 'express';
import {
  getAllAnnouncements,
  getAnnouncementById,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
} from '../controllers/announcementController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireAdmin } from '../middlewares/roleMiddleware.js';
import { upload } from '../middlewares/uploadMiddleware.js';

const router = express.Router();

// Public / student & admin view
router.get('/', authenticate, getAllAnnouncements);
router.get('/:id', authenticate, getAnnouncementById);

// Admin-only management routes
router.post('/', authenticate, requireAdmin, upload.single('attachment'), createAnnouncement);
router.put('/:id', authenticate, requireAdmin, upload.single('attachment'), updateAnnouncement);
router.delete('/:id', authenticate, requireAdmin, deleteAnnouncement);

export default router;
