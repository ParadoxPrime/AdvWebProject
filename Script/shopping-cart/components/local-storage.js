// No imports are required because the browser provides localStorage.

// Local storage helper for saving and restoring the shopping cart.
export const localStorage = {
  //------------------------------------
  // Use one key so the cart can be found again when the page is reopened.
  key: "daniel-shopping-cart",

  //------------------------------------
  // Read the saved cart and return an empty cart when no valid data exists.
  loadData() {
    try {
      // Get the previously saved cart from the browser.
      const savedData = window.localStorage.getItem(this.key);
      // Convert the stored JSON string back into a JavaScript array.
      const cartData = savedData ? JSON.parse(savedData) : [];
      // Only return arrays because the cart expects a list of items.
      return Array.isArray(cartData) ? cartData : [];
    } catch (error) {
      // Ignore invalid or unavailable storage and start with an empty cart.
      return [];
    }
  },

  // Convert the cart to JSON and save it in the browser.
  saveData(data) {
    window.localStorage.setItem(this.key, JSON.stringify(data));
  }
};
