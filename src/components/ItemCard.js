// ItemCard.js
import "./ItemCard.css";
import React, { useEffect, useState } from "react";

function ItemCard(props) {
  // Create a card list
  const [quantity, setQuantity] = useState([0]);
  const [minusClickable, setMinusClickable] = useState([true]);
  const [plusClickable, setPlusClickable] = useState([true]);
  // Event handlers for plus and minus buttons
  const decrementQuantity = () => {
    setQuantity(quantity - 1);
    props.decrementTotalQuantity();
  };
  const incrementQuantity = () => {
    // Using parseInt() to force JS to add numerically instead of concatenating
    setQuantity(parseInt(quantity) + 1);
    props.incrementTotalQuantity();
  };

  // Use effect grey out the numbers when too much or too little
  useEffect(() => {
    // If the quantity is at 0 or lower, disable the
    if (quantity <= 0) {
      setMinusClickable(false);
      setPlusClickable(true);
    } // Limit the amount of food that they can order
    else if (quantity >= 12) {
      setMinusClickable(true);
      setPlusClickable(false);
    } else {
      setMinusClickable(true);
      setPlusClickable(true);
    }
  });

  return (
    <div className="item-card">
      <div
        className="item-card-image"
        style={{ backgroundImage: `url(./images/${props.imagePath})` }}
      ></div>
      <div className="item-card-controls">
        <button onClick={decrementQuantity} disabled={!minusClickable}>
          -
        </button>
        <p>
          {props.name}: {quantity}
        </p>
        <button onClick={incrementQuantity} disabled={!plusClickable}>
          +
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
