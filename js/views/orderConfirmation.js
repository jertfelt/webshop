//show products

    //Creates product element
  const createProductElementOrderConfirmation = (img, name, price, amount) => {
    const productOrderConfirmation = document.createElement("article");
    const productInformationDivOrderConfirmation = document.createElement("div");
    const ImgOrderConfirmation = document.createElement("img");
    const test = document.createElement("img")

    const productNameOrderConfirmation = document.createElement("h3");
    const priceOrderConfirmation = document.createElement("p");
    const amountOrderConfirmation = document.createElement("p");

    ImgOrderConfirmation.src = img;

    productNameOrderConfirmation.innerText = name;
    priceOrderConfirmation.innerText = price;
    amountOrderConfirmation.innerText = `${amount} st`;

    productInformationDivOrderConfirmation.appendChild(productNameOrderConfirmation);
    productInformationDivOrderConfirmation.appendChild(priceOrderConfirmation);

    productOrderConfirmation.appendChild(ImgOrderConfirmation);
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



//your details

  /* 
  check if logged in
  if logged in check who is logged in
  grab information from user and fill in form
  
  if not logged in do nothing
  */
