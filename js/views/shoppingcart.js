//actual cart 
let cartItems = document.querySelector(".cart-items");
let cartTotal = document.querySelector(".cart-total");
let cartContent = document.querySelector(".cart-content");

//visa totala varor 
const setCartValue = (cart) => {
  let temporaryTotal = 0;
  let itemstTotal = 0;

  //antal varor multiplicerat med pris
  cart.map(item => {
    temporaryTotal += item.price * item.amount;
    itemstTotal += item.amount;
  })

  //visar antal i varukorgen (i header)
  cartItems.innerText = itemsTotal; 
  //plus tar bort decimaler pga who needs them right:
  cartTotal.innerText = parseFloat(temporaryTotal.toFixed(2));
}


  //rendera ut varukorginnehåll:
  const addCartItem = (item) => {

    let cartdiv = document.createElement("div");
    cartdiv.classList.add("cart-item-new");
    cartdiv.innerHTML = `
    <div class="cart-item" data-id=${item.id}>
        <img src=${item.image}
    alt="product" />
    <div>
      <h4>${item.title}</h4>
      <h5>${item.price}SEK</h5>
      <span class="remove-item" data-id=${item.id} >Remove</span>
    </div>
    <div>
      <i class="fas fa-chevron-up" data-id=${item.id}></i>
      <p class="item-amount">${item.amount}</p>
      <i class="fas fa-chevron-down"data-id=${item.id} ></i>
    
    </div> 
    </div>
    `
    cartContent.appendChild(cartdiv);
  }

  //skapa kundvagn samt visa 
  const setupCart = () => {
    cart = Storage.getCartStart();
    setCartValue(cart);
    populateCart(cart);
  

    //aktivera (öpnna, stäng)
  const showCart = () => {
    cartOpacity.classList.add("transparentBcg");
    cartMenu.classList.add("showCart");
  };

  cartButt.addEventListener("click", showCart);

    //hide cart
  const hideCart = () =>{
    cartOpacity.classList.remove("transparentBcg");
    cartMenu.classList.remove("showCart");
  }

  //closing cart with escape button
document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
		cartOpacity.classList.remove("transparentBcg");
    cartMenu.classList.remove("showCart");
	}
});

  closeCartButt.addEventListener("click", hideCart);

  };