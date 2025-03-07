import pool from '../config.js';


async function addComment(itemId, userId, comment) {
    const query = 'INSERT INTO COMMENT (item_id, user_id, comment) VALUES (?, ?, ?)';
    const [result] = await pool.query(query, [itemId, userId, comment]);
    return { id: result.insertId, itemId, userId, comment };
}

async function getCommentsByItem(itemId) {
    const query = `
        SELECT COMMENT.id, USER.name, COMMENT.comment, COMMENT.created_at 
        FROM COMMENT 
        JOIN users ON COMMENT.user_id = USER.id 
        WHERE item_id = ? 
        ORDER BY created_at DESC
    `;
    const [comments] = await pool.query(query, [itemId]);
    return comments;
}

async function getAllComments() {
    const query = `SELECT * FROM COMMENT;`;
    const [rows] = await pool.query(query);
    return rows;
}



export default {
    addComment,
    getCommentsByItem,
    getAllComments
};