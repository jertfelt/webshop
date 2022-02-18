// Wrapper funktion för att köra den efter HTML har ritats
const buyProduct = () => {
  // Hämtar alla köp-knappar
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  // Sparar/uppdaterar varukorgen i local storage
  const addToCart = (prodID) => {
    const existingProducts = localStorage.getItem("cart");
    let cart = [];

    const createNewProduct = () => {
      const newProduct = {
        quantity: 1,
        sys: { id: prodID }
      };
      // Uppdaterar array med ny produkt
      cart.push(newProduct);
    }

    // Kollar om det redan finns något i local storage
    if(existingProducts) {
      // Lägger till produkterna från local storage till array
      cart = JSON.parse(existingProducts);
      // Kollar antal av varje produkt och addar 
      cart.forEach(product => {
        let quantity = product.quantity;
        // Om det är samma produkt, lägger en till
        if(product.sys.id === prodID) {
          quantity++;
          // Uppdaterar antal för vald produkt
          product.quantity = quantity;
        } else { // Skapa ny produkt i varukorgen
          createNewProduct();
        }
      });
    } else {
      createNewProduct();
    }

    // Konvertera array till string
    const stringifyCart = JSON.stringify(cart);

    // Uppdaterar varukorgen i local storage
    localStorage.setItem("cart", stringifyCart);
  }

  // Hämtar ID på klickat produkt och lägger till den i varukorgen
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      addToCart(prodID);
    })
  });
}