const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/CRUDMovies')
mongoose.connect('mongodb+srv://manuel:castellanos@cluster0.h0tfu5q.mongodb.net/VideoClubCRUD')

const objectbd = mongoose.connection

objectbd.on('connected', () => {console.log("Conexión correcta a MongoDB. OK")})
objectbd.on('error', () => { console.log("Error en conexión a MongoDB. Revise código") })

module.exports = mongoose
