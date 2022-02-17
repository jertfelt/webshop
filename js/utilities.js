///*-----Hamburgermeny dropdown
const menuButton = document.getElementById("menuToggle");
let menuMobile = document.querySelector("#dropDownMenu");

menuButton.addEventListener("click", dropdown);

function dropdown(){
 if (menuMobile.classList.contains("drop-down"))
 {menuMobile.classList.remove("drop-down");
}
else 
menuMobile.classList.add("drop-down");
}

//*------visa/dölja VARUKORG

 //varukorg knappar
 const cartHeaderBtn = document.querySelector(".headercart");
 const cartNavBtn = document.getElementById("cartLinkNav");
 const closeCartWindow = document.querySelector(".cart--close");
 const clearCartBtn = document.getElementById("clearCart");

 //visa och dölj 
const showCart =() => {
  cartContainer.classList.add("cart__transparentBack");
  cartContainer.classList.remove("cart__hidden")
  cartMenu.classList.add("cart__show");
};

cartHeaderBtn.addEventListener("click", showCart);

//bugg: syns inte något tar över
cartNavBtn.addEventListener("click", showCart);

const hideCart =() => {
  cartContainer.classList.add("cart__hidden");
  cartMenu.classList.remove("cart__show");
}

closeCartWindow.addEventListener("click", hideCart);


document.addEventListener('keydown', function(event){
  if(event.key === "Escape")
  {
  hideCart();
  }
});