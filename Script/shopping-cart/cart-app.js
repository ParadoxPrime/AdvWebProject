//IMPORT
import { productsGrid } from "./Components/products-grid.js";
import { cart } from "./Components/cart.js"
import { localStorage } from "./Components/local-storage.js";

//COMPONENT CODES
//Render all products when the page first opens.
productsGrid.renderUI("productsContainer");
productsGrid.addEventToBtnAddToCart();

//Render cart
cart.seletedData = localStorage.loadData();
cart.renderUI("cartContainer");
cart.addEvents();
