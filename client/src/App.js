import logo from './logo.svg';
import './App.css';
import ListMovies from './ListMovies';
import AddMovies from './AddMovie';
import EditMovie from './EditMovie';
import DeleteMovie from './DeleteMovie';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1 className="title01">CRUD MERN STACK VideoCLub</h1>

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
