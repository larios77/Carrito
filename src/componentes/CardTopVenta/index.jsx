import React from "react";
import imgTop1 from "../../images/bambu masaya2.jpeg";
import imgTop2 from "../../images/bolsos.jpg";
import imgTop3 from "../../images/jolleria castillo Masaya3.jpeg";

const CardTopBuy = () => {
  return (
    <div className="container">
      <div className="row">
        <h2 className="py-3">Los más vendidos</h2>
        <div className="col-4">
          <div class="card my-3">
            <img
              src={imgTop1}
              class="card-img-top w-100"
              alt="bambu de masaya"
              loading="lazy"
              height="300px"
              decoding="async"
            />
            <div class="card-body">
              <h5 class="card-title">Bambú De masaya</h5>
              <p class="card-text">C$ 300</p>
              <a href="#" class="btn btn-primary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card my-3">
            <img
              src={imgTop2}
              class="card-img-top w-100"
              alt="Bolsos Tejidos a mano"
              loading="lazy"
              height="300px"
              decoding="async"
            />
            <div class="card-body">
              <h5 class="card-title">Bolsos Tejidos a mano"</h5>
              <p class="card-text">C$ 150</p>
              <a href="#" class="btn btn-primary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div class="card my-3">
            <img
              src={imgTop3}
              class="card-img-top w-100"
              alt="Joyeria de masaya"
              loading="lazy"
              height="300px"
              decoding="async"
            />
            <div class="card-body">
              <h5 class="card-title">Joyeria de masaya</h5>
              <p class="card-text">C$ 100</p>
              <a href="#" class="btn btn-primary">
                Ver Detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTopBuy;
