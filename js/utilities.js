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

