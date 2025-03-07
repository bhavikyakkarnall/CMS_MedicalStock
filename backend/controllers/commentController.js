import CommentService from '../services/commentService.js';

export default class CommentController {
    static async addComment(req, res) {
        try {
            const { item_id, user_id, comment } = req.body;
            if (!item_id || !user_id || !comment) {
                return res.status(400).json({ error: 'Missing required fields' });
            }
            const newComment = await CommentService.addComment(item_id, user_id, comment);
            res.status(201).json({ message: 'Comment added successfully', comment: newComment });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getComments(req, res) {
        try {
            const { itemId } = req.params;
            const comments = await CommentService.getCommentsByItem(itemId);
            res.status(200).json(comments);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }

    static async getAllComments(req, res) {
        try {
            const comments = await CommentService.getAllComments();
            res.status(200).json(comments);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }    

}
