import express, { Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

import { authRoute, roleRoute, storeRoute, beneficOrganizationRoute, donationRoute, foodRoute, foodTypeRoute } from './routes'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(helmet())

// Middlewares
app.use((err: any, _req: any, res: Response, _next: any) => {
    const status = err.status || 500;
    const message = err.message || 'Algo salió mal';
    res.status(status).json({
        success: false,
        status,
        message
    })
})

const connection = () => {
    mongoose.connect(`${process.env.DATABASE_URI}`);
}

// Routes
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/role', roleRoute)
app.use('/api/v1/stores', storeRoute)
app.use('/api/v1/beneficOrganization', beneficOrganizationRoute)
app.use('/api/v1/donation', donationRoute)
app.use('/api/v1/food', foodRoute)
app.use('/api/v1/foodType', foodTypeRoute)


app.listen(3000, () => {
    connection()
    console.log('Server is running on port 3000')
})