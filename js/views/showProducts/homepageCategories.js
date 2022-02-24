const categoriesSection = document.querySelector(".products__grid--categories");

const queryParams1 = new URLSearchParams(location.search);
const categoryId = queryParams1.get('id');

let categoryArray = []; 

const categoryCreator = (data) => {


    categoriesSection.innerHTML= `
    <article id="categoryDam" class="grid__category--items">
    <span class="pointer  product__img--container">
    <img src="${data[0].fields.image.fields.file.url}" class="product__img" 
    alt="${data[0].fields.title}"></img>
    <span>
    <h3 class="text--green text--cursive">${data[0].fields.title}</h3>
    <h4>${data[0].fields.description}</h4>
    </span>
    </span>
    </article>

    <article id="categoryHerr" class="grid__category--items">
    <span class="pointer  product__img--container">
    <img src="${data[1].fields.image.fields.file.url}" class="product__img" 
    alt="${data[1].fields.title}"></img>
    <span>
    <h3 class="text--green text--cursive">${data[1].fields.title}</h3>
    <h4>${data[1].fields.description}</h4>
    </span>
    </span>
    </article>
    
    <article id="categoryBaby" class="grid__category--items">
    <span class="pointer product__img--container">
    <img src="${data[2].fields.image.fields.file.url}" class="product__img" 
    alt="${data[2].fields.title}"></img>
    <span>
    <h3 class="text--green text--cursive">${data[2].fields.title}</h3>
    <h4>${data[2].fields.description}</h4>
    </span>
    </span>
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
    categoryCreator(categoryTitle);
}

getCategories();
