import React from "react";
import { Link } from "react-router-dom";
import { Slider } from "../Slider/index";
import Footer from "../Footer/index";
import CardTopBuy from "../CardTopVenta/index";
import "./style.css";

export const Inicio = () => {
  return (
    <div className="inicio">
      <Slider />
      <CardTopBuy />
      <Footer />
    </div>
  );
};
