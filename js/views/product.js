const queryParams = new URLSearchParams(location.search);
const productId = queryParams.get('id');

let productsArray = [];

const productCreator = (product)=>{
    const h2 = document.createElement("h2");
    h2.innerText = product.fields.title;
    individualProductSection.appendChild(h2);
    const article = document.createElement("article");
    article.innerHTML = `
      <a href="/index.html?section=individualProductSection&id=${product.sys.id}">
        <img style="width:100%" src="/${product.fields.image.fields.file.url}"></img>
        <h3>${product.fields.title}</h3>
        <p>${product.fields.description}</p>
        <p>${product.fields.price} kr</p>
        </a>
      <button class="addToCartBtn" 
      data-id="${product.sys.id}">Köp</button>`
        individualProductSection.appendChild(article);
}

async function getProduct() {
    const response = await fetch("/js/data/products.json");
    const data = await response.json();
    
    productsArray = [...data.products];
    
    productsArray.map((product) => {
    if (product.sys.id === productId){
        productCreator(product)
    }
    })
  }
  
  getProduct();