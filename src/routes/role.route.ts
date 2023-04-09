import express from 'express';
import { createRole } from '../controllers/role.controller';
import { verifyTokenAndAdmin } from '../utils/verifyToken';

const router = express.Router();

router.post('/', verifyTokenAndAdmin, createRole);

export default router;