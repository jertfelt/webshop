//! sample for links 
// buttonHero.addEventListener("click", () => {
//?include this if a link:
//? e.preventDefault();
//   changeActivePage("productListSection");
// });

//links for nav (except varukorg)

document.getElementById("homeLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("homepageSection");
})

document.getElementById("damLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("productListSection", "Dam");
})

document.getElementById("herrLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("productListSection", "Herr");
})

document.getElementById("babyLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("productListSection", "Baby");
})

document.getElementById("loginLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("loginSection");
})

document.getElementById("logoLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("homepageSection");
})

document.getElementById("searchBar").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    localStorage.setItem("search", e.target.value);
    changeActivePage("searchSection");
  }
})

//-----links for footer

//------homepage

//------user nav

const userNavLogInRegister = () => {
  changeActivePage("loginSection");
}

//------cart (go to product shown in cart)

//------categories

//-----product individual site

//------orderconfirmation (beställning)

const confirmOrderConfirmationBtn = () => {
  changeActivePage("receiptSection");
}

document.getElementById("cancelBtnOrderConfirmation").addEventListener("click", () => {
changeActivePage("homepageSection");
})
//-------receipt section

//-------register
const confirmAndExitCreateUser = () => {
  changeActivePage("homepageSection");
}

document.getElementById("cancelButtonCreateUser").addEventListener("click", () => {
  changeActivePage("homepageSection");
  })

//-------login 
document.getElementById("goToRegisterUserButton").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("createUserSection");
})
const confirmAndLogin = () => {
  changeActivePage("homepageSection")
}