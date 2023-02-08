const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemamovie = new eschema({
    title: String,
    year: Number,
    duration: Number,
    lang: String,
    director: String,
    country: String,
    idmovie: String //A Movie has a unique ID 
})

const Modelmovie = mongoose.model('movies', eschemamovie)
module.exports = router

//Example Route
// router.get('/example', (req, res) => {
//     res.end("Saludo carga desde la ruta de ejemplo")
// })

// Add movies
router.post('/Addmovie', (req, res) => {
    const newmovie = new Modelmovie({
        title: req.body.title,
        year: req.body.year,
        duration: req.body.duration,
        lang: req.body.lang,
        director: req.body.director,
        country: req.body.country
    })
    newmovie.save(function(err){
        if(!err){
            res.send("Película Añadida")
        }
        else{
            res.send(err)
        }
    })
})

// This let obtain the movies
router.get('/getmovies', (req, res) => {
    Modelmovie.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})