import React, { useContext } from "react";
import { DataContext } from "../../context/Dataprovider";
import ProductoItem from "./ProductoItem";
import Footer from "../Footer/index";
import "./style.css";

export const Productos = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;

  return (
    <div>
      <h1 className="title">PRODUCTOS</h1>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            price={producto.price}
            image={producto.image.default}
            category={producto.category}
            cantidad={producto.cantidad}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};
