import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/Dataprovider";

const ProductoItem = ({ id, title, price, image, category }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div class="card">
            <img
              src={image}
              className="card-img-top"
              alt="img"
              decoding="async"
              loading="lazy"
              width="250px"
              height="250px"
              tyle={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-muted fs-5 mb-2">{category}</p>
              <p className="card-text fs-4">C$ {price}</p>
              <button
                className="btn btn-primary me-2"
                onClick={() => addCarrito(id)}
              >
                Añadir al carrito
              </button>
              <button className="btn btn-secondary me-2">Ver detalles</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductoItem;
