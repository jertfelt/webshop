/* först vill vi ta emot från våra inputs
vi vill loopa igenom datan i local storage o se om vi kan hitta matchning för username
om vi inte hittar det så vill vi skicka ut en alert. 
sen om det finns en användare så vill vi kolla om lösenordet matchar
och om det gör det så vill vi visa vem som är inloggad
*/
let userDoesExist = false;
let getUser = "";
let loginEmail = "";
let loginPassword = "";
const lookForUser = () => {
    const currentUsers = JSON.parse(localStorage.getItem("users"))

    currentUsers.forEach(user => {
        if(loginEmail.toUpperCase()==user.email.toUpperCase()){
            userDoesExist = true;
            getUser = user;
        }
        
    });
    if(userDoesExist){
        if(loginPassword == getUser.password){
            localStorage.setItem("loggedInUser", JSON.stringify(getUser))
            confirmAndLogin()
        }else{
            alert("Fel lösenord");
        }

        
    }else{
        alert("Användaren existerar inte")
    }
}

document.getElementById("loginButton").addEventListener("click", (e) => {
    e.preventDefault();
loginEmail = document.getElementById("emailLogin").value;
loginPassword = document.getElementById("password").value;
lookForUser();

}) 
