import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <h1>BlogJS!</h1>
            <div className="links">
                <Link to="/">Accueil</Link>
                <Link to="/create" >Nouveau Blog</Link>
            </div>
        </div>
    )
}

export default Navbar
