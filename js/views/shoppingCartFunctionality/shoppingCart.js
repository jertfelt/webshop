//*-----------variabler:

//varukorg knappar
const cartHeaderBtn = document.querySelector(".headercart");
const cartNavBtn = document.getElementById("cartLinkNav");
const closeCartWindow = document.querySelector(".cart--close");
const clearCartBtn = document.getElementById("clearCart");

//varukorgen 
const cartMenu = document.querySelector(".cart__content");
const cartContainer = document.querySelector(".cart__container");
const cartFooter = document.querySelector(".cart__footer");

//det som renderas ut 
const cartContent = document.querySelector("#cartDynamicContent");
const cartTotal = document.getElementById("cartTotal");



//*------visa/dölja VARUKORG

//visa
const showCart = () => {
  cartContainer.classList.add("cart__transparentBack");
  cartContainer.classList.remove("cart__hidden")
  cartMenu.classList.add("cart__show");
  drawProductsinCart();
  drawTotalPriceOrderinCart();
  setCartEventListener();
};

//dölja varukorg
const hideCart = () => {
  cartContainer.classList.add("cart__hidden");
  cartMenu.classList.remove("cart__show");

  const url = new URL(window.location.href);
  const search_params = url.searchParams;
  const currentSection = search_params.get("section");
  // Uppdatera order confirmation när man stänger varukorgen
  if(currentSection === "orderConfirmationSection") {
    printOrderConfirmation();
  }
}


//*-----------varukorgen

// Rita produkterna
const drawProductsinCart = () => {
  const selectedProductList = getCart();

  // Ta bort ritade produkter
  while(cartContent.lastElementChild) {
    cartContent.removeChild(cartContent.lastElementChild);
  }

  // Visa footer
  cartFooter.classList.remove("hidden");

  // Om varukorgen är tom, visa meddelande och göm cart__footer
  if(!selectedProductList) {
    showEmptyCartMessage();
    return;
  }

  selectedProductList.forEach(product => {
    const cartDiv = document.createElement("div");
    cartDiv.innerHTML = `
      <div class="cart__item" data-id=${product.sys.id}>
        <img src=${product.fields.image.fields.file.url} alt="product" />
        <div>
        
          <h4>${product.fields.title}</h4>
          <h5 class="text--green">${product.amount} kr</h5>
          <span id="deleteBtn">
          <img src="styles/sass/img/icons8-trash-24.png" 
          alt="Ta bort varan"
          id="deleteIcon"/>
          </span>
        </div>
        <span class="cart--adding">
          <i class="fas fa-chevron-up" id="addBtn"></i>
          <p class="text--bold text--green">${product.quantity}</p>
          <i class="fas fa-chevron-down" id="decreaseBtn"></i>
        </span> 
      </div>
      `
      cartContent.appendChild(cartDiv);
  })
}

// Rita totala priset av hela order
const drawTotalPriceOrderinCart = () => {
  const totalPriceOrder = getTotalPriceOrder();
  cartTotal.innerText = totalPriceOrder;
}

//*---------------Cart functionality

// Lägger till produkter i local storage
const addToCart = (prodID) => {
  // Hittar rätt produkt och hämtar datan.
  const selectedProductData = allProductsArray.find(product => product.sys.id === prodID);
  // Hämtar produkter från local storage
  const existingProductList = getCart();
  // Kollar om det redan finns produkter i cart
  if (existingProductList !== null) {
    // Kollar om valt produkten redan finns
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
    } else { //Skapar produkt och lägger till i array om det är en ny produkt
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

// Uppdaterar totala priset för hela ordern i local storage
const setTotalPriceOrder = () => {
  const cartItems = getCart();
  // Returnerar totala priset av ordern
  const totalFinalPrice = cartItems
  .map(product => product.amount)
  .reduce((acc, current) => {
    return acc+current;
  });
  localStorage.setItem("totalPriceOrder", totalFinalPrice);
}

// Tar bort en produkt i taget. Funktionen körs när man klickar på pilen nedåt i varukorgen
const decreaseQuantity = (prodID) => {
  // Hämtar produkter från local storage
  const existingProductList = getCart();

  // Visa meddelande att varukorgen är tom om den enda/sista produkten tas bort 
  if(existingProductList.length === 1 && existingProductList[0].quantity === 1) {
    clearCart();
    return;
  }
  // Hitta vald produktID 
  const selectedProduct = existingProductList.find(product => product.sys.id === prodID);
  // Ta bort vald produkt om det är den enda av den typ (quantity = 1)
  if(selectedProduct.quantity === 1) {
    deleteProduct(prodID);
    return;
  }
  // Får lista med uppdaterat data
  const updatedProductList = existingProductList.map(product => {
    // Minska antal och uppdatera priset av vald produkt
    if (selectedProduct === product) {
    product.quantity--; 
    product.amount = product.fields.price * product.quantity;
    }
    return product;
  });

  setCartinLocalStorage(updatedProductList);
  setTotalPriceOrder();
  showCart();
}

// Tar bort hela produkten. Funktionen körs när man klickar på "Remove"-knappen i varukorgen
const deleteProduct = (prodID) => {
  // Hämtar produkter från local storage
  const existingProductList = getCart();

  // Visa meddelande att varukorgen är tom om den enda/sista produkten tas bort 
  if(existingProductList.length === 1) {
    clearCart();
    return;
  }

  // Får uppdaterat listan utan vald produkten som ska tas bort
  const updatedProductList = existingProductList.filter( (product) => {
  // Spara alla produkter förutom den som ska raderas
  return !(product.sys.id == prodID);
  })

  setCartinLocalStorage(updatedProductList);
  setTotalPriceOrder();
  showCart();
}

// Rensar varukorgen och totala priset i local storage och dropdown
const clearCart= () => {
  localStorage.removeItem("cart");
  localStorage.removeItem("totalPriceOrder");
  drawProductsinCart();
}

const showEmptyCartMessage = () => {
    const errorElement = document.createElement("h3");
    errorElement.classList.add("cart--empty");
    errorElement.innerText = "Din varukorg är tom."
    cartContent.appendChild(errorElement);
    cartFooter.classList.add("hidden");
    return;
}

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

clearCartBtn.addEventListener("click", clearCart);

//*--------knapp till beställningsbekräfelse-sida:
document.getElementById("toConfirmation").addEventListener("click",
  (e) => {
    e.preventDefault();
  changeActivePage("orderConfirmationSection");
 })

 //!bugg: syns inte något tar över  (T)
cartNavBtn.addEventListener("click", () => {
  closeDropDown();
  showCart();
});

// Lägg till event listener på varje produkt i varukorg. Kör funktion kopplat till klickat knapp: lägga till, radera produkt och minska antal produkt
const setCartEventListener = () => {
  const productList = document.querySelectorAll(".cart__item");

  productList.forEach(product => {
    product.addEventListener("click", (e) => {
      const prodID = e.currentTarget.dataset.id;

      if (e.target.id === "addBtn") {
        addToCart(prodID);
        setTotalPriceOrder();
        updateAmountCartNav();
        showCart();
        return;
      }
      if (e.target.id == "deleteBtn" || e.target.id =="deleteIcon") {
       
        deleteProduct(prodID);
        updateAmountCartNav();
        return;
      }
      if (e.target.id === "decreaseBtn") {
        decreaseQuantity(prodID);
        updateAmountCartNav();
        return;
      }
    })
  })
}