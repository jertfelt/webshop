const loadSearchResult = async () => {
  const queryParams = new URLSearchParams(location.search);
  const sectionParam = queryParams.get('section');
  //Check if we are on the right URL before showing the products
  if(sectionParam !== "searchSection") return;
  //getting search value
  const searchValue = localStorage.getItem("search")

  try {
    allProductsArray = await fetchProducts();
    //calling the function to get results when the input word is more than 3 letters
    displaySearchResult(allProductsArray, searchValue);
    setAddToCartClick();
  } catch (err) {
    console.error(err);
  };  
};

const displaySearchResult = (allProductsArray, searchValue) => {
  // Draw title for current category
  const searchResultHeader = document.createElement("h2");
  searchResultHeader.classList.add("text--green", "text--cursive", "centered");
  searchResultHeader.innerText = "Ditt sökresultat";
  searchSection.appendChild(searchResultHeader);

  // Draw feedback message for searched text
  const searchInputFeedback = document.createElement("h3");
  searchInputFeedback.classList.add("text--green", "text--cursive", "centered");
  searchInputFeedback.innerText = `Du sökte på "${searchValue}"`;
  searchSection.appendChild(searchInputFeedback);

  // Creates section element
  const sectionElem = document.createElement("section");   
  sectionElem.classList.add("products__grid--all");   
  searchSection.appendChild(sectionElem);

  //mapping all products and checking if the product title and description includes the search word
  allProductsArray.map((produx) => {
    // Make it case insensitive
    const productTitle = produx.fields.title.toLowerCase();
    const productDescription = produx.fields.description.toLowerCase();
    const searchValueLowerCase = searchValue.toLowerCase();

    if (productTitle.includes(searchValueLowerCase) || productDescription.includes(searchValueLowerCase)) {
      // Draw each product that matches the search
      createProductCard(produx, sectionElem);}
  });
};

loadSearchResult();