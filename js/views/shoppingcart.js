//*-----------variabler:
  //varukorg knappar
  const cartHeaderBtn = document.querySelector("headercart");
  const cartNavBtn = document.getElementById(cartLinkNav);
  const closeCartWindow = document.querySelector("cart--close");
  const clearCartBtn = document.getElementById("clearCart");

    //räknaren i headern
let cartCounterHeader = document.querySelector(".headercart__showAmount");
//räknare i varukorgens footer
let cartCounterFooter = document.querySelector("#cartTotal");


  //kundkorgen
  const cartMenu = document.querySelector("c.cart__content");
  const cartContainer = document.querySelector("cart__container");
  //det som renderas
  const cartContent = document.querySelector("#cartDynamicContent");


  //kundvagn arrayer
  let cart = [];
  


//*------------local storage kundvagn
//   const saveCart = (cart) => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }

//   // //sparar kundvagnen för framtida besök/ tom array om första gången:
//   // const getCartAtStart =() => {
//   //   return localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[];
//   // }

//   // //?-------------metod för kundvagnens array
//   // const fillCartArray = (cart) =>{
//   //   //lägger till items till kundvagn
//   //     cart.forEach(item => addCartItem(item));
    
//   //   }
  
  
// //!-----pseudokod: hämta produkter från JSON
// async function getProducts (){
// try {
//   let result = await fetch ("./js/data/products.json");
//   let data = await result.json();

//   let products = data.items;
//       products = products.map(item =>{
//         let {title, price} = item.fields;
//         let {id} = item.sys;
//         let image = item.fields.image.fields.file.url; 
//         let description = item.fields.description;
//         let category = item.category;  
//         return {title, price, id, image, category, description};
//       })
//       return products;
//     } catch (error) {
//       console.log(error);
//     }
//     console.log("hämtat")
// }


//*--------------funktioner



//?----------visa totala varor 

const setCartAmountValue = (cart) => {
  let temporaryTotal = 0;
  let itemsTotal = 0;
  cart.map(item =>{
  //antal varor multiplicerat med pris
    temporaryTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });
  //visar antal i varukorgen (i header)
  cartCounterHeader.innerText = itemsTotal; 
  //plus tar bort decimaler pga who needs them right:
  cartCounterFooter.innerText = parseFloat(temporaryTotal.toFixed(2));
}   

//?----------rendera ut varukorginnehåll:


const addCartItemsToCart = (item) => {
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

const showCart =() => {
  cartOpacity.classList.add("transparentBack");
  cartMenu.classList.add("cart__show");
};

const hideCart =() => {
  cartOpacity.classList.remove("transparentBack");
  cartMenu.classList.remove("cart__show");
}


const setupCart = () => {
  cart = getCartStart();
  setCartAmountValue(cart);
  fillCartArray(cart);
  
  cartHeaderBtn.addEventListener("click", showCart);
  cartNavBtn.addEventListener("click", showCart);

  closeCartWindow.addEventListener("click", hideCart);

  document.addEventListener('keydown', function(event){
    if(event.key === "Escape")
    {
      if (cartMenu.classList.contains("cart__show"))
      cartOpacity.classList.remove("transparentBack");
      cartMenu.classList.remove("cart__show");
    }
  });
  
}


// const cartLogic =()=> {
//   ///rensa hela kundvagen
// }




  //dölja dropdownmeny (om det är där man är)


//stänga cart med esc-knappen
 



