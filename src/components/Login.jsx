import React from 'react'
import { ImgHome, Navbar, Icon } from '../Style/MovieCardStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import urlImg from '../assets/título.png'
import {Link} from 'react-router-dom'

function Login(event) {
    

    return (
        <>
            <Navbar>
                <Link to={`/`}>
            <h1>HOME</h1>
            </Link>
            <ImgHome src={urlImg} />
                <nav className="navbar">
                    <div>
                        <input type="text" placeholder="pesquisa...." />
                        <Icon href="##" className="icon"><FontAwesomeIcon icon={faSearch} />
                        </Icon>
                    </div>
                    
                    <div className="menu">
                        <ul className="list">
                            <Link to={`/register`}>
                            <li><a href="##">Login</a></li>
                            </Link>
                            <Link to={`/favoritos`}>
                                <li><a href="##">My Favorite</a></li>

                            </Link>
                        </ul>
                    </div>
                </nav>
            </Navbar>

        </>
   )
}

export default Login