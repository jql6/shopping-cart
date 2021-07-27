// MenuDisplay.js
import "./MenuDisplay.css";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import fullMenu from "./../Menu";

function MenuDisplay(props) {
  // Create a card list
  const [menuItems] = useState(fullMenu.food);

  const [drinkItems] = useState(fullMenu.drinks);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const incrementTotalQuantity = () => {
    setTotalQuantity(totalQuantity + 1);
  };

  const decrementTotalQuantity = () => {
    setTotalQuantity(totalQuantity - 1);
  };

  return (
    <div className="menu">
      <h2>Food</h2>
      <div className="item-list">
        {menuItems.map((item) => {
          // item = {name, imagePath}
          return (
            <ItemCard
              key={item.name}
              name={item.name}
              id={item.name}
              imagePath={item.imagePath}
              incrementTotalQuantity={incrementTotalQuantity}
              decrementTotalQuantity={decrementTotalQuantity}
            />
          );
        })}
      </div>
      <h2>Drinks</h2>
      <div className="item-list">
        {drinkItems.map((item) => {
          return (
            <ItemCard
              key={item.name}
              name={item.name}
              id={item.name}
              imagePath={item.imagePath}
              incrementTotalQuantity={incrementTotalQuantity}
              decrementTotalQuantity={decrementTotalQuantity}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          props.setCartTotal(totalQuantity);
        }}
      >
        Save to cart
      </button>
    </div>
  );
}

export default MenuDisplay;
