///*-----Hamburgermeny dropdown
  const menuButton = document.getElementById("menuToggle");

  let menuMobile = document.querySelector("#dropDownMenu");

//*---open dropdown (by click or pushing enter)

  const openDropdown = () => {

    if (menuMobile.classList.contains("dropdown"))
    {menuMobile.classList.remove("dropdown");
    }
    else 
    menuMobile.classList.add("dropdown");
  }

  menuButton.addEventListener("click", openDropdown);

  document.addEventListener('keydown', function(event){

    if(event.key == "ArrowDown"){
    openDropdown();
    }
  })

//*----close dropdown (by click or keydown)
  const closeDropDown = () => {
   menuMobile.classList.add("dropdown");
  }

  document.getElementById("closeDropDown").addEventListener("click", closeDropDown);

  document.addEventListener('keydown', function(event){
    if(event.key === "Escape")
    {
    if (menuMobile.classList.contains("dropdown") === false){
      closeDropDown();
    }
    }
  });

//*--------Toggle kategori i dropdown

  document.querySelector(".list__nested--mother").addEventListener("click", () =>{
  
  const categoryMenuNav = document.querySelector(".list__nested");
  
  if(categoryMenuNav.classList.contains("hidden") === true){
    categoryMenuNav.classList.remove("hidden");
  }
  else{
    categoryMenuNav.classList.add("hidden");
  }
})

//*-------Get logged in user info

  const getLoggedinUser = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    return loggedInUser;
  }

//*-------Get cart from local storage
  const getCart = () => {
    return JSON.parse(localStorage.getItem("cart"));
  }

//*-------Get total price from local storage
  const getTotalPriceOrder = () => {
    return JSON.parse(localStorage.getItem("totalPriceOrder"));
  }

// Uppdaterar varukorgen i local storage
  const setCartinLocalStorage = (cart) => {
    const stringifyCart = JSON.stringify(cart);
    localStorage.setItem("cart", stringifyCart);
  }
  
// //*----fetch from JSON 
  async function fetchProducts () {
    try{
    const response = await fetch("./js/data/products.json");
    const data = await response.json();
    return [...data.products];
  }
  catch (error) { console.log("fetch fungerar ej"); }
  }


// Skapar produkt kort komponent som kan anv??ndas i t.ex. produktlista, produktsida, s??kresultat
  const createProductCard = (product, parent) => {
    const articleElem = document.createElement("article");
    // Creates direct link to individual product
    const productLink = createURL("individualProductSection", `${product.category}` , `${product.sys.id}`);

    console.log(product);

    const testElem = document.createElement("div");
    testElem.innerHHTML = `<img src="${product.fields.image.fields.file.url}"`;

    articleElem.innerHTML = `
      <div class="product__img--container product__img--list">
        <a href="${productLink}">
          <img alt = "Produkt ${product.fields.title}"   
          class ="product__img" 
          src="${product.fields.image.fields.file.url}">
          </img>
        </a>
      </div>

      <span class="product__box">
      
        <span>
          <h3 class="text--uppercase text--cursive">
          ${product.fields.title}</h3>
          <h4 class="text--green">
          ${product.fields.price} kr</h4>
        </span>

        <button 
        class="addToCartBtn" 
        data-id="${product.sys.id}">
        K??p</button>
        
      </span>
    `
    parent.appendChild(articleElem);
  }


  const updateAmountCartNav = () => {
    const headerCartAmount = document.querySelector("#headerCartAmount");
    let amountCartNav = 0;

    if (getCart() !== null) {
      getCart().forEach(product => {
        amountCartNav += product.quantity;
      })
    }
    headerCartAmount.innerText = amountCartNav;
  };

//*-------showing today's date 

  let today = new Date().toJSON().slice(0,10).replace(/-/g, ' ');

  document.getElementById("todaysDate").textContent = " " + today;

  document.getElementById("dagensDatum").textContent = " " + today;



