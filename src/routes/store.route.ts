import express from 'express';
import { createStore, getStore, getStores, updateStore, deleteStore } from '../controllers/store.controller';
import { verifyTokenAndAdmin } from '../utils/verifyToken';

const router = express.Router();

router.get('/', getStores);
router.get('/:id', getStore)
router.post('/', verifyTokenAndAdmin, createStore);
router.put('/:id', verifyTokenAndAdmin, updateStore);
router.delete('/:id', verifyTokenAndAdmin, deleteStore);


export default router;