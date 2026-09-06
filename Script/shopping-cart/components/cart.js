//IMPORT
import { products } from "../Data/dataset.js"; 
import { localStorage } from "./local-storage.js";

// Store the selected products and provide cart actions.
export const cart = {
  //------------------------------------
  //Data properties
  seletedData: [],

  //------------------------------------
  //Functions
  saveCart() {
    localStorage.saveData(this.seletedData);
  },

  renderUI(cartID) {
    // Build the cart item markup and calculate the cart totals.
    let selectedUI = "";
    let grandTotal = 0;
    let itemCount = 0;
    //
    this.seletedData.forEach(item => {
      const subtotal = item.price * item.quantity;
      grandTotal += subtotal;
      itemCount += item.quantity;
      // Add the current cart item and its quantity controls to the page.
      selectedUI += `
        <div class="border rounded p-2 mb-2">
          <h6>${item.name}</h6>
          <div>Price: $${item.price}</div>
          <div>Subtotal: $${subtotal}</div>
          <div class="mt-2">
            <button class="btn btn-sm btn-danger decrease-btn" data-id="${item.id}">-</button>
            <span class="mx-2"> ${item.quantity} </span>
            <button class="btn btn-sm btn-success increase-btn" data-id="${item.id}">+</button>
          </div>
        </div>  
        `;
    });

    // Find the cart container that will display the generated markup.
    let cartItems = document.getElementById(cartID);
    // Clear the cart display
    cartItems.innerHTML = "";
    // Render the updated cart summary and its checkout controls.
    cartItems.innerHTML = `
      <div>
        <div class="card-header bg-success text-white">Cart (Items: <span id="cartCount"> ${itemCount} </span>)</div>
        <div class="card-body">
          <div id="cartItems">${selectedUI}</div>
          <hr>
          <h5>Items:<span id="totalItems">${itemCount}</span> </h5>
          <h4>Total: $<span id="totalCost">${grandTotal.toFixed(2)}</span> </h4>
          <button class="btn btn-success w-100 mt-3" id="checkoutBtn">Checkout</button>
        </div>
      </div>     
    `;    
    //Add event listners to all decrease and increase buttons
    this.addEvents();
  },

  //Handle + and - buttons
  addEvents() {
    //Add click event to all "decrease-btn" Buttons
    let decreaseButtons = document.querySelectorAll('button.decrease-btn');
    //Loop through the NodeList and attach an event listener to each button
    decreaseButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        let id = event.target.dataset.id;
        this.decreaseQuantity(id);
        cart.renderUI("cartContainer");
      });
    });

    //Add click event to all "decrease-btn" Buttons
    let increaseButtons = document.querySelectorAll('button.increase-btn');
    //Loop through the NodeList and attach an event listener to each button
    increaseButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        let id = event.target.dataset.id;    
        this.increaseQuantity(id);
        cart.renderUI("cartContainer");
      });
    });

    //Add click event to Checkout Button
    document.getElementById("checkoutBtn").addEventListener("click", () => {
      // Do not place an order when the cart has no items.
      if (this.seletedData.length === 0) {
        alert("Your cart is empty.");
        return;
      }
      // Calculate the order total before showing the confirmation message.
      const total = this.seletedData.reduce((sum, item) => sum + item.price * item.quantity, 0);
      alert(` Order Successfully Placed!
              Items: ${cart.length}
              Total: $${total.toFixed(2)}
              Thank you for shopping with us!
            `);
      // Empty and save the cart after the order is placed.
      this.seletedData = [];
      this.saveCart();
      cart.renderUI("cartContainer");
    });
  },

  //Increase Quantity
  increaseQuantity(id) {
    // Find the cart item and its matching product stock limit.
    const cartItem = this.seletedData.find(item => item.id == id);
    const product = products.find(p => p.id == id);
    if (cartItem.quantity < product.stockQuantity) {
      cartItem.quantity++;
      this.saveCart();
    }
  },

  //Decrease Quantity
  decreaseQuantity(id) {
    // Reduce the selected item's quantity by one.
    const cartItem = this.seletedData.find(item => item.id == id);
    cartItem.quantity--;
    if (cartItem.quantity <= 0) {
      // Remove the item when its quantity reaches zero.
      this.seletedData = this.seletedData.filter(item => item.id != id);
    }
    this.saveCart();
  },
}
