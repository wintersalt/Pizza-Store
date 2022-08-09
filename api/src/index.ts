require('dotenv').config()
import express from 'express'
import cors from 'cors'
import fileUpload from 'express-fileupload'
import cookieParser from 'cookie-parser'
import path from 'path'
import mongoose from 'mongoose'

import foodsRoute from './routes/foods'
import foodTypesRouter from './routes/foodtypes'
import authRouter from './routes/auth'

const app = express()
const PORT = process.env.PORT || 8080
const DATABASE_URL: string =
  process.env.DATABASE_URL || 'mongodb://localhost/pizza-store'
const db = mongoose.connection

mongoose.connect(DATABASE_URL)

db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))

//enables file upload and form data parsing
app.use(
  fileUpload({
    limits: { fileSize: 1048576 }, // 1048576 bytes = 1 megabyte
  })
)

app.use('/foods', foodsRoute)
app.use('/foodtypes', foodTypesRouter)
app.use('/auth', authRouter)

app.listen(PORT, () => {
  console.log('Server Running On Port ' + PORT)
})
