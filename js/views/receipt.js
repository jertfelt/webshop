
const submitBtn = document.getElementById("submitBtnOrderConfirmation");

let orderInformationReceipt = JSON.parse(localStorage.getItem("orderInformation"));
let nameReceipt = JSON.stringify(orderInformationReceipt.name);
let streetReceipt = JSON.stringify(orderInformationReceipt.street);
let postalCodeReceipt = JSON.stringify(orderInformationReceipt.postalCode);
let townReceipt = JSON.stringify(orderInformationReceipt.town);
let phoneReceipt = JSON.stringify(orderInformationReceipt.phone);
let emailReceipt = JSON.stringify(orderInformationReceipt.email);

let totalPriceOrder = localStorage.getItem("totalPriceOrder");

let cartArray = [];
let cartReceipt = JSON.parse(localStorage.getItem("cart"));

for (let i = 0; i < cartReceipt.length; i++ ){
      let key = localStorage.key(i);
      cardArray.push(JSON.parse(localStorage.getItem(key)))
};
console.log(cartArray)

let productNameArray = cartArray.map(x=>{
    return x.fields.name;
})
productNameArray.forEach((i)=>{
    let productName = document.createElement("li");
    productName.innerHTML = i;
    const productUl = document.getElementById("productList");
    productUl.appendChild(productName);
})



submitBtn.addEventListener("submit", (e)=>{
    e.preventDefault();

    document.getElementById("").innerHTML = `
    <div class="kvitto__container">
        <div class="kvitto__details">
            <b>Dina detaljer:</b>
            <p>${nameReceipt}</p>
            <p>${streetReceipt}</p>
            <p>${postalCodeReceipt} ${townReceipt}</p>
            <p>${phoneReceipt}</p>
            <p>${emailReceipt}</p>
        </div>
        <div class="kvitto__products">
        <b>Dina produkter:</b>
        <ul id="productList"></ul>
        </div>
        <div class="kvitto__total">
        <p>Totalt: ${totalPriceOrder} SEK</p>
        <p>Tack för ditt köp!</p>
        </div>
    </div>
    `;
})