///------------Query strings function (show different sections) 

//-variables

const categoriesSection = document.getElementById("categoriesSection");
const productListSection = document.getElementById("productListSection");
const individualProductSection = document.getElementById("individualProductSection");
const orderConfirmationSection = document.getElementById("orderConfirmationSection");
const receiptSection = document.getElementById("receiptSection");
const loginSection = document.getElementById("loginSection");
const createUserSection = document.getElementById("createUserSection");

//dropdown
const cartSection = document.getElementById("cartSection"); 

//knapp i hero:
const buttonHero = document.getElementById("buttonHero");
const sections = document.querySelectorAll(".section");



//-addevent function som tooglar hidden/show + byter query string NAVBAR

//Ändrar URL
const changeActivePage = (queryString) => {

  const url = new URL(window.location.href);
  const search_params = url.searchParams;
  search_params.set('section', queryString);
  url.search = search_params.toString();

  console.log(url.search)
  sections.forEach(section => {
    console.log(section);
    //section.classList.add("hidden");
  })

};



buttonHero.addEventListener("click", (e) => {
  changeActivePage(3);
});
//loopa addeventen?