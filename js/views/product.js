const queryParams = new URLSearchParams(location.search);
const productId = queryParams.get('id');

let productsArray = [];

const productCreator = (product)=>{

   
    const sectionProduct = document.createElement("section");
    sectionProduct.classList.add("products__individual");
    individualProductSection.appendChild(sectionProduct);
    
    const articleProduct = document.createElement("article");

    articleProduct.innerHTML = `
        <img alt="Produkt"
        src="/${product.fields.image.fields.file.url}">
        </img>
      <span class="product__box--individual">
      <span class="row">
          <h3>${product.fields.title}</h3>
          <p class="text--s text--green text--bold">
          ${product.fields.price} kr </p>
        </span>
         
          <p class="text--s">${product.fields.description}</p>
          <button class="addToCartBtn " 
          data-id="${product.sys.id}">Köp
          </button>
          
          
      </span>
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