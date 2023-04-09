import express from 'express';
import { createStore, getStore, getStores, updateStore } from '../controllers/store.controller';

const router = express.Router();

router.get('/', getStores);
router.get('/:id', getStore)
router.post('/', createStore);
router.put('/:id', updateStore);


export default router;