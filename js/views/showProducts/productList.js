// URL: http://127.0.0.1:5500/index.html?section=productListSection&category=Dam
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');

let allProductsArray = [];

function drawProducts() {  
  //Draw title for current category.
  const categoryHeader = document.createElement("h2");
  categoryHeader.classList.add("text--green", "text--cursive", "centered");
  categoryHeader.innerText = qsCategory + "kläder";
  productListSection.appendChild(categoryHeader);

  const sectionElem = document.createElement("section");
  sectionElem.classList.add("products__grid--all")
  productListSection.appendChild(sectionElem);

  allProductsArray.forEach(product => {
    // Filter products for selected category.
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
      showCart();
    })
  });
}

async function getProductList() {
  allProductsArray = await fetchProducts();
  drawProducts();  
  setAddToCartClick(allProductsArray);
}

getProductList();