//Gets users key in local stroage or creates empty array

let usersArr = JSON.parse(localStorage.getItem("users"));
if (usersArr === null) {
  usersArr = [];
}

//Creates user and saves it in local storage

const createUser = (email, password, userName, street, postalCode, town, tel) => {
  const userObj = {
    email: email,
    password: password,
    userName: userName,
    street: street,
    postalCode: postalCode,
    town: town,
    tel: tel
  }
  usersArr.push(userObj);
}


//Retrives data from form and sends it to createUser();

document.querySelector("#submitBtnCreateUser").addEventListener("submit", (e) => {
  e.preventDefault();

  const emailCreateAccount = document.querySelector("#emailCreateUser").value;
  const passWordCreateAccount = document.querySelector("#passwordCreateUser").value;
  const userNameCreateAccount = document.querySelector("#usernameCreateUser").value;
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
      createUser(emailCreateAccount, passWordCreateAccount, userNameCreateAccount, 
        streetCreateAccount,  postalCodeCreateAccount, townCreateAccount, telCreateAccount);
  
    localStorage.setItem("users", JSON.stringify(usersArr));  
   //confirmAndExitCreateUser();
  }
  console.log(9);
});