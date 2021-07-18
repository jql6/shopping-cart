// Menu.js
import "./Menu.css";
import React, { useState } from "react";
import ItemCard from "./ItemCard";

// Function for generating menu item objects
const menuItemFactory = (name, imagePath) => {
  // Return an object with properties name and imagePath
  return {
    name,
    imagePath,
  };
};

function Menu() {
  // Create a card list
  const [menuItems] = useState([
    menuItemFactory("Barbacoa Nachos", "nachos.webp"),
    menuItemFactory("Carnitas Tacos", "carnitas-tacos.webp"),
    menuItemFactory("Chicken Quesadillas", "quesadillas.webp"),
  ]);

  const [drinkItems] = useState([
    menuItemFactory("Jarritos soda", "jarritos.webp"),
    menuItemFactory("Perrier water", "perrier.webp"),
  ]);

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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
