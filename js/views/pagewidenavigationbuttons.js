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


//-----links for footer

//------homepage

//------user nav

const userNavLogInRegister = () => {
  changeActivePage("loginSection");
}

//------cart (go to product shown in cart)

// document.getElementById("varukorgNav").addEventListener("click", (e) => {
//   e.preventDefault();
// //! håller på här
// setupCart();
// })

//------categories

//-----product individual site

//------orderconfirmation (beställning)

document.getElementById("submitBtnOrderConfirmation").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("receiptSection");
})

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