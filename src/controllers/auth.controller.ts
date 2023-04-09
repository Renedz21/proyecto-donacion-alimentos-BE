import User from '../models/user.schema'
import bcrypt from 'bcrypt'
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken'
import { createError } from '../utils/createError';

export const register = async (req: Request, res: Response, next: any) => {

    try {

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            ...req.body,
            password: hash
        })

        const user: any = await newUser.save();

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '2h' })
        // const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESK_SECRET_KEY, { expiresIn: '7d' })

        const { password: _, ...data } = user._doc

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send({
            token,
            data
        })

    } catch (error) {
        next(createError('No se pudo crear el usuario', 500));
    }

}

export const login = async (req: Request, res: Response, next: any) => {

    try {
        const user: any = await User.findOne({ email: req.body.email })

        if (!user) res.status(400).send("Email or password is wrong")

        const isCorrect = await bcrypt.compare(req.body.password, user.password)

        if (!isCorrect) res.status(400).send("Email or password is wrong")

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, `${process.env.JWT_SECRET_KEY}`, { expiresIn: '1d' })

        const { password: _, ...data } = user._doc

        res.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).send({
            token,
            data
        })

    } catch (error) {
        next(createError('No se pudo iniciar sesión', 500));
    }

}