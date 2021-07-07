import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import Menu from "./Menu";

const Routes = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/shop" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
