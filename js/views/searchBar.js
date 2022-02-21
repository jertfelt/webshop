
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
        <a href="${productLink}" style="width:30%">
            <ul>
                <li class="productsordered__grid">
                <img style="width:100%" src="/${produx.fields.image.fields.file.url}"></img>
                <h3>${produx.fields.title}</h3>
                <p>${produx.fields.description}</p>
                <p>${produx.fields.price} kr</p>
                </li>
                </ul>
            </a>

        `;
      }
    })
    .join("");
  const searchResults = document.getElementById("searchSection");
  searchResults.innerHTML = htmlString;
};

loadSearchResult();
