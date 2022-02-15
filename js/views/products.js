//const productListSection = document.getElementById("productListSection");

let productList = [];

function drawProducts() {
  productList.forEach(product => {
    const article = document.createElement("article");
    article.innerHTML = `
      <a href="">
        <img src="/${product.fields.image.fields.file.url}"></img>
        <h3>${product.fields.title}</h3>
        <p>${product.fields.price} kr</p>
      </a>
        <button>Köp</button>`
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