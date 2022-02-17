///------------Query strings function (show different sections) 

//-variables

const homepageSection = document.getElementById("homepageSection");
const categoriesSection = document.getElementById("categoriesSection");
const productListSection = document.getElementById("productListSection");
const individualProductSection = document.getElementById("individualProductSection");
const orderConfirmationSection = document.getElementById("orderConfirmationSection");
const receiptSection = document.getElementById("receiptSection");
const loginSection = document.getElementById("loginSection");
const createUserSection = document.getElementById("createUserSection");

//knapp i hero:
const buttonHero = document.getElementById("buttonHero");

//nodelist
const sections = document.querySelectorAll(".section");

//addevent function som tooglar hidden/show + byter query string NAVBAR

//Ändrar URL med valda parametrar. Funkar även om man bara ger en eller två parametrar så att vi kan återanvända funktionen. 
const changeActivePage = (sectionName, categoryName, prodID) => {
  // Creates URL
  const urlWithSearchParams = createURL(sectionName, categoryName, prodID);
  //Updates page
  location.href = urlWithSearchParams;
};

const createURL  = (sectionName, categoryName, prodID) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;
  //Lägger till section parameter
  search_params.set('section', sectionName);
  // Lägger till kategori om angiven
  if (categoryName) {
    search_params.set('category', categoryName);
  }
  // Lägger till produkt ID om angiven
  if (prodID) {
    search_params.set('prod', prodID);
  }
  // You get a string with complete URL and given parameters
  return url.toString();
}

const setActivePage = () => {
  let url = new URL(window.location.href);
  const search_params = url.searchParams;
  const currentSection = search_params.get("section");

  //döljer och visar rätt sektion
  if (currentSection){
  sections.forEach(section => {
    section.classList.add("hidden");

    if (section.id === currentSection){
     section.classList.remove("hidden");
   }
  }
  )}
};

setActivePage();