//*-----------variabler:
  //varukorg knappar
    let openCartHeader = document.querySelector(".button__cart")[0];
    let openCartDropDown = document.getElementById("varukorgNav");
    let closeCartBtn = document.querySelector("cart--close");
    let clearCartBtn = document.querySelector("cart--clear");
    let cartMenu = document.querySelector(".cart__main");
    let cartOpacity = document.querySelector("cart__overlay");

  //kundkorgen
    let cartItems = document.querySelector(".cart-items");
    let cartTotal = document.querySelector(".cart-total");
    let cartContent = document.querySelector(".cart-content");

  //räknaren i headern
    const cartCounter = document.querySelector(".cart__totalitems")[0];

  //produkter

  //kundvagn arrayer
  let cart = [];
  // eventuellt någon annanstans? let buttons = [];


//*------------local storage kundvagn
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  //sparar kundvagnen för framtida besök/ tom array om första gången:
  const getCartAtStart =() => {
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
  }



//*--------------funktioner

//?----------visa totala varor 
  const setCartValue = (cart) => {
    let temporaryTotal = 0;
    let itemsTotal = 0;

  //antal varor multiplicerat med pris
  cart.map(item => {
    temporaryTotal += item.price * item.amount;
    itemsTotal += item.amount;
  })

  //visar antal i varukorgen (i header)
  cartItems.innerText = itemsTotal; 

  //plus tar bort decimaler pga who needs them right:
    cartTotal.innerText = parseFloat(temporaryTotal.toFixed(2));
  }

//?----------rendera ut varukorginnehåll:

  const addCartItem = (item) => {
    let cartDiv = document.createElement("div");
    cartDiv.classList.add("cart__item--new");
    cartDiv.innerHTML = `
    <div class="cart__item" 
    data-id= ${item.id}>
      <img src=${item.image}
        alt="produkt-bild-${item.title}" />
      <div>
        <h4>${item.title}</h4>
        <h5>${item.price}SEK</h5>
        <span class="cart__item--remove" 
        data-id=${item.id}>
        Remove</span>
      </div>
      <div>
        <i class="fas fa-chevron-up" 
        data-id=${item.id}></i>
        <p class="cart__item--amount">${item.amount}</p>
        <i class="fas fa-chevron-down"
        data-id=${item.id} ></i>
      </div> 
    </div>
    `
    cartContent.appendChild(cartdiv);
  }

//?------skapa kundvagn, visa och dölja
  const setupCart = () => {

    cart = getCartStart();
    setCartValue(cart);
    populateCart(cart);
  
    //aktivera (öppna) cart
  const showCart = () => {
    cartOpacity.classList.add("cart__transparentBack");
    cartMenu.classList.add("cart__show");
  };

  cartButt.addEventListener("click", showCart);

//stänga cart
  const hideCart = () =>{
    cartOpacity.classList.remove("cart__transparentBack");
    cartMenu.classList.remove("cart__show");
  //dölja dropdownmeny (om det är där man är)

  }

//stänga cart med esc-knappen
  document.addEventListener('keydown', function(event){
	  if(event.key === "Escape"){
      cartOpacity.classList.remove("transparentBack");
      cartMenu.classList.remove("cart__show");
	  }});

  closeCartButt.addEventListener("click", hideCart);

};

//?-------------metod för kundvagnens array
  const fillCartArray= (cart) =>{
  //lägger till items till kundvagn
    cart.forEach(item => addCartItem(item));
  }



