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

//addevent function som togglar hidden/show + byter query string NAVBAR

// Uppdaterar sidan med angivna parametrar. Funkar även om man bara ger en eller två parametrar. 
const changeActivePage = (sectionName, categoryName, prodID) => {
  // Skapar URL
  const urlWithSearchParams = createURL(sectionName, categoryName, prodID);
  // Uppdaterar sidan
  location.href = urlWithSearchParams;
};

// Skapar URL med angivna parametrar. Funkar även om man bara ger en eller två parametrar
const createURL  = (sectionName, categoryName, prodID) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;
  // Lägger till section parameter
  search_params.set('section', sectionName);
  // Lägger till kategori om angiven
  if (categoryName) {
    search_params.set('category', categoryName);
  }
  // Lägger till produkt ID om angiven
  if (prodID) {
    search_params.set('id', prodID);
  }
  // Ger en sträng med komplett URL
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