// Cart.js
import "./Cart.css";
import React, { useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function Cart(props) {
  // Get the food items from the full menu
  const [menuItems] = useState(
    props.cartItems.filter((element) => {
      return element.itemType == "food";
    })
  );
  // Get the drink items from the full menu
  const [drinkItems] = useState(
    props.cartItems.filter((element) => {
      return element.itemType == "drink";
    })
  );
  // Confetti code
  const [fire, setFire] = useState(false);

  const onClickFire = () => {
    setFire({
      fire: {},
    });
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
      <button className={"page-end-button"} onClick={onClickFire}>
        Checkout
      </button>
      <ReactCanvasConfetti
        // set the styles as for a usual react component
        style={confettiStyle}
        // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
        fire={fire}
        particleCount={60}
        spread={120}
        scalar={3}
        startVelocity={45}
        origin={{ y: 0.7 }}
      />
    </div>
  );
}

export default Cart;
