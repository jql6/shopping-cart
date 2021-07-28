import React from "react";
import "./MenuPage.css";
import MenuDisplay from "./components/MenuDisplay";

function MenuPage(props) {
  return (
    <div className="menu-content">
      <h1 className="page-header">Menu</h1>
      <MenuDisplay
        cartItems={props.cartItems}
        cartTotal={props.cartTotal}
        setCartTotal={props.setCartTotal}
        setCartItems={props.setCartItems}
        getCartQuantity={props.getCartQuantity}
      />
    </div>
  );
}

export default MenuPage;
