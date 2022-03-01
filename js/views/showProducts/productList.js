// URL: http://127.0.0.1:5500/index.html?section=productListSection&category=Dam

//*----variables:
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');
const productGrid = document.getElementById("productListGrid");


let allProductsArray = [];

//*------create 

// const drawProductsAll = (data) => {

//   const categoryHeader = document.getElementById("categoryHeader");
//     categoryHeader.innerText = qsCategory + "kläder";

//     const sectionElem = document.createElement("section");
    
//     sectionElem.classList.add("products__grid--all")

//     productGrid.appendChild(sectionElem);

//   data.forEarch(product => { 

//     const articleElem = document.createElement("article");

//     // Creates direct link to individual product
//     const productLink = createURL("individualProductSection", `${product.category}` , `${product.sys.id}`);

//     articleElem.innerHTML = `
//       <div class="product__img--container product__img--list">
//         <a href="${productLink}">
//           <img alt = "Produkt ${product.title}"   
//           class ="product__img" 
//           src="/${product.fields.image.fields.file.url}">
//           </img>
//         </a>
//       </div>

//       <span class="product__box">
      
//         <span>
//           <h3 class="text--uppercase text--cursive">
//           ${product.fields.title}</h3>
//           <h4 class="text--green">
//           ${product.fields.price} kr</h4>
//         </span>

//         <button 
//         class="addToCartBtn" 
//         data-id="${product.sys.id}">
//         Köp</button>
        
//       </span>
//     `
//     sectionElem.appendChild(articleElem);
    
//   })
// }
  


function drawProducts() {  
  
// creating elements and styling:
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
  }
  )
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

// //*-----asyncfunktion
async function getProductList() {
 
  allProductsArray = await fetchProducts();
  console.log("testar");
  fetchProducts();
  drawProducts();  
  setAddToCartClick(allProductsArray);

}

getProductList();

// async function getProductList() {
//   const response = await fetch("./js/data/products.json");

//   const data = await response.json();

//   allProductsArray = [...data.products];
//   drawProductsAll(); 
//   setAddToCartClick(allProductsArray);

// }
// getProductList();