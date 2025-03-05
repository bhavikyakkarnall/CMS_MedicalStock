import { Router } from "express";
var router = Router();
import ItemsController from '../controllers/itemsController.js';

const itemsController = new ItemsController();

router.get('/', (req, res) => {
    itemsController.getAllItems(req, res);
});

router.get('/:cs', (req, res) => {
    itemsController.getItemByCS(req, res);
});

router.post('/', (req, res) => {
    itemsController.createItem(req. res);
});

router.put('/:cs', (req, res) => {
    itemsController.updateItem(req, res);
});

router.delete('/:cs', (req, res) => {
    itemsController.deleteItem(req, res);
})

router.get('/status/:status', (req, res) => {
    itemsController.getItemByStatus(req, res);
});

router.get('/serial/:serial', (req, res) => {
    itemsController.getItemBySerial(req, res);
});

router.get('/equipment_type/:equipment_type', (req, res) => {
    itemsController.getItemByEquipmentType(req, res);
});  

router.get('/company/:company', (req, res) => {
    itemsController.getItemByCompany(req, res);
});  

router.get('/tech/:tech', (req, res) => {
    itemsController.getItemByTech(req, res);
});  

export default router;