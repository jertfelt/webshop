

let userDoesExist = false;
let getUser = "";
let loginEmail = "";
let loginPassword = "";
const lookForUser = () => {
    const currentUsers = JSON.parse(localStorage.getItem("users"))

    if (currentUsers !== null) {
        currentUsers.forEach(user => {
         if(loginEmail.toUpperCase()==user.email.toUpperCase()){
             userDoesExist = true;
              getUser = user;
         }
        });
    };
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

document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
loginEmail = document.getElementById("emailLogin").value;
loginPassword = document.getElementById("password").value;
lookForUser();

})
