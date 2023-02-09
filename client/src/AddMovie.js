import React,{useState} from 'react';
import uniqid from 'uniqid'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function AddMovie(){
    
    //Hooks
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [lang, setLang] = useState('')
    const [director, setDirector] = useState('')
    const [country, setCountry] = useState('')

    // Go to index
    const navigator = useNavigate()

    function addMovie(){
        var movie = {
            title: title,
            year: year,
            duration: duration,
            lang: lang,
            director: director,
            country: country,
            idmovie: uniqid()
        }
        console.log(movie)
        axios.post('/api/movie/AddMovie', movie)
        .then(res => {
            //alert(res.data)
            Swal.fire("Buen trabajo", "La película se añadio correctamente")
            navigator('/')
        })
        .then(err => {console.log(err)})
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <h2 className="mt-4">Añadir una Película</h2>
                </div>

                <div className="row">
                    <div className="col-sm-6 offset-3">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Título</label>
                            <input type="text" className="form-control" value={title} onChange={(e) => {setTitle(e.target.value)}}></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="year" className="form-label">Año lanzamiento</label>
                            <input type="number" min="1900" max="2025" className="form-control" value={year} onChange={(e) => { setYear(e.target.value) }}></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="duration" className="form-label">Duración (minutos)</label>
                            <input type="number" min="1" max="10000" className="form-control" value={duration} onChange={(e) => { setDuration(e.target.value) }}></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="lang" className="form-label">Idioma</label>
                            <input type="text" className="form-control" value={lang} onChange={(e) => { setLang(e.target.value) }}></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="director" className="form-label">Apellido director</label>
                            <input type="text" className="form-control" value={director} onChange={(e) => { setDirector(e.target.value) }}></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="country" className="form-label">País</label>
                            <input type="text" className="form-control" value={country} onChange={(e) => { setCountry(e.target.value) }}></input>
                        </div>

                        <button onClick={addMovie} className="btn btn-success">Guardar Película</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMovie