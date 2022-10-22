import React from "react";
import { Switch, Route } from "react-router";
import { Inicio } from "./Inicio/index";
import { Productos } from "./Productos/index";
import { Login } from "./Login/index";

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={Productos} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </section>
  );
};
