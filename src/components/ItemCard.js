// ItemCard.js
import "./ItemCard.css";
import React, { useEffect, useState } from "react";

function ItemCard(props) {
  /**
   * Component for displaying menu items and associated images
   */

  // Keep track of the item quantity
  const [quantity, setQuantity] = useState(props.getCartQuantity(props.name));
  // States for preventing nonsensical item quantity changes
  const [minusClickable, setMinusClickable] = useState([true]);
  const [plusClickable, setPlusClickable] = useState([true]);
  // Event handlers for plus and minus buttons
  const decrementQuantity = () => {
    setQuantity(parseInt(quantity) - 1);
  };
  const incrementQuantity = () => {
    // Using parseInt() to force JS to add numerically instead of concatenating
    setQuantity(parseInt(quantity) + 1);
  };

  // Grey out the numbers when too much or too little
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
        <div>
          <button
            onClick={() => {
              props.decrementItemQuantity(props.name);
              decrementQuantity();
            }}
            disabled={!minusClickable}
          >
            -
          </button>
        </div>
        <p>
          {props.name}: {quantity}
        </p>
        <div>
          <button
            onClick={() => {
              props.incrementItemQuantity(props.name);
              incrementQuantity();
            }}
            disabled={!plusClickable}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
