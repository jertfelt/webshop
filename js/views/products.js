let productList = [];

async function getProductList() {
  const response = await fetch("/js/data/products.json");
  const data = await response.json();
  
  productList = [...data.products];
  console.log(productList);
}

getProductList();