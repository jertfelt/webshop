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
//     //räknaren i headern
// let cartCounterHeader = document.querySelector(".headercart__showAmount");
// //räknare i varukorgens footer
// let cartCounterFooter = document.querySelector("#cartTotal");


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
closeCartWindow.addEventListener("click", hideCart);

document.addEventListener('keydown', function (event) {
  if (event.key === "Escape") {
    hideCart();
  }
});

//*-----------varukorgen

const createCart = (item) => {
  console.log("test")
  let cartDiv = document.createElement("div");
  cartDiv.innerHTML = `<p>TEST</p>
`
  cartContent.appendChild(cartDiv);
}

//*---------event listeners
cartHeaderBtn.addEventListener("click", () => {
  showCart();
  createCart();
});

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

// Wrapper funktion för att köra den efter HTML har ritats
const buyProduct = () => {
  // Hämtar alla köp-knappar
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  // Sparar/uppdaterar varukorgen i local storage
  const addToCart = (prodID) => {
    const existingProducts = localStorage.getItem("cart");
    // Kollar om det redan finns något i local storage
    if (existingProducts) {
      // Lägger till produkterna från local storage till array
      const cart = JSON.parse(existingProducts);
      // Kollar om produkten redan finns
      const existingProduct = cart.find(product => product.sys.id === prodID);

      if (existingProduct) {
        // Uppdaterar cart med rätt antal (quantity).
        const updatedProducts = cart.map(product => {
          if (product.sys.id === prodID) {
            product.quantity++;
          }
          return product;
        })
        setCartinLocalStorage(updatedProducts);
        return;
      } else { //Skapa ny produkt och lägger till i array.
        cart.push({
          quantity: 1,
          sys: { id: prodID }
        });
        return;
      }

    } else { // Skapar ny array med produkt om varukorgen är tom
      const newCartWithProduct = [
        {
          quantity: 1,
          sys: { id: prodID }
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

  // Hämtar ID på klickat produkt och lägger till den i varukorgen
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      addToCart(prodID);
    })
  });
}