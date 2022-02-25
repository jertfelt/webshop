const categoriesSection = document.querySelector(".products__grid--categories");

const queryParams1 = new URLSearchParams(location.search);
const categoryId = queryParams1.get('id');

let categoryArray = []; 

const drawCategorys = (data) => {
    categoriesSection.innerHTML= `
    <article id="categoryDam" class="grid__category--items">
    <div class="pointer  product__img--container">
    <img src="${data[0].fields.image.fields.file.url}" class="product__img" 
    alt="${data[0].fields.title}"></img>
    <span class="row">
    <h3 class="text--green text--cursive">${data[0].fields.title}</h3>
    <h4>${data[0].fields.description}</h4>
    </span>
    </div>
    </article>

    <article id="categoryHerr" class="grid__category--items">
    <div class="pointer  product__img--container">
    <img src="${data[1].fields.image.fields.file.url}" class="product__img" 
    alt="${data[1].fields.title}"></img>
    <span class="row">
    <h3 class=" text--green text--cursive">${data[1].fields.title}</h3>
    <h4>${data[1].fields.description}</h4>
    </span>
    </div>
    </article>
    
    <article id="categoryBaby" class="grid__category--items">
    <div class="pointer product__img--container">
    <img src="${data[2].fields.image.fields.file.url}" class="product__img" 
    alt="${data[2].fields.title}"></img>
    <span class="row">
    <h3 class="text--green text--cursive ">${data[2].fields.title}</h3>
    <h4>${data[2].fields.description}</h4>
    </span>
    </div>
   
    </article>
        `;

    const categoryDamClick = document.getElementById("categoryDam");
    categoryDamClick.onclick=()=>{
        changeActivePage("productListSection", "Dam");
    }

    const categoryHerrClick = document.getElementById("categoryHerr");
    categoryHerrClick.onclick=()=>{
        changeActivePage("productListSection", "Herr");
    }

    const categoryBabyClick = document.getElementById("categoryBaby");
    categoryBabyClick.onclick=()=>{
        changeActivePage("productListSection", "Baby");
    }
    }

//---------fetch from JSON and render:

async function getCategories() {

    const catResponse = await fetch("/js/data/categories.json");

    const data = await catResponse.json();

    productsArray = [...data.categories];

    const categoryTitle = productsArray.map(x=>{
        return x;
    })
    drawCategorys(categoryTitle);
}

getCategories();

// const categoriesSection = document.querySelector(".products__grid--categories");

// const queryParams1 = new URLSearchParams(location.search);
// const categoryId = queryParams1.get('id');

// let categoryArray = []; 

// const drawCategorys = (data) => {
//     data.forEach(x =>{
//         let tempArt = document.createElement("article");
//         tempArt.innerHTML=`
//         <article id="categoryDam" class="grid__category--items">
//         <div class="pointer  product__img--container">
//         <img src="${x.fields.image.fields.file.url}" class="product__img" 
//         alt="${x.fields.title}"></img>
//         <span class="row">
//         <h3 class="text--green text--cursive">${x.fields.title}</h3>
//         <h4>${x.fields.description}</h4>
//         </span>
//         </div>
//         </article>`;
        
//         categoriesSection.appendChild(tempArt);
        
//     })
//         const categoryDamClick = document.getElementById("categoryDam");
//         categoryDamClick.onclick=()=>{
//             changeActivePage("productListSection", "Dam");
//         }

//         const categoryHerrClick = document.getElementById("categoryHerr");
//         categoryHerrClick.onclick=()=>{
//             changeActivePage("productListSection", "Herr");
//         }

//         const categoryBabyClick = document.getElementById("categoryBaby");
//         categoryBabyClick.onclick=()=>{
//             changeActivePage("productListSection", "Baby");
//         }
//     }

// //---------fetch from JSON and render:

// async function getCategories() {

//     const catResponse = await fetch("/js/data/categories.json");

//     const data = await catResponse.json();

//     categoryArray = [...data.categories];

//     const categoryTitle = categoryArray.map(x=>{
//         return x;
//     })
//     drawCategorys(categoryTitle);
// }

// getCategories();
