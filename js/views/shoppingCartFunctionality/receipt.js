//*--------all info från localStorage

let orderInformationReceipt = JSON.parse(localStorage.getItem("orderInformation"));

const showReceipt=() =>{
    if(receiptSection.classList.contains("hidden")){
        receiptSection.classList.remove("hidden");
    }
}


//*-----------creating the receipt
const drawReceipt = () => {
    //testar:
console.log("drawing");
console.log(receiptSection);
    //!bugg: console fungerar, men inte något annat, nedan test fungerar tex inte:
receiptSection.classList.remove("test")

//creating elements in DOM


//article with whole text
const receiptText = document.getElementsByClassName("receipt__text")[0];

receiptText.innerHTML = `
        <p>${orderInformationReceipt.name}</p>
        <p>${orderInformationReceipt.street}</p>
        <p>${orderInformationReceipt.postalCode} ${orderInformationReceipt.town}</p>
        <p>${orderInformationReceipt.phone}</p>
        <p>${orderInformationReceipt.email}</p>
`;

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


//*-----------------eventListener
document.getElementById("orderConfirmationForm").addEventListener("submit", (e)=> {
    e.preventDefault();
    drawReceipt();
    showReceipt();
    console.log("testar knappen")
});

