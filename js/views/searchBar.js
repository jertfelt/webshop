
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
      }
    } catch (err) {
      console.error(err);
    }
  };
  source.addEventListener("input", inputHandler);

  
};

const displaySearchResult = (res, source) => {

  //mapping all products and checking if the product title includes the input word
  const htmlString = res.products
    .map((produx) => {
      if (produx.fields.title.toLowerCase().includes(source.toLowerCase())) {
        //returning the products that match
        const productLink = createURL(
          "individualProductSection",
          `${produx.category}`,
          `${produx.sys.id}`
        );
        const produxsList = document.getElementById("productListSection");
        produxsList.innerHTML = "";
        const produxPage = document.getElementById("individualProductSection");
        produxPage.innerHTML = "";
        return `
        <article class="products__search">
            
            <div class=" product__img--container product__img--list">
              <a href="${productLink}">
                <img 
                  alt= "Produkt"
                  src="/${produx.fields.image.fields.file.url}">
                </img>
              <a href="${productLink}">
            </div>
            <a href="${productLink}">
            
            </a>
            <span class="product__box--search">
              <span class="row">
                <a href="${productLink}">
                  <h3 
                    class="text--uppercase text--cursive">
                    ${produx.fields.title}
                    </h3>
                </a>
                    <h4 class="text--green">${produx.fields.price} kr
                    </h4>
              </span>
                  <p 
                  class="text--centered">
                  ${produx.fields.description} 
                  
                  </p>
               </span>
              
          </article>

        `;
      }
    })
    .join("");
  const searchResults = document.getElementById("searchSection");
  searchResults.innerHTML = htmlString;
};

// // <button class="addToCartBtn " 
// data-id="${produx.sys.id}">Köp
// </button>


loadSearchResult();
