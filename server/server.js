import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import './config/db.js'
import contactRoutes from './routes/contactRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoutes)

app.get('/', (req, res) => {
  res.send('Portfolio Backend Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})