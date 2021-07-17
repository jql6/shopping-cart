import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import MenuPage from "./MenuPage";
import CartPage from "./CartPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/menu" component={MenuPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
