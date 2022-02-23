//?------------Query strings function (show different sections) 

//*---------------------variables

const homepageSection = document.getElementById("homepageSection");
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

  search_params.delete("id");
  search_params.delete("category");
  
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
  
  let search_params = url.searchParams;
  // console.log(search_params); ///blir tom vid start  (första gången)

  const currentSection = search_params.get("section");
  // console.log(currentSection) // blir null vid start (första gången)

 //ändrat funktion och for loop - default är att allt utom homepageSection är dolt i början (så om man öppnar fönstret första gången så syns bara homepage, inte allt)
 
 if (currentSection) {
  sections.forEach(section => {
    
    if (section.id === currentSection){
      if (section.id !== "homepageSection"){
     
        homepageSection.classList.add("hidden");
      }
      section.classList.remove("hidden");
    }
  })}
  }
 
setActivePage();