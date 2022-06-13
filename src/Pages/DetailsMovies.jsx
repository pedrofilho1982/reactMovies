import React from 'react'
import MoviesDetails from '../components/MoviesDetails';
//import API_KEY from '../data/api';
import Login from '../components/Login'
//import { useEffect, useState } from "react";



function DetailsMovies() {

  //const FeatureAPI = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`;


   return (
    <>
  <div >
  <Login/>
  
   <MoviesDetails/> 
</div>
     </>
    
  )
}

export default DetailsMovies