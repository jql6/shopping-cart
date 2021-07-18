import React from "react";
import "./MenuPage.css";
import Menu from "./components/Menu";

function MenuPage() {
  return (
    <div className="menu-content">
      <h1 className="page-header">Menu</h1>
      <Menu />
    </div>
  );
}

export default MenuPage;
