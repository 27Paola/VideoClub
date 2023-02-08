import React, {useState, useEffect} from 'react';
import UniqueMovie from './UniqueMovie';
import axios from 'axios'

function ListMovies(){

    const [datamovies, setDatamovies] = useState([])

    useEffect(() => {
        axios.get('/api/movie/getmovies').then(res => {
            console.log(res.data)
            setDatamovies(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    // Map list of movies in the movie object
    const listmovies = datamovies.map(movie => {
        return(
            <div>
                <UniqueMovie movie={movie}/>
            </div>
        )
    })

    return (
        <div>
            <h2 className="title02">Lista de Películas</h2>
            {listmovies}
        </div>
    )
}

export default ListMovies