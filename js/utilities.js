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
