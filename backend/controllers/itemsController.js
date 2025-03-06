import itemService from '../services/itemsServices.js';


export default class ItemController {
    static async getAllItems(req, res) {
        try {
            const { status, serial, equipment_type, company, tech } = req.query;
            let items;

            if (status) items = await itemService.getItemsByField('status', status);
            else if (serial) items = await itemService.getItemsByField('serial', serial);
            else if (equipment_type) items = await itemService.getItemsByField('equipment_type', equipment_type);
            else if (company) items = await itemService.getItemsByField('company', company);
            else if (tech) items = await itemService.getItemsByField('tech', tech);
            else items = await itemService.getAllItems();

            res.status(200).json(items);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getItemByCS(req, res) {
        try {
            const item = await itemService.getItemByCS(req.params.cs);
            res.status(200).json(item);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async createItem(req, res) {
        try {
            const id = await itemService.createItem(req.body);
            res.status(201).json({ id });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async updateItem(req, res) {
        try {
            const updated = await itemService.updateItem(req.params.cs, req.body);
            res.status(200).json({ updated });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async deleteItem(req, res) {
        try {
            const deleted = await itemService.deleteItem(req.params.cs);
            res.status(200).json({ deleted });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}
