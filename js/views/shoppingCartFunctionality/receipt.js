//*--------all info från localStorage



const receiptContainer = document.getElementById("receiptSection");

const showReceipt=() =>{
    if(receiptContainer.classList.contains("hidden")){
        console.log("hide")
        receiptContainer.classList.remove("hidden");
    }
}


//*-----------creating the receipt
const drawReceipt = () => {
    const orderInformationReceipt = JSON.parse(localStorage.getItem("orderInformation"));
    console.log(orderInformationReceipt);

const receiptText = document.getElementsByClassName("receipt__text")[0];

if (orderInformationReceipt !== null) {
receiptText.innerHTML = `
        <p>${orderInformationReceipt.name}</p>
        <p>${orderInformationReceipt.street}</p>
        <p>${orderInformationReceipt.postalCode} ${orderInformationReceipt.town}</p>
        <p>${orderInformationReceipt.phone}</p>
        <p>${orderInformationReceipt.email}</p>
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
        let productName = document.createElement("li");
        productName.classList.add("receipt__list--item")
        productName.innerHTML = `${product.quantity} x ${product.fields.title}`;
        receiptProductList.appendChild(productName);
        console.log("testar den här")
    });
  }

  const receiptFooterPrice = document.getElementsByClassName("receipt__footer--price")[0];

  receiptFooterPrice.innerHTML=`
   <h4> Totalt: ${getTotalPriceOrder()} SEK</h4>
    `
}

// //*-----------------eventListener


document.getElementById("submitBtnOrderConfirmation").addEventListener("click",(e) => {
    e.preventDefault();
    drawReceipt();
    showReceipt();
    console.log("annan knapp")
});
