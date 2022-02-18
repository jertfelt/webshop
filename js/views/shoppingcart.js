//*-----------variabler:

 //varukorg knappar
 const cartHeaderBtn = document.querySelector(".headercart");
 const cartNavBtn = document.getElementById("cartLinkNav");
 const closeCartWindow = document.querySelector(".cart--close");
 const clearCartBtn = document.getElementById("clearCart");
 

 //varukorgen 
 const cartMenu = document.querySelector(".cart__content");
 const cartContainer = document.querySelector(".cart__container");

 //det som renderas ut 
 const cartContent = document.querySelector("#cartDynamicContent");

//räknaren i headern
let cartCounterHeader = document.querySelector(".headercart__showAmount");

//räknare i varukorgens footer
let cartCounterFooter = document.querySelector("#cartTotal");


//*-------LOCAL STORAGE:
const getCartStart= () => {
  //saving the cart for future visits or, for first time visitors, an empty array:
  return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
}


//*------visa/dölja VARUKORG

 //visa
  const showCart =() => {
    cartContainer.classList.add("cart__transparentBack");
    cartContainer.classList.remove("cart__hidden")
    cartMenu.classList.add("cart__show");
  };

  //dölja varukorg
  const hideCart =() => {
    cartContainer.classList.add("cart__hidden");
    cartMenu.classList.remove("cart__show");
  }
  closeCartWindow.addEventListener("click", hideCart);

  document.addEventListener('keydown', function(event){
    if(event.key === "Escape")
    {
    hideCart();
    }
  });

  //*-----------varukorgen

  const createCart=(item)=>{
    let cartDiv = document.createElement("div");
    cartDiv.innerHTML = `<p>TEST</p>
  `
  cartContent.appendChild(cartDiv);
  }

  //*---------event listeners
  cartHeaderBtn.addEventListener("click", () =>{ 
    showCart();
    createCart();});

  //bugg: syns inte något tar över
  cartNavBtn.addEventListener("click", showCart);


//*-----------------ADD TO CART FUNCTION

let cart = [];
let buttonsArray = [];
const addToCartButtons = document.querySelectorAll(".addToCartBtn");
console.log(cart, "<--cart", buttonsArray, "<--buttons");
let temporaryTotal = 0;
let itemsTotal = 0;

const = saveCart =(cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
}

//set up cart values
const setCartValue = (cart) => {
  cart.map(item =>{
    //amount of items multiplied by their prices
    temporaryTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });
  //showing amount in cart in navbar:
  cartItems.innerText = itemsTotal; 
  ///fixing potential decimals
  cartTotal.innerText = parseFloat(temporaryTotal.toFixed(2));
}

//!-----------------------------köp-knappen: @Blanca
  const buyProduct = () => {
    const addToCart = (prodID) => {
    
    const existingProduct = localStorage.getItem("cart");

  // Kollar om det redan finns något i local storage
  if(existingProduct) {
    // Lägger till produkterna från local storage 
    cart = JSON.parse(existingProduct);
     //push new amount into local storage:
     let temporaryItem = cart.find(item => item.id === addId);
     temporaryItem.amount = temporaryItem.amount + 1; //functionality for varukorg
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

   //for each cart item:
   const addCartItems = (item) =>{
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


  
  const setupCart =() => {
    // cart = getCartStart();
    setCartValue(cart);
    cart.forEach(item => addCartItems(item));
  };

  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      // let inCart = cart.find(item => item.id === id);
      addToCart(prodID);
      addCartItems(prodID);
      
    })
  });
  }

  
  const cartLogic =() => {
    
  const clearCart= ()=>{
    //get all the ID:s from the cart
    let cartItemsAllClear = cart.map(item => item.id);
  
    //loop over the array and remove
    cartItemsAllClear.forEach(id => this.removeItem(id));
    
    while(cartContent.children.length>0){
      cartContent.removeChild(cartContent.children[0]);
    }
    hideCart(); 
  }

    //clear cart (whole cart)
    clearCartBtn.addEventListener("click", () => {
      clearCart();
    });

    const removeItem = (id)=> {
      cart = cart.filter(item => item.id !== id);
      setCartValue(cart);
      // saveCart(cart);
    }

// }
// const buyProduct = (prodID) => {
//   addToCart(prodID);
//   // showCart();
// }