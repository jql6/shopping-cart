import React from "react";
import "./MenuPage.css";
import Menu from "./components/Menu";

function MenuPage(props) {
  return (
    <div className="menu-content">
      <h1 className="page-header">Menu</h1>
      <Menu setCartTotal={props.setCartTotal} />
    </div>
  );
}

export default MenuPage;
