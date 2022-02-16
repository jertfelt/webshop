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

//Ändrar URL samt visar rätt sektion
const changeActivePage = (sectionName) => {
  console.log(sectionName)
  let url = new URL(window.location.href);
  const search_params = url.searchParams;
  search_params.set('section', sectionName);
  url.search = search_params.toString();

  console.log(url.search)
  window.location.href = url;

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