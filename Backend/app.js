import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import schoolRoutes from './routes/schoolRoutes.js'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', schoolRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})
