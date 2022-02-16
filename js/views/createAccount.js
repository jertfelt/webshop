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
  localStorage.setItem(`user-${userName}`, JSON.stringify(userObj));
}


//Retrives data from form and sends it to createUser();

document.querySelector("#submitBtnCreateUser").addEventListener("click", (e) => {
  e.preventDefault();

  const userNameCreateAccount = document.querySelector("#usernameCreateUser").value;
  const passWordCreateAccount = document.querySelector("#passwordCreateUser").value;
  const streetCreateAccount = document.querySelector("#streetCreateUser").value;
  const postalCodeCreateAccount = document.querySelector("#postalCodeCreateUser").value;
  const townCreateAccount = document.querySelector("#townCreateUser").value;
  const emailCreateAccount = document.querySelector("#emailCreateUser").value;
  const telCreateAccount = document.querySelector("#phoneNumberCreateUser").value;

  if (localStorage.getItem(`user-${userNameCreateAccount}`)) {
    alert("username is already in use"); //Maybe chnage this to something better?
    return;
  } else {
    confirmAndExitCreateUser();
  }

  createUser(userNameCreateAccount, passWordCreateAccount, streetCreateAccount, 
    postalCodeCreateAccount, townCreateAccount, emailCreateAccount, telCreateAccount);

});