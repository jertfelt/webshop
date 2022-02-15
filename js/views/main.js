///------------Query strings function (show different sections) 

//-variables

const categoriesSection = document.getElementById("categoriesSection");
const productListSection = document.getElementById("productListSection");
const individualProductSection = document.getElementById("individualProductSection");
const orderConfirmationSection = document.getElementById("orderConfirmationSection");
const receiptSection = document.getElementById("receiptSection");
const loginSection = document.getElementById("loginSection");
const createUserSection = document.getElementById("createUserSection");
const cartSection = document.getElementById("cartSection"); 
const buttonHero = document.getElementById("buttonHero");

//-addevent function som tooglar hidden/show + byter query string NAVBAR

const changeActivePage = (queryString) => {
  // const params = new URLSearchParams(location.search);
  // params.set("section", queryString);
  // params.toString();
  // window.history.replaceState({}, '', ${location.pathname}?${params.toString()});
  document.location = `?section=${queryString}`;
};

buttonHero.addEventListener("click", () => {
  changeActivePage(3);
});


//loopa addeventen?