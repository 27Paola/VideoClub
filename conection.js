const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/CRUDMovies')

const objectbd = mongoose.connection

objectbd.on('connected', () => {console.log("Conexión correcta a MongoDB. OK")})
objectbd.on('error', () => { console.log("Error en conexión a MongoDB. Revise código") })

module.exports = mongoose