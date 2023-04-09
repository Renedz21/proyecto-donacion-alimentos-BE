import { Request, Response } from 'express';
import Store from '../models/store.schema';
import { createError } from '../utils/createError';

export const getStores = async (_req: Request, res: Response, next: any) => {
    try {
        const stores = await Store.find();
        res.status(200).json(stores);
    } catch (error) {
        next(createError('No se encontraron las tiendas locales', 500));
    }
}

export const getStore = async (req: Request, res: Response, next: any) => {
    try {
        const store = await Store.findById(req.params.id);
        res.status(200).json(store);
    } catch (error) {
        next(createError('No se encontró la tienda local', 500));
    }
}

export const createStore = async (req: Request, res: Response, next: any) => {
    try {
        const store = await Store.create(req.body);
        res.status(201).json(store);
    } catch (error) {
        next(createError('No se pudo crear la tienda local', 500));
    }
}

export const updateStore = async (req: Request, res: Response, next: any) => {
    try {
        const { id } = req.params;
        const newStore = await Store.findByIdAndUpdate(id, {
            $set: { ...req.body }
        }, { new: true })

        res.status(200).json(newStore);

    } catch (error) {
        console.log(error);
        next(createError('No se pudo actualizar la tienda local', 500));
    }
}

export const deleteStore = async (req: Request, res: Response, next: any) => {

    try {
        const { id } = req.params;
        const deletedStore = await Store.findByIdAndDelete(id);

        res.status(200).json(deletedStore);

    } catch (error) {
        next(createError('No se pudo eliminar la tienda local', 500));
    }

}