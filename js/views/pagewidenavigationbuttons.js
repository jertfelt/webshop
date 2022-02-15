//! sample for links 
// buttonHero.addEventListener("click", () => {
//include this if a link:
// e.preventDefault();
//   changeActivePage("productListSection");
// });



//links for nav (except varukorg)

document.getElementById("homeLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("homepageSection");
})

document.getElementById("damLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("categoriesSection");
})

document.getElementById("herrLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("categoriesSection");
})

document.getElementById("babyLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("categoriesSection");
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

//------cart (go to product shown in cart)

//------categories

//-----product individual site

//------orderconfirmation (beställning)

//-------receipt section

//-------register

//-------login 