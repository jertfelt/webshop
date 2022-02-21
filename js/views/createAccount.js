//Gets users key in local stroage or creates empty array

let usersArr = JSON.parse(localStorage.getItem("users"));
if (usersArr === null) {
  usersArr = [];
}

//Creates user and saves it in local storage

const createUser = (userName, password, street, postalCode, town, email, tel) => {
  const userObj = {
    userName: userName,
    password: password,
    street: street,
    postalCode: postalCode,
    town: town,
    email: email,
    tel: tel
  }
  usersArr.push(userObj);
}


//Retrives data from form and sends it to createUser();

document.querySelector("#submitBtnCreateUser").addEventListener("onClick", (e) => {
  e.preventDefault();

  const userNameCreateAccount = document.querySelector("#usernameCreateUser").value;
  const passWordCreateAccount = document.querySelector("#passwordCreateUser").value;
  const streetCreateAccount = document.querySelector("#streetCreateUser").value;
  const postalCodeCreateAccount = document.querySelector("#postalCodeCreateUser").value;
  const townCreateAccount = document.querySelector("#townCreateUser").value;
  const emailCreateAccount = document.querySelector("#emailCreateUser").value;
  const telCreateAccount = document.querySelector("#phoneNumberCreateUser").value;

  //Checks if user already exists

  let userAlreadyExist = false;

  usersArr.forEach(user => {
    if (user.userName == userNameCreateAccount) {
      alert(`The username ${userNameCreateAccount} already exists`); //Maybe chnage this to something better?
      userAlreadyExist = true;
    };
  });

  //Creates user and saves it in local storage and takes you back to the home page
  
  if (userAlreadyExist == false) {
      createUser(userNameCreateAccount, passWordCreateAccount, streetCreateAccount, 
      postalCodeCreateAccount, townCreateAccount, emailCreateAccount, telCreateAccount);
  
    localStorage.setItem("users", JSON.stringify(usersArr));  
   confirmAndExitCreateUser();
  }
});