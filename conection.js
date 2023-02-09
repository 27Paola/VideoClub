const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://PaolaSanchez:paola123@cluster0.h0tfu5q.mongodb.net/VideoClubCRUD')

const objectbd = mongoose.connection

objectbd.on('connected', () => {console.log("Conexión correcta a MongoDB. OK")})
objectbd.on('error', () => { console.log("Error en conexión a MongoDB. Revise código") })

module.exports = mongoose
