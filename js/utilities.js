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

