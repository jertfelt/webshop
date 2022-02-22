//test code
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


//Get cart from local storage
//Remove later
    //const productsOrder = JSON.parse(localStorage.getItem("cart"));


//Creates product element
    const createProductElementOrderConfirmation = (img, name, price, amount) => {
    
    const productOrderConfirmation = document.createElement("article");
    const productInformationDivOrderConfirmation = document.createElement("div");
    const imgOrderConfirmation = document.createElement("img");

    const productNameOrderConfirmation = document.createElement("h3");
    const priceOrderConfirmation = document.createElement("p");
    const amountOrderConfirmation = document.createElement("p");

    imgOrderConfirmation.src = img;
    productNameOrderConfirmation.innerText = name;
    priceOrderConfirmation.innerText = price;
    amountOrderConfirmation.innerText = `${amount} st`;

    productInformationDivOrderConfirmation.appendChild(productNameOrderConfirmation);
    productInformationDivOrderConfirmation.appendChild(priceOrderConfirmation);

    productOrderConfirmation.appendChild(imgOrderConfirmation);
    productOrderConfirmation.appendChild(productInformationDivOrderConfirmation);
    productOrderConfirmation.appendChild(amountOrderConfirmation);

    document.querySelector("#orderProductsSummation").appendChild(productOrderConfirmation);
  }

//Go through each product in cart and send it to print
    productsOrder.forEach(product => {
      createProductElementOrderConfirmation(
        product.fields.image, product.fields.title, 
        product.fields.price, product.amount);
    });

//Adds total price
    const addTotalPriceOrderConfirmation = () => {
      const totalPriceText = document.createElement("p");
      const totalPrice = JSON.parse(localStorage.getItem("totalPriceOrder"));
      totalPriceText.innerText = `Total kostnad: ${totalPrice}kr`;
      document.querySelector("#orderProductsSummation").appendChild(totalPriceText);
    }
    addTotalPriceOrderConfirmation();


    
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
        email: document.querySelector("#emailOrderConfirmation"),
        tel: document.querySelector("#phoneNumberOrderConfirmation").value,
        comment: document.querySelector("#commentsOrderConfirmation").value
      };
      localStorage.setItem("orderInformation", JSON.stringify(orderFormDetails));
    }

//Submit button
  document.getElementById("submitBtnOrderConfirmation").addEventListener("onClick", (e) => {
    e.preventDefault();
    saveOrderDetails();
    confirmOrderConfirmationBtn();
  });