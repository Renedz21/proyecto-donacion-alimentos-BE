import jwt from 'jsonwebtoken';
import { createError } from './createError';

export const verifyToken = (req: any, _res: any, next: any) => {

    const token = req.cookies.accessToken;

    if (!token) return next(createError('Access token not found', 401));

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, decoded: any) => {
        if (err) return next(createError('Invalid access token', 403));
        req.user = decoded;
        next();
    });

}

export const verifyTokenAndAdmin = (req: any, _res: any, next: any) => {

    const token = req.cookies.accessToken;

    if (!token) return next(createError('Access token not found', 401));

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!, (err: any, decoded: any) => {
        if (err) return next(createError('Invalid access token', 403));
        if (!decoded.isAdmin) return next(createError('You are not an admin', 403));
        req.user = decoded;
        next();
    });
}