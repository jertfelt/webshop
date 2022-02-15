//! sample for links 
// buttonHero.addEventListener("click", () => {
//include this if a link:
// e.preventDefault();
//   changeActivePage("productListSection");
// });



//links for nav

document.getElementById("homeLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("homepageSection");
})

// document.getElementById("cartLinkNav").addEventListener("click", (e) => {
//   e.preventDefault();
// changeActivePage("cartLinkNav");
// })

document.getElementById("damLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("categoriesSection");
})

document.getElementById("herrLinkNav").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("categoriesSection");
})