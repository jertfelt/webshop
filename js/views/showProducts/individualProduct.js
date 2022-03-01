const queryParams = new URLSearchParams(location.search);
const productId = queryParams.get('id');

const individualGrid = document.getElementById("individualGrid");

const productCreator = (product)=>{
  const sectionProduct = document.createElement("section");
  sectionProduct.classList.add("products__individual");
  individualGrid.appendChild(sectionProduct);
  
  const articleProduct = document.createElement("article");
  articleProduct.classList.add("product__columns");

  articleProduct.innerHTML = `
    <div class="column">
    <h2 class="text--green text--cursive">${product.fields.title}</h2>
    <img alt="Produkt"
    src="/${product.fields.image.fields.file.url}">
    </img>
    </div>
    <span class="product__box--individual column">
    
      <h3>${product.fields.title}</h3>
      <p class="text--s text--green text--bold">
      ${product.fields.price} kr </p>
   
    <p class="text--s">${product.fields.description}</p>
    <button class="addToCartBtn " 
    data-id="${product.sys.id}">Köp
    </button>
    </span>
  `
  sectionProduct.appendChild(articleProduct);
}

// Wrapper funktion som kör funktioner/eventListeners efter HTML i produktlistan har ritats
const setAddToCartClickProduct = (productList) => {
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

async function getProduct() {  
  allProductsArray = await fetchProducts();
  //testar: 

  console.log(allProductsArray);
  //
  allProductsArray.map((product) => {
    if (product.sys.id === productId){
        productCreator(product)
        setAddToCartClickProduct(product);
    }
  })
}
  
getProduct();