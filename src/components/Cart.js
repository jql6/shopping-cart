// Cart.js
import "./Cart.css";
import React, { useState } from "react";
import fullMenu from "./../Menu";
import ReactCanvasConfetti from "react-canvas-confetti";

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

  const [fire, setFire] = useState(false);

  const onClickFire = () => {
    setFire({ fire: {} });
  };

  const confettiStyle = {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  return (
    <div className="cart-items">
      <h2>Food</h2>
      <ul className="no-list-style">
        {menuItems.map((item) => {
          return (
            <li key={item.name}>
              <div>{item.name}</div>
              <div>{item.quantity}</div>
            </li>
          );
        })}
      </ul>
      <h2>Drinks</h2>
      <ul className="no-list-style">
        {drinkItems.map((item) => {
          return (
            <li key={item.name}>
              <div>{item.name}</div>
              <div>{item.quantity}</div>
            </li>
          );
        })}
      </ul>
      <button onClick={onClickFire}>Checkout</button>
      <ReactCanvasConfetti
        // set the styles as for a usual react component
        style={confettiStyle}
        // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
        fire={fire}
      />
    </div>
  );
}

export default Cart;
