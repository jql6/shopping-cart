// Cart.js
import "./Cart.css";
import React, { useState } from "react";
import fullMenu from "./../Menu";

function Cart() {
  // Create a card list
  const [menuItems] = useState(
    fullMenu.filter((element) => {
      return element.itemType == "food";
    })
  );

  const [drinkItems] = useState(
    fullMenu.filter((element) => {
      return element.itemType == "drink";
    })
  );


  const [drinkItems] = useState(fullMenu.drinks);

  return (
    <div>
      <h2>Food</h2>
      {menuItems.map((item) => {
        return (
          <div key={item.name}>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
          </div>
        );
      })}
      <h2>Drinks</h2>
      {drinkItems.map((item) => {
        return (
          <div key={item.name}>
            <div>{item.name}</div>
            <div>{item.quantity}</div>
          </div>
        );
      })}
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
