import * as dotenv from 'dotenv'
import { v2 as cloudinary, ConfigOptions } from 'cloudinary'

dotenv.config()

const cloudinaryConfig: ConfigOptions = {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true
}

cloudinary.config(cloudinaryConfig)