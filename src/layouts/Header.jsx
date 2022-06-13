import React from 'react';
import MovieCard from '../components/MoviesCard'
import { CardContainer } from '../Style/Container'
import API_KEY from '../data/api';

import { useEffect, useState } from "react";


const FeatureAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`


export default function Header() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(FeatureAPI)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])
  
 
   return (
    <>
  <CardContainer>
    <div className="header">
      {movies.length > 0 && movies.map((movie)=>(
        <MovieCard key={movie.id} {...movie}/>
      ))}
    </div>
    </CardContainer>

    </>
  )
}
