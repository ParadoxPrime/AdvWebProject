// No imports are required
export const product = {
  //------------------------------------
  //Data properties
  data: {},

  //------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //
    let status = this.data.inStock ? 
        '<span class="badge bg-success">In Stock </span>' : '<span class="badge bg-danger">Out of Stock </span>';
    //
    const UI = `
      <div class="container col-md-6 my-2">
        <!-- Product Section -->
        <div class="card shadow-sm mb-5 h-100">        
          <div class="row g-0">                      
            <!-- Product image column -->
            <div class="ratio ratio-4x3">
              <img class="w-100 rounded-3" src=${this.data.image} alt="Product Image">
            </div>
            <!-- Product information column -->
            <div class="">
              <div class="card-body">
                <span class="badge bg-primary mb-2">${this.data.category}</span>
                <h2>${this.data.name}</h2>
                <h3 class="text-success mb-3">$ ${this.data.price.toLocaleString()}</h3>
                <p >${this.data.description}</p>
                <div class="mb-2"><strong>Status:</strong>${status}</span></div>
                <div><strong>Stock Quantity:</strong><span> ${this.data.stockQuantity}</span></div>

                <!--Add button "Add to Cart"-->
                <button class="btn btn-primary mt-3 w-100 add-to-cart-btn" data-id="${this.data.id}" 
                  ${!this.data.inStock ? "disabled" : ""}>Add To Cart</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    `;    
    //
    return UI;
  }
}