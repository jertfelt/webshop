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
const cartTotal = document.getElementById("cartTotal");

//räknaren i headern (T)
let cartCounterHeader = document.querySelector(".headercart__showAmount");

//räknare i varukorgens footer (T)
let cartCounterFooter = document.querySelector("#cartTotal");


//*------visa/dölja VARUKORG

//visa
const showCart = () => {
  cartContainer.classList.add("cart__transparentBack");
  cartContainer.classList.remove("cart__hidden")
  cartMenu.classList.add("cart__show");
};

//dölja varukorg
const hideCart = () => {
  cartContainer.classList.add("cart__hidden");
  cartMenu.classList.remove("cart__show");
}


//*-----------varukorgen


const createCart = (item) => {

  let cartDiv = document.createElement("div");
  cartDiv.innerHTML = `<p>HÄR SKA DET RENDERAS</p>
`

const setCartValue = (cart) => {
      setCartValue(cart);
      // saveCart(cart);
    }
// }
// const buyProduct = (prodID) => {
//   addToCart(prodID);


//  //for each cart item:
//  addCartItem(item){
//   let cartdiv = document.createElement("div");
//   cartdiv.classList.add("cart-item-new");

//   cartdiv.innerHTML = `
//   <div class="cart__item" data-id=${item.id}>
//       <img src=${item.image}
//   alt="product" />
//   <div>
//     <h4>${item.title}</h4>
//     <h5>${item.price}SEK</h5>
//     <span class="cart__item--remove" data-id=${item.id} >Remove</span>
//   </div>
//   <div>
//     <i class="fas fa-chevron-up" data-id=${item.id}></i>
//     <p class="cart__item--amount">${item.amount}</p>
//     <i class="fas fa-chevron-down"data-id=${item.id} ></i>
  
//   </div> 
//   </div>
//   `
//   cartContent.appendChild(cartdiv);
// }
  cartContent.appendChild(cartDiv);
}



//*-----------
    // //method for cart array
    // populateCart(cart){
    //   //adding cart items to the cart
    //   cart.forEach(item => this.addCartItem(item));
    // }


//*-----------------ADD TO CART FUNCTION
// Sparar/uppdaterar varukorgen i local storage
const addToCart = (prodID) => {
  // Hittar rätt produkt och hämtar datan.
  const selectedProductData = productList.find(product => product.sys.id === prodID);
  // Hämtar produkter från local storage
  const existingProductList = getCart();
  // Kollar om det redan finns produkter i cart
  if (existingProductList !== null) {
    // Kollar om produkten redan finns
    const existingProduct = existingProductList.find(product => product.sys.id === prodID);
    if (existingProduct) {
      // Uppdaterar cart med rätt antal (quantity) och totala priset.
      const updatedProducts = existingProductList.map(product => {
        if (product.sys.id === prodID) {
          product.quantity++;
          product.amount = product.fields.price * product.quantity;
        }
        return product;
      })
      setCartinLocalStorage(updatedProducts);
      return;
    } else { //Skapa ny produkt och lägger till i array.
      const newProducts = existingProductList;
      newProducts.push({
        quantity: 1,
        amount: selectedProductData.fields.price,
        sys: { id: selectedProductData.sys.id },
        category: selectedProductData.category,
        fields: {
          title: selectedProductData.fields.title,
          price: selectedProductData.fields.price,
          description: selectedProductData.fields.description,
          image: { fields: { file: { url: selectedProductData.fields.image.fields.file.url } } }
        }
      });
      setCartinLocalStorage(newProducts);
      return;
    }
  } else { // Skapar ny array med produkt om varukorgen är tom
    const newCartWithProduct = [
      {
        quantity: 1,
        amount: selectedProductData.fields.price,
        sys: { id: selectedProductData.sys.id },
        category: selectedProductData.category,
        fields: {
          title: selectedProductData.fields.title,
          price: selectedProductData.fields.price,
          description: selectedProductData.fields.description,
          image: { fields: { file: { url: selectedProductData.fields.image.fields.file.url } } }
        }
      }
    ]
    setCartinLocalStorage(newCartWithProduct);
    return;
  }
}
const setCartinLocalStorage = (cart) => {
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyCart);
}
const getTotalPriceOrder = () => {
  const cartItems = getCart();
  let totalPrice = 0;
  cartItems.forEach(product => {
    totalPrice += product.amount;
  })
  localStorage.setItem("totalPriceOrder", totalPrice);
}
// Wrapper funktion som kör funktioner efter HTML har ritats
const setAddToCartClick = (productList) => {
  // Hämtar alla köp-knappar
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");
  // Hämtar ID på klickat produkt och lägger till den i varukorgen
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      addToCart(prodID);
      getTotalPriceOrder();
    })
  });
}

//*---------event listeners

closeCartWindow.addEventListener("click", hideCart);

  document.addEventListener('keydown', function(event){
    if(event.key === "Arrowdown")
    {
    showCart();
    }
  });

cartHeaderBtn.addEventListener("click", () =>{
  showCart();
});



document.addEventListener('keydown', function(event){
  if(event.key === "Escape")
  {
  hideCart();
  }
});

//*--------knapp till beställningsbekräfelse-sida:
document.getElementById("toConfirmation").addEventListener("click",
  (e) => {
    e.preventDefault();
  changeActivePage("orderConfirmationSection");
 })

 //!bugg: syns inte något tar över  (T)
cartNavBtn.addEventListener("click", showCart);


// const clearCart=() => {
 //get all the ID:s from the cart
//   let cartItemsAllClear = cart.map(item => item.id);

 //loop over the array and remove
//   cartItemsAllClear.forEach(id => this.removeItem(id));

//   while(cartContent.children.length>0){
//     cartContent.removeChild(cartContent.children[0]);
//   }
//   hideCart(); 
// }



//*---------------Cart functionality
// cartMenu.addEventListener("click" ,event => {

//   if(event.target.classList.contains("cart__item--remove")){
//     let removeItem = event.target;
//     let id = removeItem.dataset.id;
//     let removingDom = removeItem.parentElement.parentElement;
//     removingDom.classList.add("cart__item--hide");
//     this.removeItem(id);
//   }

//   else if (event.target.classList.contains("fa-chevron-up")){
//    let addAmount = event.target;
//    let addId = addAmount.dataset.id;
//     //push new amount into local storage:
//     let temporaryItem = cart.find(item => item.id === addId);
//     temporaryItem.amount = temporaryItem.amount + 1;

//     saveCart(cart);
//     this.setCartValue(cart);
//     addAmount.nextElementSibling.innerText = temporaryItem.amount;
//   }

//   else if (event.target.classList.contains("fa-chevron-down")){
//    let reduceAmount = event.target;
//    let reduceId = reduceAmount.dataset.id;

//    //reduce new amount:
//    let temporaryItem = cart.find(item => item.id ===reduceId);
//    temporaryItem.amount = temporaryItem.amount -1;

//     if(temporaryItem.amount > 0){
//       Storage.saveCart(cart);
//       this.setCartValue(cart);
//       reduceAmount.previousElementSibling.innerText = temporaryItem.amount;

//     }
//     else{
//       console.log(reduceAmount.parentElement.parentElement.classList)
//       console.log(temporaryItem.id);
//        let classID = (reduceAmount.parentElement.parentElement.getAttribute("data-id"));
//       console.log(classID);
//       if (temporaryItem.id === classID){
//         reduceAmount.parentElement.parentElement.classList.add("hide-item")
//       }
//       this.removeItem(temporaryItem.id);
//     }
//   }
// });


// const setCartValue = (cart) => {
//   let temporaryTotal = 0;
//   let itemsTotal = 0;
//   cart.map(item =>{
//     //amount of items multiplied by their prices
//     temporaryTotal += item.price * item.amount;
//     itemsTotal += item.amount;
//   });
//   //showing amount in cart in navigations wooo!:
//   cartItems.innerText = itemsTotal; 

// }