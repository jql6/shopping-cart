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

  const incrementItemQuantity = (itemName) => {
    // Get the index of the item in the array from fullMenu
    const itemIndex = props.cartItems.findIndex((element) => {
      return element.name == itemName;
    });
    let cartItemsCopy = JSON.parse(JSON.stringify(props.cartItems));
    // Update the quantity of the item
    cartItemsCopy[itemIndex].tempQuantity += 1;
    // Save the changes
    props.setCartItems(cartItemsCopy);
  };

  const decrementItemQuantity = (itemName) => {
    const itemIndex = props.cartItems.findIndex((element) => {
      return element.name == itemName;
    });
    let cartItemsCopy = JSON.parse(JSON.stringify(props.cartItems));
    // Update the quantity of the item
    cartItemsCopy[itemIndex].tempQuantity -= 1;
    // Save the changes
    props.setCartItems(cartItemsCopy);
  };

  // Get the quantity of an item being ordered
  const getCartQuantity = (itemName) => {
    const itemIndex = props.cartItems.findIndex((element) => {
      return element.name == itemName;
    });
    return props.cartItems[itemIndex].tempQuantity;
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
              incrementItemQuantity={() => {
                incrementItemQuantity(item.name);
              }}
              decrementItemQuantity={() => {
                decrementItemQuantity(item.name);
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
              incrementItemQuantity={() => {
                incrementItemQuantity(item.name);
              }}
              decrementItemQuantity={() => {
                decrementItemQuantity(item.name);
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
          // Update the items in the cart
          props.setCartItems(() => {
            let cartItemsCopy = JSON.parse(JSON.stringify(props.cartItems));
            cartItemsCopy.map((item) => {
              item.quantity = item.tempQuantity;
            });
            props.setCartItems(cartItemsCopy);
            console.log(cartItemsCopy);
          });
          console.log(props.cartItems);
          props.setCartTotal(props.calculateCartTotal());
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
