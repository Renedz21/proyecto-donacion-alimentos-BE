import { v2 as cloudinary, ConfigOptions } from 'cloudinary'
import * as dotenv from 'dotenv'

dotenv.config()

const cloudinaryConfig: ConfigOptions = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
}

cloudinary.config(cloudinaryConfig)

export const uploadImage = async (url: string, folderName: string) => {
    try {
        const options = {
            folder: folderName,
            use_filename: true,
        }
        const photoURL = await cloudinary.uploader.upload(url, options)
        return photoURL.url
    } catch (error) {
        throw new Error('Error al subir la imagen')
    }
}