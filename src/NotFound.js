import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="not-found">
            <h2>Désolé</h2>
            <p>La page ne peut pas être trouvée</p>
            <Link to='/'>Retourner à la page d'accueil</Link>
        </div>
    )
}

export default NotFound
