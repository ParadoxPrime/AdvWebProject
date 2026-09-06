//IMPORT
import { productsGrid } from "./components/products-grid.js";
import { cart } from "./components/cart.js"
import { localStorage } from "./components/local-storage.js";

//COMPONENT CODES
//Render all products when the page first opens.
productsGrid.renderUI("productsContainer");
productsGrid.addEventToBtnAddToCart();

//Render cart
cart.seletedData = localStorage.loadData();
cart.renderUI("cartContainer");
cart.addEvents();
