import express from 'express';
import {
  getQueries,
  getQueryById,
  createQuery,
  replyQuery,
  updateQueryStatus,
  deleteQuery,
} from '../controllers/queryController.js';
import { authenticate } from '../middlewares/authMiddleware.js';
import { requireAdmin, requireStudent } from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', authenticate, getQueries);
router.get('/:id', authenticate, getQueryById);
router.post('/', authenticate, requireStudent, createQuery);
router.post('/:id/reply', authenticate, requireAdmin, replyQuery);
router.put('/:id/status', authenticate, requireAdmin, updateQueryStatus);
router.delete('/:id', authenticate, deleteQuery);

export default router;
