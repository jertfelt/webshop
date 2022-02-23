// URL: http://127.0.0.1:5500/index.html?section=productListSection&category=Dam
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');

let productList = [];

function drawProducts() {  
  //Draw title for current category.
  const categoryHeader = document.createElement("h2");
  categoryHeader.classList.add("text--green", "text--cursive", "centered");
  categoryHeader.innerText = qsCategory +"kläder";
  productListSection.appendChild(categoryHeader);

  const sectionElem = document.createElement("section");
  sectionElem.classList.add("products__grid--all")
  productListSection.appendChild(sectionElem);

  productList.forEach(product => {
    // Filter products for selected category.
    if(product.category === qsCategory) {
    const articleElem = document.createElement("article");
  
    // Creates direct link to individual product
    const productLink = createURL("individualProductSection", `${product.category}` , `${product.sys.id}`);

    articleElem.innerHTML = `
      <div class="product__img--container product__img--list">
        <a href="${productLink}">
            <img alt = Produkt ${product.title}"   
              class ="product__img" 
              src="/${product.fields.image.fields.file.url}">
            </img>
        </a>
      </div>
      <span class="product__box">
        <span>
          <h3 class="text--uppercase text--cursive">${product.fields.title}</h3>
          <h4 class="text--green">${product.fields.price} kr</h4>
        </span>
        <button 
        class="addToCartBtn" 
        data-id="${product.sys.id}">
        Köp</button>
       
      </span>
    
    
    `
    sectionElem.appendChild(articleElem);
    }
  })

  
}

async function getProductList() {
  const response = await fetch("/js/data/products.json");
  const data = await response.json();
  
  productList = [...data.products];
  drawProducts();  
  setAddToCartClick(productList);
}

getProductList();