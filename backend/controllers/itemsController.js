import Item from '../services/itemsServices.js'

export default class ItemController {


    getAllItems(req, res) {
        try {
            const { status, serial, equipment_type, company, tech } = req.query;
            let items = null;

            if (status) {
                items = Item.getItemByStatus(status);
            } else if (serial) {
                items = Item.getItemBySerial(serial);
            } else if (equipment_type) {
                items = Item.getItemByEquipmentType(equipment_type);
            } else if (company) {
                items = Item.getItemByCompany(company);
            } else if (tech) {
                items = Item.getItemByTech(tech);
            } else {
                items = Item.getAllItems();
            }

            if (items.length === 0) {
                throw new Error('Error: No Items to display');
            }

            res.status(200)
            res.json(items)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    getItemByCS(req, res) {
        try {
            let item = Item.getItemByCS(parseInt(req.params.cs))
            if (item == null) {
                throw new Error('Error: No games to display')
            }
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    createItem(req, res) {
        try {
            let item = Item.createProduct(req.params.cs, req.params.equipment_type, req.params.status, req.params.company, req.params.tech, req.params.serial, req.params.phone, req.params.sim, req.params.po, req.params.firmware, req.params.config)
            if (item == null) {
                throw new Error('Error: No Items to display')
            }
            console.log(item)
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    updateItem(req, res) {
        try {
            let item = Item.createProduct(req.params.cs, req.params.equipment_type, req.params.status, req.params.company, req.params.tech, req.params.serial, req.params.phone, req.params.sim, req.params.po, req.params.firmware, req.params.config)
            if (item == null) {
                throw new Error('Error: No Items to display')
            }
            console.log(item)
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    deleteItem(req, res) {
        try {
            let item = Item.deleteProduct(parseInt(req.params.cs))
            if (item == null) {
                throw new Error('Error: No Items to display')
            }
            console.log(item)
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    getItemByStatus(req, res) {
        try {
            let item = Item.getItemByStatus(req.params.status)
            if (item == null) {
                throw new Error('Error: No Items to display')
            }
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    getItemBySerial(req, res) {
        try {
            let item = Item.getGameByTitle(req.params.serial)
            if (item == null) {
                throw new Error('Error: No games to display')
            }
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    getItemByEquipmentType(req, res) {
        try {
            let item = Item.getItemByEquipmentType(req.params.equipment_type)
            if (item == null) {
                throw new Error('Error: No games to display')
            }
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

    getItemByCompany(req, res) {
        try {
            let item = Item.getItemByCompany(req.params.company)
            if (item == null) {
                throw new Error('Error: No games to display')
            }
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }
    
    getItemByTech(req, res) {
        try {
            let item = Item.getItemByTech(req.params.tech)
            if (item == null) {
                throw new Error('Error: No games to display')
            }
            res.status(200)
            res.json(item)
        }
        catch (err) {
            res.status(500);
            res.json({ error: err.message })
        }
    }

}







