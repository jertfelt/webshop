
//*---------Variables
let userNavDropdownShowing = false;

const userNavDropdown = document.querySelector("#userNavDropdown");
const userNavName = document.querySelector("#userNavName");

const userNavLogInRegisterBtn = document.querySelector("#userNavLogInRegisterBtn");
const userNavLogOutBtn = document.querySelector("#userNavLogOutBtn");

const ifUserLoggedIn = document.getElementById("ifUserLoggedIn");

const userNavOnlineDot = document.querySelector("#navUserOnlineDot");

//*--------Shows and hides dropdown

document.querySelector("#userNavIcon").addEventListener("click", () => {
  if (!userNavDropdownShowing) {
    userNavDropdown.classList.remove("hidden");
    userNavDropdownShowing = true;
  } else {
    userNavDropdown.classList.add("hidden");
    userNavDropdownShowing = false;
  }
})

document.querySelector("#closeUserNavDropdown").addEventListener("click", () => {
  userNavDropdown.classList.add("hidden");
  userNavDropdownShowing = false;
})

//*-----Fills in information om inloggad

if (getLoggedinUser()) {
  ifUserLoggedIn.classList.remove("hidden");
  userNavName.classList.remove("hidden");
  userNavName.innerText = getLoggedinUser().name;

  userNavLogInRegisterBtn.classList.add("hidden");
  userNavLogOutBtn.classList.remove("hidden");

  userNavOnlineDot.classList.remove("hidden");
}

//*-----------Logout button

userNavLogOutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");

  userNavDropdown.classList.add("hidden");
  userNavDropdownShowing = false;
  
  userNavName.classList.add("hidden");

  userNavLogInRegisterBtn.classList.remove("hidden");
  userNavLogOutBtn.classList.add("hidden");

  userNavOnlineDot.classList.add("hidden");
});

//*--------Log in / Register button

userNavLogInRegisterBtn.addEventListener("click", () => {
  userNavDropdown.classList.add("hidden");
  userNavDropdownShowing = false;
  userNavLogInRegister();
})

//*-------showing today's date (bonus)

let today = new Date().toJSON().slice(0,10).replace(/-/g, '/');
console.log(today);
document.getElementById("todaysDate").innerText = " " + today;
