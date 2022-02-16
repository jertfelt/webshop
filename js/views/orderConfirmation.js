//show products

  /* 
  create product element
  grab information from local storage
  print element on page
  show total price
  */

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

        /*
        */

//your details

  /* 
  check if logged in
  if logged in check who is logged in
  grab information from user and fill in form
  
  if not logged in do nothing
  */
