import logo from './logo.svg';
import './App.css';
import ListMovies from './ListMovies';
import AddMovies from './AddMovie';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div classNameName="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">CRUD MERN STACK Video Club</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="AddMovie">Añadir una Pelicula</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListMovies/>} exact/>
          <Route path='/AddMovie' element={<AddMovies />} exact />
          <Route path='/EditMovie' element={<EditMovie />} exact />
          <Route path='/DeleteMovie' element={<DeleteMovie />} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
