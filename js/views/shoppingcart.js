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


// <div class="cart__item" data-id=${item.id}>
  //   <img src=${item.image}
  //   alt="produkt ${item.title}"/>
  //   <div>
  //     <h4>${item.title}</h4>
  //     <h5>${item.price}SEK</h5>
  //     <span class="cart--remove" data-id=${item.id}>Ta bort</span>
  //     </div>
  //     <div>
  //     <i class="fas fa-chevron-up" 
  //     data-id=${item.id}></i>
  //     <p class="cart--amount">${item.amount}</p>
  //     <i class="fas fa-chevron-down"
  //     data-id=${item.id}></i>
  //   </div> 
  // </div>

//*-----------------ADD TO CART FUNCTION
let cart = [];
console.log(cart);
const addToCart = (prodID) => {
  // const buyProduct = () => {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  const addToCart = (prodID) => {
  const existingProduct = localStorage.getItem("cart");

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
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      addToCart(prodID);
    })
  });
  }
// }
// const buyProduct = (prodID) => {
//   addToCart(prodID);
//   // showCart();
// }