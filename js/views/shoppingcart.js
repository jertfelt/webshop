const addToCart = (prodID) => {
  const existingProduct = localStorage.getItem("cart");
  let cart = [];

  // Kollar om det redan finns något i local storage
  if(existingProduct) {
    // Lägger till produkterna från local storage 
    cart = JSON.parse(existingProduct);
  }

  // Skapar objekt för vald produkt
  const product = {
    sys: { id: prodID }
  };

  // Uppdaterar array med ny produkt
  cart.push(product);

  // Konvertera array till string
  const stringifyCart = JSON.stringify(cart);

  // Uppdaterar varukorgen i local storage
  localStorage.setItem("cart", stringifyCart);
}
