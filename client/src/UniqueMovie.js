import axios from 'axios'
import React, {useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import aos from 'aos'
import 'aos/dist/aos.css'
import Swal from 'sweetalert2'

function UniqueMovie({movie}){

    // This refresh the app
    const navigator = useNavigate()

    // This is an animation by roll down
    useEffect(() => {
        aos.init()
    }, [])

    // This function eliminate a movie
    function DeleteMovie(idmovie){
        axios.post('/api/movie/DeleteMovie', {idmovie: idmovie}).then(res => {
            console.log(res.data)
            //alert(res.data)
            Swal.fire("Hecho", "La película ha sido eliminada")
            navigator(0)
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3" data-aos="zoom-in">
                    <ul className="list-group">
                        <li className="list-group-item">{movie.idmovie}</li>
                        <li className="list-group-item">{movie.title}</li>
                        <li className="list-group-item">{movie.year}</li>
                        <li className="list-group-item">{movie.duration}</li>
                        <li className="list-group-item">{movie.lang}</li>
                        <li className="list-group-item">{movie.director}</li>
                        <li className="list-group-item">{movie.country}</li>
                    </ul>
                    
                    <Link to={`/EditMovie/${movie.idmovie}`}><li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => {DeleteMovie(movie.idmovie)}}>Eliminar</button>
                    
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UniqueMovie