const express = require('express')
const app = express()

//Import MongoDB connection
const fileBD = require('./conection')

//Import routes file and model movie
const routemovie = require('./routes/movie')

//Import body parser
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: 'true'}))

app.use('/api/movie', routemovie)

app.get('/', (req, res) => {
    res.end("Bienvenidos al Servidor del VideoClub")
})

//Basic configuration Server
app.listen(5000, function(){
    console.log("El Servidor está corriendo perfectamente en tiempo real")
})