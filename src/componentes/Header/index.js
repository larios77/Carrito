import React, { useContext } from "react";
import Logo from "../../images/logo.jpeg";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";
import "./style.css";

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito] = value.carrito;

  const toogleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div>
      <header className="py-3">
        <Link to="/">
          <div className="logo">
            <img
              src={Logo}
              alt="Logo craft"
              width="80"
              decoding="async"
              loading="lazy"
            />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/productos">PRODUCTOS</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <div className="cart" onClick={toogleMenu}>
              <box-icon name="cart"></box-icon>
              <span className="item__total">{carrito.length}</span>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};
