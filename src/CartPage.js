// CartPage.js
import React from "react";
import "./CartPage.css";
import Cart from "./components/Cart";

function CartPage() {
  return (
    <div className="Cart">
      <h1 className="page-header">Cart</h1>
      <Cart />
    </div>
  );
}

export default CartPage;
