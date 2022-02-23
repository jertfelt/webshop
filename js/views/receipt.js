//all infofrån localStorage

let orderInformationReceipt = JSON.parse(localStorage.getItem("orderInformation"));

//Användarens köpta produkter

if (getCart() !== null) {
    getCart().forEach(product => {
        let productName = document.createElement("li");
        productName.innerHTML = `${product.quantity} x ${product.fields.title}`;
        const productUl = document.getElementById("productList");
        productUl.appendChild(productName);
    });
  }


//självaste kvittot som renderas ut
document.getElementById("orderConfirmationForm").addEventListener("submit", (e)=>{
    e.preventDefault();

    document.getElementById("receiptDiv").innerHTML = `
    <div class="kvitto__container">

        <div class="kvitto__details">
            <b>Dina detaljer:</b>
            <p>${orderInformationReceipt.name}</p>
            <p>${orderInformationReceipt.street}</p>
            <p>${orderInformationReceipt.postalCode} ${orderInformationReceipt.town}</p>
            <p>${orderInformationReceipt.phone}</p>
            <p>${orderInformationReceipt.email}</p>
        </div>

        <div class="kvitto__products">
        <b>Dina produkter:</b>
        <ul id="productList"></ul>
        </div>

        <div class="kvitto__total">
        <p>Totalt: ${getTotalPriceOrder()} SEK</p>
        <p>Tack för ditt köp!</p>
        </div>
        </div>
        `;
    })