///*-----Hamburgermeny dropdown
const menuButton = document.getElementById("menuToggle");
let menuMobile = document.querySelector("#dropDownMenu");

//*---open dropdown (by click or pushing enter)

const openDropdown = () => {
 if (menuMobile.classList.contains("dropdown"))
 {menuMobile.classList.remove("dropdown");
}
else 
menuMobile.classList.add("dropdown");

}
menuButton.addEventListener("click", openDropdown);
document.addEventListener('keydown', function(event){

  if(event.key == "ArrowDown"){
   openDropdown();
  }
})

//*----close dropdown (by click or keydown)
const closeDropDown = () => {
 menuMobile.classList.add("dropdown");
}

document.getElementById("closeDropDown").addEventListener("click", closeDropDown);

document.addEventListener('keydown', function(event){
  if(event.key === "Escape")
  {

  if (menuMobile.classList.contains("dropdown") === false){
    closeDropDown();
  }

  }
});

//*--------Toggle kategori i dropdown

document.querySelector(".list__nested--mother").addEventListener("click", () =>{
  
  const categoryMenuNav = document.querySelector(".list__nested");
  

  if(categoryMenuNav.classList.contains("hidden") === true){
    categoryMenuNav.classList.remove("hidden");
  }
  else{
    categoryMenuNav.classList.add("hidden");
  }

})

//*-------Get logged in user info

const getLoggedinUser = () => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return loggedInUser;
}

//*-------Get cart from local storage
const getCart = () => {
  return JSON.parse(localStorage.getItem("cart"));
}

//*-------Get total price from local storage
const getTotalPriceOrder = () => {
  return JSON.parse(localStorage.getItem("totalPriceOrder"));
}

// Uppdaterar varukorgen i local storage
const setCartinLocalStorage = (cart) => {
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyCart);
}

 cart-nav-amount
//Udaterar amount i varukorgen i header
const updateAmountCartNav = () => {
  const headerCartAmount = document.querySelector("#headerCartAmount");
  let amountCartNav = 0;

  if (getCart() !== null) {
    getCart().forEach(product => {
      amountCartNav += product.quantity;
    })
  }
  headerCartAmount.innerText = amountCartNav;
}


//*------animation function

//let loader = document.querySelector(".loading");
//const loadingContainer = document.querySelector(".loading__div");

//const displayLoading = () =>{
  
  //if (loadingContainer.classList.contains("hidden")){
    //loader.classList.add("display");

    //setTimeout(() => {
      //  loader.classList.remove("display");
      //}, 3000)}

//}




