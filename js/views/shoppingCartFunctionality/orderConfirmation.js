

//Product information
const orderProductsSummation = document.querySelector("#orderProductsSummation");
//Creates product element
    const createProductElementOrderConfirmation = (img, name, amount, quantity) => {
    
    const productOrderConfirmation = document.createElement("article");
    
    const productInformationDivOrderConfirmation = document.createElement("div");

    const imgOrderConfirmation = document.createElement("img");
    const productNameOrderConfirmation = document.createElement("h3");
    const amountOrderConfirmation = document.createElement("p");
    const quantityOrderConfirmation = document.createElement("p");

    //connecting with localstorage:

    imgOrderConfirmation.src = img;
    productNameOrderConfirmation.innerText = name;
    amountOrderConfirmation.innerText = `${amount}kr`;
    quantityOrderConfirmation.innerText = `${quantity} st`;

    //appending: 
    productInformationDivOrderConfirmation.appendChild(quantityOrderConfirmation);

    productInformationDivOrderConfirmation.appendChild(productNameOrderConfirmation);
    productInformationDivOrderConfirmation.appendChild(amountOrderConfirmation);
   

    productOrderConfirmation.appendChild(imgOrderConfirmation);

    productOrderConfirmation.appendChild(productInformationDivOrderConfirmation);

    orderProductsSummation.appendChild(productOrderConfirmation);

    //adding classes to elements
  
    productOrderConfirmation.classList.add("products__grid--confirmation")
    
    productInformationDivOrderConfirmation.classList.add("confirmation__productbar");

  }

//Go through each product in cart and send it to print
const printProducts = () => { 
  // Ta bort ritade produkter
  while(orderProductsSummation.lastElementChild) {
    orderProductsSummation.removeChild(orderProductsSummation.lastElementChild);
  }  
  if (getCart() !== null) {
    getCart().forEach(product => {
      createProductElementOrderConfirmation(
        product.fields.image.fields.file.url, product.fields.title, 
        product.amount, product.quantity);
    });
    }
}

//Adds total price
const addTotalPriceOrderConfirmation = () => {
  const totalPriceText = document.getElementById("orderProductsTotalAmount");
  totalPriceText.innerHTML = `Total kostnad: <br>  ${getTotalPriceOrder()} kr`;
}

const printOrderConfirmation = () => {
  printProducts();
  addTotalPriceOrderConfirmation();
}

printOrderConfirmation();


//User information

//Checks if anyone is logged in, if they are they get your details and fills out the form
   // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (getLoggedinUser() !== null) {
      document.querySelector("#nameOrderConfirmation").value = getLoggedinUser().name;
            document.querySelector("#streetOrderConfirmation").value = getLoggedinUser().street;
            document.querySelector("#postalCodeOrderConfirmation").value = getLoggedinUser().postalCode;
            document.querySelector("#townOrderConfirmation").value = getLoggedinUser().town;
            document.querySelector("#emailOrderConfirmation").value = getLoggedinUser().email;

            if (getLoggedinUser().tel !== null) {
              document.querySelector("#phoneNumberOrderConfirmation").value = getLoggedinUser().tel;
            }
    }

//Saves form information in local storage
    const saveOrderDetails = () => {
      let orderFormDetails = {
        name: document.querySelector("#nameOrderConfirmation").value,
        street: document.querySelector("#streetOrderConfirmation").value,
        postalCode: document.querySelector("#postalCodeOrderConfirmation").value,
        town: document.querySelector("#townOrderConfirmation").value,
        email: document.querySelector("#emailOrderConfirmation").value,
        tel: document.querySelector("#phoneNumberOrderConfirmation").value,
        comment: document.querySelector("#commentsOrderConfirmation").value
      };
      localStorage.setItem("orderInformation", JSON.stringify(orderFormDetails));
    }

    document.getElementById("orderConfirmationForm").addEventListener("submit", (e) => {
      saveOrderDetails(); 
      e.preventDefault();
      changeActivePage("receiptSection"); 
    });

 

  //*--------rabattkod

  const securityButton = document.getElementById("securityCodeBtn");
  const securityInput = document.getElementById("securitycode");


    


  const getTotalPriceWRabatt = (rabatt) => {
   
    const totalPriceWRabatt = document.getElementById("orderProductsTotalAmount");
    const priceString =  JSON.parse(localStorage.getItem("totalPriceOrder"));

    const stringToInt = parseInt(priceString);
    ;
    const mathPrice = (stringToInt * rabatt); 

    const totalPriceWSale = Math.trunc(mathPrice);
    console.log(totalPriceWSale);

    totalPriceWRabatt.innerHTML = `Total kostnad: <br> ${totalPriceWSale} kr`;

    return JSON.parse(localStorage.setItem("sale", JSON.stringify(totalPriceWSale)));

  }

  //*-----rabatt:

    const saleCode = () => {
      
      let inputCode = securityInput.value;
    
      let inputRight = inputCode.toUpperCase();

      const rabattOrder = document.getElementById("saleCodeMsg");
    

      if(inputRight == "FEND21"){
           
        let rabatt = 0.75;
        securityButton.classList.add("hidden")
        rabattOrder.innerText="Laddar..";
        setTimeout(() => {
          rabattOrder.innerText= "Du f??r 25% rea!";
          getTotalPriceWRabatt(rabatt);
        }, 2000);
        }

      else if(inputRight == "J0NAS"){
        let rabatt = 0.5;
        securityButton.classList.add("hidden")
        rabattOrder.innerText="Laddar..";
        setTimeout(() => {
          rabattOrder.innerText= "Du f??r 50% rea!";
          getTotalPriceWRabatt(rabatt);
        }, 2000);
      }

      else if(inputRight == "MARS"){
        let rabatt = 0.90;
        securityButton.classList.add("hidden")
        rabattOrder.innerText="Laddar..";
        setTimeout(() => {
          securityButton.classList.remove("hidden")
          rabattOrder.innerText= "Du f??r 10% rea!";
          getTotalPriceWRabatt(rabatt);
        }, 2000);
   
      }

      else {
        securityButton.classList.add("hidden")
        rabattOrder.innerText="Laddar..";
        setTimeout(() => {
          securityButton.classList.remove("hidden")
          rabattOrder.classList.remove("text--green");
        rabattOrder.innerText = "Fel kod! Prova igen!";
        
      }, 2000);
      }
    }

//eventlisteners
securityButton.addEventListener("click", () =>{
      saleCode();
    }
        );
        
securityInput.addEventListener('keydown', function(event){

  if(event.key == "Enter"){
    saleCode();
  }
})




    
//Submit button
  /*document.getElementById("orderConfirmationForm").addEventListener("submit", (e) => {
    e.preventDefault();
    saveOrderDetails();
    confirmOrderConfirmationBtn();
    drawReceipt();
    showReceipt();
  });*/






//*----set Timeout f??r"n??sta knapp", n??gon bugg med css fixar i m??n av tid:


// const loadingReceiptSpinner = document.getElementById("loadingReceiptSpinner");
// loadingSpinner = document.g
// loadingReceiptSpinner.classList.remove("hidden");

// const receiptSpinner = document.getElementById("receiptSpinner");


// setTimeout(() => {
//   loadingReceiptSpinner.classList.add("hidden");
//   loadingReceiptSpinner.children.classList.add("hidden");
//   confirmOrderConfirmationBtn();
// }, 2000);