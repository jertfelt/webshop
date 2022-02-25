
const displaySearchResult = (allProductsArray, searchValue) => {
  // Draw heading
  const searchResultHeader = document.createElement("h2");
  searchResultHeader.classList.add("text--green", "text--cursive", "centered");
  searchResultHeader.innerText = "Ditt sökresultat";
  searchSection.appendChild(searchResultHeader);

  // Draw feedback message for searched text
  const searchInputFeedback = document.createElement("h3");
  searchInputFeedback.classList.add("text--green", "text--cursive", "centered");
  searchInputFeedback.innerText = `Du sökte på "${searchValue}"`;
  searchSection.appendChild(searchInputFeedback);

  // Creates section element that wraps product cards


const searchSection = document.getElementById("searchSection");
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

  const sectionElem = document.createElement("section");   
  sectionElem.classList.add("products__grid--search");
  sectionElem.classList.add("container__margin--bottom");
  sectionElem.classList.add("container__margin--top")   
  searchSection.appendChild(sectionElem);


  // Maps all products and checks if the product title and description includes the search word
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


  //mapping all products and checking if the product title includes the input word
  
 // const htmlString = res.products
  //  .map((produx) => {
  //    if (produx.fields.title.toLowerCase().includes(source.toLowerCase()) || produx.fields.description.toLowerCase().includes(source.toLowerCase())) {
        
  //      createProductCard(produx, sectionElem);}})
      
  

loadSearchResult();


//Dropdown closes on esc
document.querySelector("#searchBar").addEventListener("keypress", (e) => {
  if (e.key === "Esc") {
    closeDropDown();
  }
})

  //Dropdown closes when mouseevent


