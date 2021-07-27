// Menu.js

// Function for generating menu item objects
const menuItemFactory = (name, imagePath, quantity = 0) => {
  // Return an object with properties name and imagePath
  return {
    name,
    imagePath,
    quantity,
  };
};

// Create a card list
const menuItems = [
  menuItemFactory("Barbacoa Nachos", "nachos.webp"),
  menuItemFactory("Carnitas Tacos", "carnitas-tacos.webp"),
  menuItemFactory("Chicken Quesadillas", "quesadillas.webp"),
];

const drinkItems = [
  menuItemFactory("Jarritos soda", "jarritos.webp"),
  menuItemFactory("Perrier water", "perrier.webp"),
];

const fullMenu = {
  food: menuItems,
  drinks: drinkItems,
};

export default fullMenu;
