//const productListSection = document.getElementById("productListSection");

let productList = [];

function drawProducts() {
  productList.forEach(product => {
    const article = document.createElement("article");
    article.innerText = product.fields.title;
    productListSection.appendChild(article);
  })
}

async function getProductList() {
  const response = await fetch("/js/data/products.json");
  const data = await response.json();
  
  productList = [...data.products];
  drawProducts();  
}

getProductList();