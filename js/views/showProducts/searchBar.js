
const searchContainer = document.getElementById("searchDiv");
const searchInHeader = document.getElementById("searchDropdown");
const searchDropDown = document.getElementById("searchContent");
const searchBarHeader = document.getElementById("searchBarHeader");

const displaySearchResult = (allProductsArray, searchValue) => {

  // Draw heading
  const searchResultHeader = document.createElement("h2");
  searchResultHeader.classList.add("text--green", "text--cursive", "centered");
  searchResultHeader.innerText = "Ditt sökresultat";
  searchContainer.appendChild(searchResultHeader);

  // Draw feedback message for searched text
  const searchInputFeedback = document.createElement("h3");
  searchInputFeedback.classList.add("text--green", "text--cursive", "centered");
  searchInputFeedback.innerText = `Du sökte på "${searchValue}"`;
  searchContainer.appendChild(searchInputFeedback);

  // Creates section element that wraps product cards
  const sectionElem = document.createElement("section");   
  sectionElem.classList.add("products__grid--all");   
  searchContainer.appendChild(sectionElem);

  // Maps all products and checks if the product title and description includes the search word
  allProductsArray.map((produx) => {
    // Make it case insensitive
    const productTitle = produx.fields.title.toLowerCase();
    const productDescription = produx.fields.description.toLowerCase();
    const searchValueLowerCase = searchValue.toLowerCase();

    if (productTitle.includes(searchValueLowerCase) || productDescription.includes(searchValueLowerCase)) {
      // Draw each product that matches the search
      createProductCard(produx, sectionElem);}
    else {
      searchInputFeedback.innerHTML = `Du sökte på "${searchValue}." <br>Tyvärr hittade vi inget!<br>
      `;
    }
  });
};

// Starts search function
const loadSearchResult = async () => {
  const queryParams = new URLSearchParams(location.search);
  const sectionParam = queryParams.get('section');
  //Check if we are on the right section before showing the products
  if(sectionParam !== "searchSection") return;
  //getting search value
  const searchValue = localStorage.getItem("search")

  try {
    allProductsArray = await fetchProducts();
    displaySearchResult(allProductsArray, searchValue);
    setAddToCartClick();
    localStorage.removeItem("search");

  } catch (err) {
    console.error(err);
  };  
};

loadSearchResult();

//Dropdown closes on esc
document.querySelector("#searchBar").addEventListener("keypress", (e) => {
  if (e.key === "Esc") {
    closeDropDown();
  }
})



//*-------header button
searchInHeader.addEventListener("click", () => {
  searchDropDown.classList.remove("hidden");
 
})

searchDropDown.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    loadSearchResult();
    searchDropDown.classList.add("hidden");
  }
})