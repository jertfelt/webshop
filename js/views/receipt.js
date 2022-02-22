
let infoArray =[];

if (localStorage.length!== 0){
    for (let i=0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        infoArray.push(JSON.parse(localStorage.getItem(key)));
    }
}
console.log(infoArray);

const submitBtn = document.getElementById("submitBtnOrderConfirmation");