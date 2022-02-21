const queryParams = new URLSearchParams(location.search);
const productId = queryParams.get('id');

let productsArray = [];

const productCreator = (product)=>{

   
    const sectionProduct = document.createElement("section");
    sectionProduct.classList.add("products__grid--individual");
    individualProductSection.appendChild(sectionProduct);
    
    const articleProduct = document.createElement("article");

    articleProduct.innerHTML = `
    <div class="container--margin">
      <div class="product__img--container">
        <img 
        src="/${product.fields.image.fields.file.url}">
        </img>
      </div>
      <span class="product__individual--text">
      <button class="addToCartBtn " 
      data-id="${product.sys.id}">Köp
      </button>
          <h3>${product.fields.title}</h3>
          <p class="text--s">${product.fields.description}</p>
          <p class="text--s text--green text--bold">${product.fields.price} kr </p>
      </span>
    </div>
    `
    
    
    sectionProduct.appendChild(articleProduct);
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