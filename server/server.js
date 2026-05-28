import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'


import './config/db.js'
import contactRoutes from './routes/contactRoutes.js'
import chatRoutes from './routes/chatRoutes.js'

console.log('GEMINI_API_KEY in server.js:', process.env.GEMINI_API_KEY)
const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/contact', contactRoutes)
app.use('/api/chat', chatRoutes)
app.get('/', (req, res) => {
  res.send('Portfolio Backend Running')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})