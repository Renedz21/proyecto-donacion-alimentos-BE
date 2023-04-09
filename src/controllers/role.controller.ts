import { Request, Response } from 'express';
import Role from '../models/roles.schema';

import { createError } from '../utils/createError';

export const createRole = async (req: Request, res: Response, next: any) => {
    try {
        const role = await Role.create(req.body);
        res.status(201).json(role);
    } catch (error) {
        next(createError('No se pudo crear el rol', 500));
    }
}