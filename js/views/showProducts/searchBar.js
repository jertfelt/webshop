const loadSearchResult = async () => {
  const queryParams = new URLSearchParams(location.search);
  const sectionParam = queryParams.get('section');
  //Check if we are on the right URL before showing the products
  if(sectionParam !== "searchSection") return;
  const searchValue = localStorage.getItem("search")
  //getting search input field value
  const inputHandler = async (e) => {
    //searchInput = e.target.value;
    try {
      allProductsArray = await fetchProducts();
      //calling the function to get results when the input word is more than 3 letters
      if (searchValue.length >= 3) {
        displaySearchResult(allProductsArray, searchValue);
        setAddToCartClick();
      }
      
    } catch (err) {
      console.error(err);
    }
  };
  inputHandler();
  //source.addEventListener("input", inputHandler);

  
};

const displaySearchResult = (res, source) => {
  // Draw title for current category
  const searchResultHeader = document.createElement("h2");
  searchResultHeader.classList.add("text--green", "text--cursive", "centered");
  searchResultHeader.innerText = "Ditt sökresultat";
  searchSection.appendChild(searchResultHeader);

  // Draw feedback message for searched text
  const searchInputFeedback = document.createElement("h3");
  searchInputFeedback.classList.add("text--green", "text--cursive", "centered");
  searchInputFeedback.innerText = `Du sökte på "${source}"`;
  searchSection.appendChild(searchInputFeedback);

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