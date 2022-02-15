// This should work after fixing URL in changepage.js
// It should get this URL: http://127.0.0.1:5500/index.html?section=categoriesSection&category=Dam
const queryString = new URLSearchParams(location.search);
const qsCategory = queryString.get('category');

let productList = [];

function drawProducts() {
  productList.forEach(product => {
    if(product.category === qsCategory) {
    const article = document.createElement("article");
    article.innerHTML = `
      <a href="">
        <img style="width:100%" src="/${product.fields.image.fields.file.url}"></img>
        <h3>${product.fields.title}</h3>
        <p>${product.fields.price} kr</p>
      </a>
        <button>Köp</button>`
    productListSection.appendChild(article);
    }
  })
}

async function getProductList() {
  const response = await fetch("/js/data/products.json");
  const data = await response.json();
  
  productList = [...data.products];
  drawProducts();  
}

getProductList();