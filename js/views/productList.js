// URL: http://127.0.0.1:5500/index.html?section=productListSection&category=Dam
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');

let productList = [];

function drawProducts() {
  

  //Draw title for current category.
  const categoryHeader = document.createElement("h2");
  
  categoryHeader.innerText = qsCategory;
  productListSection.appendChild(categoryHeader);

  productList.forEach(product => {
    // Filter products for selected category.
    if(product.category === qsCategory) {
    const articleElem = document.createElement("article");
    articleElem.classList.add("onimage");
    articleElem.classList.add(`onimage__bg--${product.sys.id}`)
    console.log(articleElem.classList)
    // Creates direct link to individual product
    const productLink = createURL("individualProductSection", `${product.category}` , `${product.sys.id}`);

    articleElem.innerHTML = `
    <a href="${productLink}">
      <img alt="Produkt ${product.title}"         class="product__img" 
      src="/${product.fields.image.fields.file.url}">
      </img>
    </a>
    <span class="onimage__items">
        <h3>${product.fields.title}</h3>
        <p>${product.fields.price} kr</p>
      <button 
      class="onimage__button addToCartBtn" 
      data-id="${product.sys.id}">
      Köp</button>
      </span>`
    productListSection.appendChild(articleElem);
    }
  })

  // onClick="buyProduct(${product.sys.id})"
}

async function getProductList() {
  const response = await fetch("/js/data/products.json");
  const data = await response.json();
  
  productList = [...data.products];
  drawProducts();  
  buyProduct();  
}

getProductList();