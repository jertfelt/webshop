//*--------all info från localStorage

let orderInformationReceipt = JSON.parse(localStorage.getItem("orderInformation"));



//*-----------creating the receipt
const drawReceipt = () => {
    //testar:
console.log("drawing");
console.log(receiptSection);
    //!bugg: console fungerar, men inte något annat, nedan test fungerar tex inte:
receiptSection.classList.remove("test")

//creating elements in DOM
const receiptHeader = document.createElement("h2"); 
receiptHeader.classList.add("text--green", "text--cursive", "centered");
receiptHeader.innerText = "Ditt kvitto:";
receiptSection.appendChild(receiptHeader);

//inner container for receipt
const receiptContent = document.createElement("article");
receiptContent.classList.add("receipt__content");
receiptSection.appendChild(receiptContent);

//article with whole text
const receiptText = document.createElement("article");
receiptText.classList.add("receipt__text");
receiptContent.appendChild(receiptText);

receiptText.innerHTML = `
    <h3 class="text-green text-cursive">Dina detaljer:</h3>
        <p>${orderInformationReceipt.name}</p>
        <p>${orderInformationReceipt.street}</p>
        <p>${orderInformationReceipt.postalCode} ${orderInformationReceipt.town}</p>
        <p>${orderInformationReceipt.phone}</p>
        <p>${orderInformationReceipt.email}</p>
`;

//ul list for products
receiptProductListContainer = document.createElement("span");
receiptProductListContainer.classList.add("receipt__list--container");

const receiptProductListHeader = document.createElement("h3");
receiptProductListHeader.classList.add("text-green");
receiptProductListHeader.innerText = "Dina produkter";

receiptProductListContainer.appendChild(receiptProductListHeader);

const receiptProductList = document.createElement("ul");
receiptProductList.classList.add("receipt__list");


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

  receiptProductListContainer.appendChild(receiptProductList);

  receiptContent.appendChild(receiptProductListContainer);
  
  const receiptFooter = document.createElement("article");
 

  receiptFooter.innerHTML=`
   <h3 class="text-green">Totalt: ${getTotalPriceOrder()} SEK</h3>
   <h4>Tack för ditt köp!</h4>
    `
        receiptFooter.classList.add("receipt__footer");
        receiptContent.appendChild(receiptFooter);
}

//*-----------------eventListener
document.getElementById("orderConfirmationForm").addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log("test")

drawReceipt();
});

