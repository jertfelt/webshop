let searchResult = [];

const loadSearchResult = async () => {
  //getting search input field value
  let source = document.getElementById("searchBar");
  const inputHandler = async (e) => {
    source = e.target.value;
    try {
      const res = await fetch("/js/data/products.json");
      searchResult = await res.json();

      //calling the function to get results when the input word is more than 3 letters
      if (source.length >= 3) {
        displaySearchResult(searchResult, source);
        setAddToCartClick();
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  source.addEventListener("input", inputHandler);

  
};

const displaySearchResult = (res, source) => {
  // Draw title for current category
  const searchResultHeader = document.createElement("h2");
  searchResultHeader.classList.add("text--green", "text--cursive", "centered");
  searchResultHeader.innerText = "Ditt sökresultat";
  searchSection.appendChild(searchResultHeader);

  //const 
  
  // Creates section element
  const sectionElem = document.createElement("section");   
  sectionElem.classList.add("products__grid--all");   
  searchSection.appendChild(sectionElem);

  //mapping all products and checking if the product title and description includes the input word
  const htmlString = res.products
  .map((produx) => {
    const productTitle = produx.fields.title.toLowerCase();
    const productDescription = produx.fields.description.toLowerCase();
    const searchInput = source.toLowerCase();

    if (productTitle.includes(searchInput) || productDescription.includes(searchInput)) {
      createProductCard(produx, sectionElem);}
  });
};

loadSearchResult();

//Dropdown closes on enter
document.querySelector("#searchBar").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    closeDropDown();
  }
})