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

const receiptProductList = document.createElement("ul");
receiptProductList.classList.
add("receipt__list--ul");
const receiptProductListContainer = document.getElementsByClassName("receipt__list")[0];
receiptProductListContainer.appendChild(receiptProductList);

//Användarens köpta produkter

if (getCart() !== null) {
    getCart().forEach(product => {
        console.log(product);
        let productName = document.createElement("ul");
        productName.classList.add("receipt__list--item")
        productName.innerHTML = `
        <li class="receipt__list--row">
        <img src="${product.fields.image.fields.file.url}"
        class="receipt__img">
        <p>${product.quantity} st ${product.fields.title}</p>
        <p>${product.fields.price}kr</p>
        <li>`;
        receiptProductList.appendChild(productName);
    });
  }

  const receiptFooterPrice = document.getElementsByClassName("receipt__footer--price")[0];

  receiptFooterPrice.innerHTML=`
   <h4> Totalt: ${getTotalPriceOrder()} SEK</h4>
    `
}

//Renders recepit when on the correct page

if (!receiptSection.classList.contains("hidden")) {
    drawReceipt()
}
