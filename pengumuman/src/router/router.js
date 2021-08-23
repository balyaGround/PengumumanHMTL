import React from "react";
import { Switch, Route } from "react-router-dom";
import Hasil from "../pages/hasil/hasil";
import Home from "../pages/homePages/home";

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/hasil/:id">
          <Hasil />
        </Route>
        <Route path="*">
          <div>
            <h1>PAGE NOT FOUND</h1>
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default Router;
