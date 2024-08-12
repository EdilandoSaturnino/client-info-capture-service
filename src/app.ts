import express from 'express'
import { clientInfoRoutes } from './routes/clientInfoRoutes'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 7000

const app = express()

app.use('/', clientInfoRoutes)

app.listen(port, () => {
  console.log(`servidor online`)
})
