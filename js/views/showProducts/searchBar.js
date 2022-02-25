
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
  sectionElem.classList.add("products__grid--all");   
  searchSection.appendChild(sectionElem);

  //mapping all products and checking if the product title includes the input word
  
  const htmlString = res.products
    .map((produx) => {
      if (produx.fields.title.toLowerCase().includes(source.toLowerCase()) || produx.fields.description.toLowerCase().includes(source.toLowerCase())) {
        
        createProductCard(produx, sectionElem);}})
      
  
};

loadSearchResult();


//Dropdown closes on enter
document.querySelector("#searchBar").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    closeDropDown();
  }
})


