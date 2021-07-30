// CartPage.js
import React from "react";
import "./CartPage.css";
import Cart from "./components/Cart";

function CartPage(props) {
  return (
    <div className="Cart">
      <h1 className="page-header">Cart</h1>
      <Cart cartItems={props.cartItems} />
    </div>
  );
}

export default CartPage;
