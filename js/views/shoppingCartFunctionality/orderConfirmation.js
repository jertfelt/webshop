

//Product information

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

    document.querySelector("#orderProductsSummation").appendChild(productOrderConfirmation);

    //adding classes to elements
  
    productOrderConfirmation.classList.add("products__grid--confirmation")
    
    productInformationDivOrderConfirmation.classList.add("confirmation__productbar");

  }

//Go through each product in cart and send it to print
    if (getCart() !== null) {
      getCart().forEach(product => {
        createProductElementOrderConfirmation(
          product.fields.image.fields.file.url, product.fields.title, 
          product.amount, product.quantity);
      });
    }

//Adds total price
    const addTotalPriceOrderConfirmation = () => {
      const totalPriceText = document.getElementById("orderProductsTotalAmount");
      totalPriceText.innerText = `Total kostnad: ${getTotalPriceOrder()} kr`;
    }
    addTotalPriceOrderConfirmation();


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
      confirmOrderConfirmationBtn();
      e.preventDefault();
    });


  //*--------rabattkod


  const getTotalPrice = (rabatt) => {
   
    const totalPriceWRabatt = document.getElementById("orderProductsTotalAmount");
    const priceString =  JSON.parse(localStorage.getItem("totalPriceOrder"));

    const stringToInt = parseInt(priceString);
    ;
    const totalPrice = (stringToInt * rabatt); 

    totalPriceWRabatt.innerText = `Total kostnad: ${totalPrice} kr`;
  }

  //*-----rabatt:

    const saleCode = () => {
      
      let inputCode = document.getElementById("securitycode").value;
      const rabattOrder = document.createElement("p");
      rabattOrder.classList.add("text--green");
      document.querySelector(".securityinput").appendChild(rabattOrder);

      if(inputCode == "FEND21"){   
        let rabatt = 0.75;
        rabattOrder.innerText= "Du får 25% rea!"
        getTotalPrice(rabatt);
        }

      else if(inputCode == "Mars"){
        let rabatt = 0.90;
        rabattOrder.innerText= "Du får 10% rea!"
        getTotalPrice(rabatt);
      }
      else {
        alert("Tyvärr, du skrev fel rabattkod")
      }
    }

//eventlistener
    document.getElementById("securityCodeBtn").addEventListener("click", saleCode);
    
//Submit button
  /*document.getElementById("orderConfirmationForm").addEventListener("submit", (e) => {
    e.preventDefault();
    saveOrderDetails();
    confirmOrderConfirmationBtn();
    drawReceipt();
    showReceipt();
  });*/




// //test code
// const tester2 = [{
//   "sys": { "id": "4" },
//   "category": "Dam",
//   "fields": {
//     "title": "Pants",
//     "price": 219,
//     "description": "Byxor gjord på återvunnen bomull, perfekt för myset hemma i covidtider",
//     "image": { "fields": { "file": { "url": "styles/sass/img/womens-traveller-pants.png" } } }
//   }
// },
// {
//   "sys": { "id": "5" },
//   "category": "Dam",
//   "fields": {
//     "title": "I am hat",
//     "price": 500,
//     "description": "En varm och mysig handgjord virkad mössa, gjord av hantverkare på Gotland.",
//     "image": { "fields": { "file": { "url": "styles/sass/img/women-hat.png" } } }
//   }
// }];
// localStorage.setItem("cart", JSON.stringify(tester2));
// localStorage.setItem("totalPriceOrder", JSON.stringify(100));


//Get cart from local storage
//Remove later
    //const productsOrder = JSON.parse(localStorage.getItem("cart"));


/*//test code
const tester2 = [{
  "sys": { "id": "4" },
  "category": "Dam",
  "fields": {
    "title": "Pants",
    "price": 219,
    "description": "Byxor gjord på återvunnen bomull, perfekt för myset hemma i covidtider",
    "image": { "fields": { "file": { "url": "styles/sass/img/womens-traveller-pants.png" } } }
  }
},
{
  "sys": { "id": "5" },
  "category": "Dam",
  "fields": {
    "title": "I am hat",
    "price": 500,
    "description": "En varm och mysig handgjord virkad mössa, gjord av hantverkare på Gotland.",
    "image": { "fields": { "file": { "url": "styles/sass/img/women-hat.png" } } }
  }
}];
localStorage.setItem("cart", JSON.stringify(tester2));
localStorage.setItem("totalPriceOrder", JSON.stringify(100));
*/
