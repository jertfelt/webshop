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
  sectionElem.classList.add("products__grid")
  productListSection.appendChild(sectionElem);

  productList.forEach(product => {
    // Filter products for selected category.
    if(product.category === qsCategory) {
    const articleElem = document.createElement("article");
  
    // Creates direct link to individual product
    const productLink = createURL("individualProductSection", `${product.category}` , `${product.sys.id}`);

    articleElem.innerHTML = `
    <div class="outer">
    <div class="inner">
        <div class="product__listofitems">
        <span class="product__box">
            <h3 class="text--centered text--s text--uppercase">${product.fields.title}</h3>
            <h4 class="text--s text--green text--bold">${product.fields.price} kr</h4>
          <button 
          class="addToCartBtn" 
          data-id="${product.sys.id}">
          Köp</button>
        </span>
        </div>
     </div>
      <div class="product__img--container">
        <a href="${productLink}">
            <img alt =Produkt ${product.title}"   
              class ="product__img" 
              src="/${product.fields.image.fields.file.url}">
            </img>
        </a>
      </div>
    </div>
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
  buyProduct();  
}

getProductList();