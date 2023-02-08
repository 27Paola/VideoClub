import React from 'react';

function UniqueMovie({movie}){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <ul className="list-group">
                        <li className="list-group-item">{movie.idmovie}</li>
                        <li className="list-group-item">{movie.title}</li>
                        <li className="list-group-item">{movie.year}</li>
                        <li className="list-group-item">{movie.duration}</li>
                        <li className="list-group-item">{movie.lang}</li>
                        <li className="list-group-item">{movie.director}</li>
                        <li className="list-group-item">{movie.country}</li>
                    </ul>
                    
                    <button className="btn btn-success">Editar</button>
                    &nbsp;
                    <button className="btn btn-danger">Eliminar</button>
                    
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UniqueMovie