// Routes.js
import "./Routes.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import MenuPage from "./MenuPage";
import CartPage from "./CartPage";
import fullMenu from "./Menu";

const Routes = () => {
  // This is the number of items that the person is ordering
  const [cartTotal, setCartTotal] = useState(0);
  // This keeps track of how many of each item the person is ordering
  const [cartItems, setCartItems] = useState(fullMenu);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Quesadilla Bravas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charset="UTF-8" />
        <meta name="description" content="Mexican restaurant website" />
      </Helmet>
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
            <MenuPage
              setCartItems={setCartItems}
              cartItems={cartItems}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/cart"
          render={(props) => <CartPage cartItems={cartItems} {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
