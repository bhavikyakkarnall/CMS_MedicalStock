import { Router } from 'express';
import CommentController from '../controllers/commentController.js';

const router = Router();

router.post('/', CommentController.addComment);
router.get('/items/:itemId/comments', CommentController.getComments);
router.get('/', CommentController.getAllComments);


export default router;