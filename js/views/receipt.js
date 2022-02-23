

// let infoArray =[];

// if (localStorage.length!== 0){
//     for (let i=0; i<localStorage.length; i++){
//         let key = localStorage.key(i);
//         infoArray.push(JSON.parse(localStorage.getItem(key)));
//     }
// }
// console.log(infoArray);


// submitBtn.addEventListener(("click"), ()=>{

// })

//Hämta localStorage 
  
const submitBtn = document.getElementById("submitBtnOrderConfirmation");

submitBtn.addEventListener("submit", (e)=>{
    e.preventDefault();

    document.getElementById("").innerHTML = `
    <div class="kvitto__container">
        <div class="kvitto__details">
            <p>"${}"</p>
            <p>"${}"</p>
            <p>"${}"</p>
            <p>"${}"</p>
        </div>
        <div class="kvitto__products">
        </div>
        <div class="kvitto__total">
        <p>Totalt:"${}" SEK</p>
        <p>Tack för ditt köp!</p>
        </div>
    </div>
    `;
})