//show products

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

    console.log(productOrderConfirmation)

    document.querySelector("#orderProductsSummation").appendChild(productOrderConfirmation);
  }
    
    //Prints All products
        /* PRODUCTINCART.forEach(product => {
          const productInCartImg = product local storage img;
          const productInCartName = product local storage name;
          const productInCartPrice = product local storage price;
          const productInCartAmount = product local storage aamount;

          createProductElementOrderConfirmation(productInCartImg, productInCartName, productInCartPrice, productInCartAmount);
        });
        */

    

    //Adds total price
        /*
          const totalPriceOrderConfirmation = document.createElement("p");
          totalPriceOrderConfirmation.innerText = `Total: ${total price locat storage}`;
          document.querySelector("#orderProductsSummation").appendChild(totalPriceOrderConfirmation);
        */

    
    //Checks if anyone is logged in, if they are they get your details and fills out the form
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  if (loggedInUser !== null) {
    document.querySelector("#nameOrderConfirmation").value = loggedInUser.name;
            document.querySelector("#streetOrderConfirmation").value = loggedInUser.street;
            document.querySelector("#postalCodeOrderConfirmation").value = loggedInUser.postalCode;
            document.querySelector("#townOrderConfirmation").value = loggedInUser.town;
            document.querySelector("#emailOrderConfirmation").value = loggedInUser.email;

            if (loggedInUser.tel !== null) {
              document.querySelector("#phoneNumberOrderConfirmation").value = loggedInUser.tel;
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
  localStorage.setItem("orderInformation", orderFormDetails);
}

//Submit button