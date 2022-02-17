function validate()
{
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
if(username=="admin"&& password=="admin")
{
    alert("Inloggning lyckades");
    return false;

}
else
{
    alert("Fel användarnamn eller lösenord");
}


}