
//Variables

let userNavDropdownShowing = false;

const userNavDropdown = document.querySelector("#userNavDropdown");
const userNavName = document.querySelector("#userNavName");

const userNavLogInRegisterBtn = document.querySelector("#userNavLogInRegisterBtn");
const userNavLogOutBtn = document.querySelector("#userNavLogOutBtn");

//Shows and hides dropdown

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

//Fills in information om inloggad

if (loggedInUser) {
  userNavName.classList.remove("hidden");
  userNavName.innerText = loggedInUser.name;

  userNavLogInRegisterBtn.classList.add("hidden");
  userNavLogOutBtn.classList.remove("hidden");
}

//Logout button

userNavLogOutBtn.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser");

  userNavDropdown.classList.add("hidden");
  userNavDropdownShowing = false;
  
  userNavName.classList.add("hidden");

  userNavLogInRegisterBtn.classList.remove("hidden");
  userNavLogOutBtn.classList.add("hidden");
});

//Log in / Register button

userNavLogInRegisterBtn.addEventListener("click", () => {
  userNavDropdown.classList.add("hidden");
  userNavDropdownShowing = false;
  userNavLogInRegister();
})