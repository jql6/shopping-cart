// MenuDisplay.js
import "./MenuDisplay.css";
import React, { useState } from "react";
import ItemCard from "./ItemCard";
import fullMenu from "./../Menu";
import ReactCanvasConfetti from "react-canvas-confetti";

function MenuDisplay(props) {
  /**
   * This component displays the menu items as a single column
   */

  // Collect the food items from the menu
  const [menuItems] = useState(
    fullMenu.filter((item) => {
      return item.itemType == "food";
    })
  );
  // Collect the drink items from the menu
  const [drinkItems] = useState(
    fullMenu.filter((item) => {
      return item.itemType == "drink";
    })
  );
  // Keep track of the total through '+' and '-' button clicks
  const [totalQuantity, setTotalQuantity] = useState(props.cartTotal);

  const [tempFullMenu, setTempFullMenu] = useState(props.cartItems);

  // Update the totalQuantity and item quantities with each button press
  const incrementTotalQuantity = (itemName) => {
    setTotalQuantity(totalQuantity + 1);
    incrementItemQuantity(itemName);
  };

  const decrementTotalQuantity = (itemName) => {
    setTotalQuantity(totalQuantity - 1);
    decrementItemQuantity(itemName);
  };
  // Keep track of the item quantities
  const [tempCart, setTempCart] = useState(
    JSON.parse(JSON.stringify(fullMenu))
  );

  const incrementItemQuantity = (itemName) => {
    // Get the index of the item in the array from fullMenu
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
  // Get the quantity of an item being ordered
  const getCartQuantity = (itemName) => {
    const itemIndex = props.cartItems.findIndex((element) => {
      return element.name == itemName;
    });
    return props.cartItems[itemIndex].quantity;
  };

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
    bottom: "-950px",
    width: "100%",
    height: "100%",
    zIndex: -1,
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
              getCartQuantity={() => {
                return getCartQuantity(item.name);
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
              getCartQuantity={() => {
                return getCartQuantity(item.name);
              }}
            />
          );
        })}
      </div>
      <button
        className={"page-end-button"}
        onClick={() => {
          // Adjust the cart total number
          props.setCartTotal(totalQuantity);
          // Update the items in the cart
          props.setCartItems(tempCart);
          onClickFire();
        }}
      >
        Save to cart
      </button>
      <ReactCanvasConfetti
        // set the styles as for a usual react component
        style={confettiStyle}
        // if value in this.state.fire cast to the logical true and will differ from the previous, then will be called new animation
        fire={fire}
        particleCount={30}
        spread={120}
        scalar={4}
        startVelocity={45}
        origin={{ y: 0.7 }}
      />
    </div>
  );
}

export default MenuDisplay;
