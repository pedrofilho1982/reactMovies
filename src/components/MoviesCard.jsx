import React from "react";
import { useState } from "react";
import { Card } from '../Style/Container'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {Link} from 'react-router-dom'
const Img_API = "https://image.tmdb.org/t/p/w300";

// Altera o "favorite" para o contrário ao ser executada



export default function MovieCard ({ id, poster_path, title, vote_average }) {
    
    const [favorite, setFavorite] = useState(false);
    

    return (
    <>
    
        
       <Card>
       <Link to={`/details/${id}`}>
       <img className="img"src={ Img_API + poster_path }alt={"poster"}/>
       </Link>  
       <div className="container-card">
       <h3>Título: {title}</h3>
       
       <span>Vote: {vote_average}</span>
       <p>
           <i ><FavoriteIcon /><FavoriteBorderIcon/></i>
       </p>
       </div>
       </Card>
       


    </>
    )
};




