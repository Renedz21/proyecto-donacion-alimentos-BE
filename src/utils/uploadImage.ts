import { v2 as cloudinary } from 'cloudinary'

export const uploadImage = async (url: string) => {

    const photoURL = await cloudinary.uploader.upload(url)
    return photoURL.url
}