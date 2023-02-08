const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end("Bienvenidos al Servidor del VideoClub")
})

//Basic configuration Server
app.listen(5000, function(){
    console.log("El Servidor está corriendo perfectamente en tiempo real")
})

