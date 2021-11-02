import React, { useContext } from 'react'
import Nike from '../../images/Nike.jpg'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/Dataprovider'
import './style.css'

export const Header = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu
  const [carrito] = value.carrito

  const toogleMenu = () => {
    setMenu(!menu)
  }
  return (
    <div>
      <header>
        <Link to="/">
          <div className="logo">
            <img src={Nike} alt="Nike" width="150" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>
        </ul>
        <div className="cart" onClick={toogleMenu}>
          <box-icon name="cart"></box-icon>
          <span className="item__total">{carrito.length}</span>
        </div>
      </header>
    </div>
  )
}
