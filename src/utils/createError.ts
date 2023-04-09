/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export const createError = (message: string, status: number) => {
    const error = new Error() as any;
    error.message = message;
    error.status = status;
    return error;
}