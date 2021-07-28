// MenuDisplay.js
import "./MenuDisplay.css";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import fullMenu from "./../Menu";

function MenuDisplay(props) {
  // Create a card list
  const [menuItems] = useState(
    fullMenu.filter((item) => {
      return item.itemType == "food";
    })
  );

  const [drinkItems] = useState(
    fullMenu.filter((item) => {
      return item.itemType == "drink";
    })
  );

  const [totalQuantity, setTotalQuantity] = useState(0);

  const incrementTotalQuantity = (itemName) => {
    setTotalQuantity(totalQuantity + 1);
    console.log(itemName);
    incrementItemQuantity(itemName);
  };

  const decrementTotalQuantity = (itemName) => {
    setTotalQuantity(totalQuantity - 1);
    decrementItemQuantity(itemName);
  };

  const [tempCart, setTempCart] = useState(fullMenu);

  const incrementItemQuantity = (itemName) => {
    const itemIndex = tempCart.findIndex((element) => {
      return element.name == itemName;
    });
    let tempCartCopy = tempCart;
    // Update the quantity of the item
    tempCartCopy[itemIndex].quantity += 1;
    // Save the changes
    setTempCart(tempCartCopy);
  };

  const decrementItemQuantity = (itemName) => {
    const itemIndex = tempCart.findIndex((element) => {
      return element.name == itemName;
    });
    let tempCartCopy = tempCart;
    // Update the quantity of the item
    tempCartCopy[itemIndex].quantity -= 1;
    // Save the changes
    setTempCart(tempCartCopy);
  };

  return (
    <div className="menu">
      <h2>Food</h2>
      <div className="item-list">
        {menuItems.map((item) => {
          // item = {name, imagePath, itemType, quantity}
          return (
            <ItemCard
              key={item.name}
              name={item.name}
              id={item.name}
              imagePath={item.imagePath}
              incrementTotalQuantity={() => {
                incrementTotalQuantity(item.name);
              }}
              decrementTotalQuantity={() => {
                decrementTotalQuantity(item.name);
              }}
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
              incrementTotalQuantity={() => {
                incrementTotalQuantity(item.name);
              }}
              decrementTotalQuantity={() => {
                decrementTotalQuantity(item.name);
              }}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          // Adjust the cart total number
          props.setCartTotal(totalQuantity);
          // Update the items in the cart
          props.setCartItems(tempCart);
        }}
      >
        Save to cart
      </button>
    </div>
  );
}

export default MenuDisplay;
