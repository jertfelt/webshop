// Wrapper funktion för att köra den efter HTML har ritats
const buyProduct = () => {
  // Hämtar alla köp-knappar
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  // Sparar/uppdaterar varukorgen i local storage
  const addToCart = (prodID) => {
  const existingProduct = localStorage.getItem("cart");
  let cart = [];

  // Kollar om det redan finns något i local storage
  if(existingProduct) {
    // Lägger till produkterna från local storage 
    cart = JSON.parse(existingProduct);
  }
  // Kolla om obj redan finns i varukorgen, om det gör lägg till +1 i quantity.
  // cart.forEach(element => {
  //   if(product.sys.id === prodID) {
  //     let quantity;
    // Skapar objekt för vald produkt
    const product = {
      quantity: 1,
      sys: { id: prodID }
    };
  // }});

  // Uppdaterar array med ny produkt
  cart.push(product);


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