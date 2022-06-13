import React from 'react';
import Home from './Pages/Home'
import Register from './components/Register'
import MeusFavoritos from './Pages/MeusFavoritos'
//import MeusFavoritos from './Pages/MeusFavoritos'
import DetailsMovies from './Pages/DetailsMovies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (

    <>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/details/:id' element={<DetailsMovies />} />
          <Route path='/register' element={<Register />} />
          <Route path='/favoritos' element={<MeusFavoritos/>} />
        </Routes>
      </Router>
    </>


  );
}

export default App;