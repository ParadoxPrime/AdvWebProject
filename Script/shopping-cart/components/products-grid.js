//IMPORT
import { products } from "../Data/dataset.js";
import { product } from "./product.js";
import { cart } from "./cart.js";

//COMPONENT CODES
export const productsGrid = {

  //------------------------------------
  //Data properties
  data: [],

  //------------------------------------
  //Functions
  renderUI(containerID) {
    //Display all Products in Grid
    const container = document.getElementById(containerID);
    // Clear the current product list before rendering the selected products.
    container.innerHTML = "";
    //Load dataset 
    this.data = products;
    //Loop through all product in products array
    this.data.forEach(item => {     
      product.data = item; 
      container.innerHTML += product.renderUI();
    });
  },

  //Handle "Add to Cart"
  //JavaScript modules (type="module") are scoped strictly to their own file and are not added to the global window object. 
  // An inline onclick="..." attribute in your HTML looks for a function in the global scope, 
  // so it cannot find your module-scoped function
  addEventToBtnAddToCart() {
    //Add click event to all "Add to Cart" Buttons
    let buttons = document.querySelectorAll('button.add-to-cart-btn');
    //Loop through the NodeList and attach an event listener to each button
    buttons.forEach(button => {
      button.addEventListener('click', (event) => {
        let id = event.target.dataset.id;
        // Find the selected product and check whether it is already in the cart.
        let selectedProduct = this.data.find(p => p.id == id);
        //console.log(selectedProduct);
        const existing = cart.seletedData.find(item => item.id == id);

        if (existing) {
          //Only increase quantity if possible
          if (existing.quantity < selectedProduct.stockQuantity) {
            existing.quantity++;
          } else {
            alert("Maximum stock reached.");
          }
        } else {
          //Add a new product to cart
          cart.seletedData.push({
              id: selectedProduct.id,
              name: selectedProduct.name,
              price: selectedProduct.price,
              quantity: 1
          });
          //console.log(cart.seletedData);
        }
        // Save the updated cart and refresh its display.
        cart.saveCart();
        cart.renderUI("cartContainer");
      });
    });
  }
}
