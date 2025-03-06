import pool from '../config.js';

async function getItemsByField(field, value) {
    const query = `SELECT * FROM items WHERE ?? = ?`;
    const [rows] = await pool.query(query, [field, value]);
    return rows;
}

async function getAllItems() {
    const query = `SELECT * FROM ITEM`;
    const [rows] = await pool.query(query);
    return rows;
}

async function getItemByCS(cs) {
    return await getItemsByField('cs', cs);
}

async function createItem(itemData) {
    const query = `INSERT INTO ITEM SET ?`;
    const [result] = await pool.query(query, itemData);
    return result.insertId;
}

async function updateItem(cs, itemData) {
    const query = `UPDATE ITEM SET ? WHERE cs = ?`;
    const [result] = await pool.query(query, [itemData, cs]);
    return result.affectedRows;
}

async function deleteItem(cs) {
    const query = `DELETE FROM ITEM WHERE cs = ?`;
    const [result] = await pool.query(query, [cs]);
    return result.affectedRows;
}

export default {
    getAllItems,
    getItemByCS,
    getItemsByField,
    createItem,
    updateItem,
    deleteItem
};