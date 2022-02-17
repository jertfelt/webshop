//*-----------variabler:
  //varukorg knappar
   

  //kundkorgen
 const cartContent = document.querySelector("#cartDynamicContent");

  //räknaren i headern


  //produkter

  //kundvagn arrayer
  


//*------------local storage kundvagn
  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  //sparar kundvagnen för framtida besök/ tom array om första gången:
  const getCartAtStart =() => {
    return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
  }

  //?-------------metod för kundvagnens array
  const fillCartArray= (cart) =>{
    //lägger till items till kundvagn
      cart.forEach(item => addCartItem(item));
    }
  
  

//*--------------funktioner



//?----------visa totala varor 

const setCartValue = (cart) => {
  let temporaryTotal = 0;
  let itemsTotal = 0;
  cart.map(item =>{
  //antal varor multiplicerat med pris
    temporaryTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });
  //visar antal i varukorgen (i header)
  cartItems.innerText = itemsTotal; 
  //plus tar bort decimaler pga who needs them right:
  cartTotal.innerText = parseFloat(temporaryTotal.toFixed(2));
}   

//?----------rendera ut varukorginnehåll:
const addCartItemstoCart = (item) => {
  let cartdiv = document.createElement("div");
  cartdiv.classList.add("cart__new--item");
  cartdiv.innerHTML = `
  <article class="cart__item" 
  data-id=${item.id}>
      <img src=${item.image}
  alt="product" />
  <div>
     <h4>${item.title}</h4>
    <h5>${item.price}SEK</h5>
    <span class="cart--remove"
    data-id=${item.id}>Ta bort</span>
  </div>
  <div>
    <i class="fas fa-chevron-up" 
    data-id=${item.id}>
    </i>
    <p class="cart--amount">${item.amount}</p>
    <i class="fas fa-chevron-down"
    data-id=${item.id}></i>
  
  </div> 
  </article>
  `
  cartContent.appendChild(cartdiv);
}

//?------skapa kundvagn, visa och dölja


//stänga cart
  
  //dölja dropdownmeny (om det är där man är)


//stänga cart med esc-knappen
 



