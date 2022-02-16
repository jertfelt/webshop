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
  localStorage.setItem("users", JSON.stringify(userObj));
}


//Retrives data from form and sends it to createUser();

document.querySelector("#submitBtnCreateUser").addEventListener("click", () => {
  const userNameCreateAccount = document.querySelector("#usernameCreateUser").value;
  const passWordCreateAccount = document.querySelector("#passwordCreateUser").value;
  const streetCreateAccount = document.querySelector("#streetCreateUser").value;
  const postalCodeCreateAccount = document.querySelector("#postalCodeCreateUser").value;
  const townCreateAccount = document.querySelector("#townCreateUser").value;
  const emailCreateAccount = document.querySelector("#emailCreateUser").value;
  const telCreateAccount = document.querySelector("#phoneNumberCreateUser").value;

  createUser(userNameCreateAccount, passWordCreateAccount, streetCreateAccount, 
    postalCodeCreateAccount, townCreateAccount, emailCreateAccount, telCreateAccount);

});