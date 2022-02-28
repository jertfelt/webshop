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



//------user nav

const userNavLogInRegister = () => {
  changeActivePage("loginSection");
}


//------orderconfirmation (beställning)

const confirmOrderConfirmationBtn = (e) => {
  e.preventDefault();
  changeActivePage("receiptSection");
}

document.getElementById("submitBtnOrderConfirmation").addEventListener("click", (e) => {
  e.preventDefault();
  changeActivePage("receiptSection"); 
})

document.getElementById("cancelBtnOrderConfirmation").addEventListener("click", (e) => {
  e.preventDefault();
changeActivePage("homepageSection");
})

document.getElementById("buttonBackReceipt").addEventListener("click",(e) => {
  e.preventDefault();
  changeActivePage("homepageSection");
})

//*pga flera knappar som ser exakt likadana ut och har samma funktion så har jag gett dem samma klass och sen kör en foreach:
document.querySelectorAll('.goToRegisterUserBtn').forEach(item => {
  item.addEventListener('click', event => {
    console.log("hej")
    event.preventDefault();
    changeActivePage("createUserSection");
  })
})


//-------register
const confirmAndExitCreateUser = () => {
  changeActivePage("homepageSection");
}

document.getElementById("cancelButtonCreateUser").addEventListener("click", () => {
  changeActivePage("homepageSection");
  })

// //-------login 
// document.getElementById("goToRegisterUserButton").addEventListener("click", (e) => {
//   e.preventDefault();
// changeActivePage("createUserSection");
// })

const confirmAndLogin = () => {
  changeActivePage("homepageSection")
}