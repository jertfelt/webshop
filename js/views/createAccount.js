//Gets users key in local stroage or creates empty array

let usersArr = JSON.parse(localStorage.getItem("users"));
if (usersArr === null) {
  usersArr = [];
}
//Creates user and saves it in local storage

const createUser = (email, password, name, street, postalCode, town, tel) => {
  const userObj = {
    email: email,
    password: password,
    name: name,
    street: street,
    postalCode: postalCode,
    town: town,
    tel: tel
  }
  usersArr.push(userObj);
  //loggar in användaren
  localStorage.setItem("loggedInUser", JSON.stringify(userObj))
}


//Retrives data from form and sends it to createUser();

document.querySelector("#createUserForm").addEventListener("submit", (e) => {
  e.preventDefault()
  const emailCreateAccount = document.querySelector("#emailCreateUser").value;
  const passWordCreateAccount = document.querySelector("#passwordCreateUser").value;
  const nameCreateAccount = document.querySelector("#nameCreateUser").value;
  const streetCreateAccount = document.querySelector("#streetCreateUser").value;
  const postalCodeCreateAccount = document.querySelector("#postalCodeCreateUser").value;
  const townCreateAccount = document.querySelector("#townCreateUser").value;
  const telCreateAccount = document.querySelector("#phoneNumberCreateUser").value;

  //Checks if user already exists

  let userAlreadyExist = false;

  usersArr.forEach(user => {
    if (user.email == emailCreateAccount) {
      alert(`The email ${emailCreateAccount} is already registred`); //Maybe chnage this to something better?
      userAlreadyExist = true;
    };
  });

  //Creates user and saves it in local storage and takes you back to the home page
  
  if (userAlreadyExist == false) {
      createUser(emailCreateAccount, passWordCreateAccount, nameCreateAccount, 
        streetCreateAccount,  postalCodeCreateAccount, townCreateAccount, telCreateAccount);
  
    localStorage.setItem("users", JSON.stringify(usersArr));
    confirmAndExitCreateUser();
  }
});