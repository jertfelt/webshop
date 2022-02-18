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
// const getCartStart= () => {
  //saving the cart for future visits or, for first time visitors, an empty array:
//   return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
// }


//*------visa/dölja VARUKORG

 //visa varukorg
 const showCart = () => {
  cartContainer.classList.add("cart__transparentBack");
  cartContainer.classList.remove("cart__hidden")
  cartMenu.classList.add("cart__show");

};

//dölja varukorg
const hideCart =() => {
  cartContainer.classList.add("cart__hidden");
  cartMenu.classList.remove("cart__show");
}
  

  //*-----------varukorgen

  const createCart=(item)=>{
    let cartDiv = document.createElement("div");
    cartDiv.innerHTML = `<p>TEST</p>
  `
  cartContent.appendChild(cartDiv);
  }



//*-----------------ADD TO CART FUNCTION

let cart = [];
let buttonsArray = [];
const addToCartButtons = document.querySelectorAll(".addToCartBtn");
console.log(cart, "<--cart", buttonsArray, "<--buttons");
let temporaryTotal = 0;
let itemsTotal = 0;


const saveCart =(cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
}

const setCartValue = (cart) => {
      setCartValue(cart);
      // saveCart(cart);
    }

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


  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      addToCart(prodID);
      // setCartValue(prodID);
      // createCart(prodID);
      console.log("Lagd i cart")

    })
  });
  }

//*-----------
    // //method for cart array
    // populateCart(cart){
    //   //adding cart items to the cart
    //   cart.forEach(item => this.addCartItem(item));
    // }


  //*----------funktioner i varukorgen


const cartFunctions =() => {
  const clearCart = ()=>{
    //get all the ID:s from the cart
    // let cartItemsAllClear = cart.map(item => item.id);

    //loop over the array and remove
    // cartItemsAllClear.forEach(id => this.removeItem(id));
    // while(cartContent.children.length> 0){
    //   cartContent.removeChild(cartContent.children[0]);
    }
    hideCart();

      //clear cart (whole cart)
      clearCartBtn.addEventListener("click", () => {
        clearCart();
      });

      //ta bort en
      const removeItem = (id)=> {
        // cart = cart.filter(item => item.id !== id);
        // setCartValue(cart);
        // saveCart(cart);
      }

  cartMenu.addEventListener("click", event => {

        if(event.target.classList.contains("cart__item--remove")){
          let removeItem = event.target;
          let id = removeItem.dataset.id;
          let removingDom = removeItem.parentElement.parentElement;
          removingDom.classList.add("hidden");
          this.removeItem(id);
        }
  
        else if (event.target.classList.contains("fa-chevron-up")){
         let addAmount = event.target;
         let addId = addAmount.dataset.id;

          //push new amount into local storage:
          let temporaryItem = cart.find(item => item.id === addId);
          temporaryItem.amount = temporaryItem.amount + 1;
         
          saveCart(cart);
          setCartValue(cart);
          addAmount.nextElementSibling.innerText = temporaryItem.amount;
        }
  
        else if (event.target.classList.contains("fa-chevron-down")){
         let reduceAmount = event.target;
         let reduceId = reduceAmount.dataset.id;
         
         //reduce new amount:
         let temporaryItem = cart.find(item => item.id ===reduceId);
         temporaryItem.amount = temporaryItem.amount -1;
        
          if(temporaryItem.amount > 0){
            saveCart(cart);
            setCartValue(cart);
            reduceAmount.previousElementSibling.innerText = temporaryItem.amount;
            
          }
          else{
            console.log(reduceAmount.parentElement.parentElement.classList)
            console.log(temporaryItem.id);
             let classID = (reduceAmount.parentElement.parentElement.getAttribute("data-id"));
            console.log(classID);
            if (temporaryItem.id === classID){
              reduceAmount.parentElement.parentElement.classList.add("hidden")
            }
            removeItem(temporaryItem.id);
          }
        }
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

//bugg: syns inte något tar över
cartNavBtn.addEventListener("click", showCart);

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


