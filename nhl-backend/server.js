const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()

// MIDDLEWARE 
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('views', __dirname + '/views')

//  Routes
const gameRoutes = require('./controllers/game')

app.use('/game', gameRoutes)


const PORT = process.env.PORT || 3000


app.listen(PORT, console.log(`listen ${PORT}`))
