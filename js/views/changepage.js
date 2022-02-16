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
  let url = new URL(window.location.href);
  const search_params = url.searchParams;
  //Lägg till section parameter
  search_params.set('section', sectionName);
  // Lägg till kategori om angiven
  if (typeof categoryName !== "undefined") {
    search_params.set('category', categoryName);
  }
  // Lägg till produkt ID om angiven
  if (typeof prodID !== "undefined") {
    search_params.set('prod', prodID);
  }
  
  url.search = search_params.toString();
  var new_url = url;
  location.href = new_url;
};

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