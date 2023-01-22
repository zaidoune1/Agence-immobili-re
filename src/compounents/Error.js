import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/errorStyle.css"
const Error = () => {

    const navigate = useNavigate();

    return (
        <div className='bloc-error'>

            <h1 className='not-found'>404</h1>
            <p className='text-page-not-found'> Oups! la page que vous demendez n'existe pas.  </p>
            <p style={{cursor:"pointer"}} className='return-home-click' onClick={() => navigate("/") }>Retourner sur la page d'accueil</p>

        </div>
    )
}

export default Error
