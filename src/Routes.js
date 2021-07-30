// Routes.js
import "./Routes.css";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { HashRouter, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import MenuPage from "./MenuPage";
import CartPage from "./CartPage";
import fullMenu from "./Menu";

const Routes = () => {
  // This keeps track of how many of each item the person is ordering
  const [cartItems, setCartItems] = useState(fullMenu);
  // This is the number of items that the person is ordering
  const calculateCartTotal = () => {
    let sum = 0;
    cartItems.map((item) => {
      sum += item.tempQuantity;
    });
    return sum;
  };
  const [cartTotal, setCartTotal] = useState(calculateCartTotal());

  return (
    <HashRouter>
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
            <Link to="/shopping-cart/menu">Menu</Link>
          </li>
          <li>
            <Link to="/shopping-cart/cart">Cart: {cartTotal}</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <App {...props} />} />
        <Route
          exact
          path="/shopping-cart/menu"
          render={(props) => (
            <MenuPage
              cartItems={cartItems}
              setCartItems={setCartItems}
              calculateCartTotal={calculateCartTotal}
              cartTotal={cartTotal}
              setCartTotal={setCartTotal}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/shopping-cart/cart"
          render={(props) => <CartPage cartItems={cartItems} {...props} />}
        />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
