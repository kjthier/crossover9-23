import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import dbConnect from './dbConnect.js'
import bodyParser from 'body-parser'

import restaurantsRoutes from './routes/restaurantsRoutes.js'
import citiesRoutes from './routes/citiesRoutes.js'
import tagsRoutes from './routes/tagsRoutes.js'
import commentsRoutes from './routes/commentsRoutes.js'
import ratingsRoutes from './routes/ratingsRoutes.js'
import restaurantHasTagRoutes from './routes/restaurantHasTagRoutes.js'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
dbConnect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/', restaurantsRoutes)
app.use('/', citiesRoutes)
app.use('/', tagsRoutes)
app.use('/', commentsRoutes)
app.use('/', ratingsRoutes)
app.use('/', restaurantHasTagRoutes)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}.`)
})
