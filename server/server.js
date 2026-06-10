import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'


import rateLimit from 'express-rate-limit'
import './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import chatRoutes from './routes/chatRoutes.js'

console.log('GEMINI_API_KEY in server.js:', process.env.GEMINI_API_KEY)
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoutes)
const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message:
    'Too many chat requests. Please wait.',
})
app.use('/api/chat',chatLimiter, chatRoutes)
app.get('/', (req, res) => {
  res.send('Portfolio Backend Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})