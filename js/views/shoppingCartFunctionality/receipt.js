//*--------all info från localStorage



const receiptContainer = document.getElementById("receiptSection");


//*-----------creating the receipt
const drawReceipt = () => {
    const orderInformationReceipt = JSON.parse(localStorage.getItem("orderInformation"));


const receiptText = document.getElementsByClassName("receipt__text")[0];

if (orderInformationReceipt !== null) {
receiptText.innerHTML = `
        <p>Namn: ${orderInformationReceipt.name}</p>
        <p>Gata: ${orderInformationReceipt.street}</p>
        <p>Stad: ${orderInformationReceipt.postalCode} ${orderInformationReceipt.town}</p>
        <p>Telefon: ${orderInformationReceipt.tel}</p>
        <p>Email: ${orderInformationReceipt.email}</p>
        <p>${orderInformationReceipt.comment}</p>
`;
}
//ul list for products

const receiptProductList = document.getElementsByClassName("products__grid--receipt")[0];

//Användarens köpta produkter

if (getCart() !== null) {
    getCart().forEach(product => {
        let productName = document.createElement("article");
        productName.classList.add("receipt__list--item")
        productName.innerHTML = `
        <img src="${product.fields.image.fields.file.url}"
        class="receipt__img">
        <p>${product.quantity} st <br>${product.fields.title}<br>
        ${product.fields.price}kr</p>
        `;
        receiptProductList.appendChild(productName);
    });
  }

  const receiptFooterPrice = document.getElementsByClassName("receipt__footer--price")[0];

  const priceWithSale = JSON.parse(localStorage.getItem("sale"));

  if (priceWithSale == null){
    getTotalPriceOrder();
    receiptFooterPrice.innerHTML=`
    <h4> Totalt: ${getTotalPriceOrder()} SEK</h4>
     `
 }

 else {
  receiptFooterPrice.innerHTML=`
   <h4> Totalt: ${priceWithSale} SEK</h4>
    `
}  
}

//Renders receipt when on the correct page

if (!receiptSection.classList.contains("hidden")) {
    drawReceipt()
}

receiptSection.addEventListener("click", () => {
localStorage.removeItem("sale")})