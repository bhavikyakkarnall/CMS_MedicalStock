import { Router } from 'express';
import ItemController from '../controllers/itemsController.js';

const router = Router();

router.get('/', ItemController.getAllItems);
router.get('/:cs', ItemController.getItemByCS);
router.post('/', ItemController.createItem);
router.put('/:cs', ItemController.updateItem);
router.delete('/:cs', ItemController.deleteItem);

export default router;