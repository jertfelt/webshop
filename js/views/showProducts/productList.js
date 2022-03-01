// URL: http://127.0.0.1:5500/index.html?section=productListSection&category=Dam

//*----variables:
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
const productGrid = document.getElementById("productListGrid");

let allProductsArray = [];

//*------create 
function drawProducts() {  
  
//creating elements and styling:
  const categoryHeader = document.getElementById("categoryHeader");

  categoryHeader.innerText = qsCategory + "kläder";
  
  const sectionElem = document.createElement("section");

  sectionElem.classList.add("products__grid--all")

  productGrid.appendChild(sectionElem);

// Repeat for each product in category

  allProductsArray.forEach(product => {
  
    if(product.category === qsCategory) {
      createProductCard(product, sectionElem);
    }
  })
}

// Wrapper funktion som kör funktioner/eventListeners efter HTML i produktlistan har ritats

const setAddToCartClick = () => {

  // Hämtar alla köp-knappar
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  // Hämtar ID på klickat produkt och lägger till den i varukorgen
  addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
      const prodID = button.dataset.id;
      addToCart(prodID);
      setTotalPriceOrder();
      updateAmountCartNav();
      showCart();
     
    })
  });
}

async function getProductsJSON() {
  
  const response = await fetch ("./js/data/products.json");

  const data = await response.json();

  allProductsArray =[...data.products];
  
  const productTitle = allProductsArray.map(x => { 
    return x;
  })
  drawProducts();
  setAddToCartClick(allProductsArray);

}
getProductsJSON();

// //*-----asyncfunktion
// async function getProductList() {

//   allProductsArray = await fetchProducts();
//   drawProducts();  
//   setAddToCartClick(allProductsArray);
// }

// getProductList();