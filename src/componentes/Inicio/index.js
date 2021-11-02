import React from 'react'
import Portada from '../../images/inicio.jpg'
import { Link } from 'react-router-dom'
import './style.css'

export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="content__inicio">
        <Link to="/productos">
          <h1>Productos</h1>
        </Link>
      </div>
      <div>
        <img src={Portada} alt="portada" />
      </div>
    </div>
  )
}
