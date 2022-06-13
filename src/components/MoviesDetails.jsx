import React from 'react'
import { useState, useEffect } from "react";
//import API_KEY from '../data/api'
import { useNavigate, useParams } from 'react-router-dom'
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardMedia from '@mui/material/CardMedia';
//import Typography from "@mui/material/Typography";

const Img_API = "https://image.tmdb.org/t/p/w800";


const MoviesDetails = () => {

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() =>{
    console.log(id);
  }, [])

  return (
    <>
    <Card>
    <CardMedia>
      <Box>
        
       <img src={Img_API + id.poster_path} alt="..."/>
       
      </Box>
      
      <h1>titulo: {id.title}</h1>
      <p>sinopse: {id.overview}</p>
      <p>data de laçamentos: {id.release_data}</p>
      <p>Nota: {id.vote_average}</p>
       </CardMedia>
      </Card>
      
    </>

  )
}

export default MoviesDetails
