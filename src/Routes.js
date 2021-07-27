import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import MenuPage from "./MenuPage";
import CartPage from "./CartPage";

const Routes = () => {
  const [cartTotal, setCartTotal] = useState(0);

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
            <Link to="/cart">Cart: {cartTotal}</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <App {...props} />} />
        <Route
          exact
          path="/menu"
          render={(props) => (
            <MenuPage setCartTotal={setCartTotal} {...props} />
          )}
        />
        <Route exact path="/cart" render={(props) => <CartPage {...props} />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
