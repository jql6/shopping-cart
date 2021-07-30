// Menu.js

// Function for generating menu item objects
const menuItemFactory = (
  name,
  imagePath,
  itemType,
  quantity = 0,
  tempQuantity = 0
) => {
  // Return an object with properties name and imagePath
  return {
    name,
    imagePath,
    itemType,
    quantity,
    tempQuantity,
  };
};

// Create a card list

const fullMenu = [
  menuItemFactory("Barbacoa Nachos", "nachos.webp", "food"),
  menuItemFactory("Carnitas Tacos", "carnitas-tacos.webp", "food"),
  menuItemFactory("Chicken Quesadillas", "quesadillas.webp", "food"),
  menuItemFactory("Jarritos soda", "jarritos.webp", "drink"),
  menuItemFactory("Perrier water", "perrier.webp", "drink"),
];

export default fullMenu;
