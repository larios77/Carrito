import React from "react";
import Slide1 from "../../images/mirador de catarina.jpg";
import slide2 from "../../images/Mombacho.jpg";
import slide3 from "../../images/Artesanias-San-juan-de-Oriente.jpg";
import "./index.css";

export const Slider = () => {
  return (
    <div className="container-fluid my-3">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={Slide1}
              class="d-block w-100 img__slide"
              alt="portada"
              height="400px"
              decoding="async"
              loading="lazy"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="title__slider">Mirador de catarina</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={slide2}
              class="d-block w-100 img__slide"
              alt="portada"
              height="400px"
              decoding="async"
              loading="lazy"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="title__slider">Mirador de Mombacho</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={slide3}
              class="d-block w-100 img__slide"
              alt="portada"
              height="400px"
              decoding="async"
              loading="lazy"
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="title__slider">Artesanias</h5>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
