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
router.post('/AddMovie', (req, res) => {
    const newmovie = new Modelmovie({
        title: req.body.title,
        year: req.body.year,
        duration: req.body.duration,
        lang: req.body.lang,
        director: req.body.director,
        country: req.body.country,
        idmovie: req.body.idmovie
    })
    newmovie.save(function(err){
        if(!err){
            res.send("Película Añadida Correctamente")
        }
        else{
            res.send(err)
        }
    })
})

// This obtain the list movies
router.get('/GetMovies', (req, res) => {
    Modelmovie.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

// This obtain one movie
router.post('/GetDataMovie', (req, res) => {
    Modelmovie.find({idmovie:req.body.idmovie}, function (docs, err) {
        if (!err) {
            res.send(docs)
        }
        else {
            res.send(err)
        }
    })
})

// This update the movie's information 
router.post('/UpdateMovie', (req,res) => {
    Modelmovie.findOneAndUpdate({idmovie: req.body.idmovie}, {
        title: req.body.title,
        year: req.body.year,
        duration: req.body.duration,
        lang: req.body.lang,
        director: req.body.director,
        country: req.body.country
    }, (err) => {
        if(!err){
            res.send("Película editada correctamente")
        }
        else{
            res.send(err)
        }
    })
})

// This DELETE a movie 
router.post('/DeleteMovie', (req, res) => {
    Modelmovie.findOneAndDelete({ idmovie: req.body.idmovie }, (err) => {
        if(!err){
            res.send("Película eliminada")
        }
        else{
            res.send(err)
        }
    })
})