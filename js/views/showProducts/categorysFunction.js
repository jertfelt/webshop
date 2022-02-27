const categoriesSection = document.querySelector(".products__grid--categories");

const queryParams1 = new URLSearchParams(location.search);
const categoryId = queryParams1.get('id');

let categoryArray = []; 

const drawCategorys = (data) => {
    data.forEach(x =>{
        let tempArt = document.createElement("article");
        tempArt.innerHTML=`
        <article id="category${x.fields.title}" class="grid__category--items">
        <div class="pointer  product__img--container">
        <img src="${x.fields.image.fields.file.url}" class="product__img " 
        alt="${x.fields.title}"></img>
        <span class="overlaymother--under overlaymother--up">
        <h3 class="text--green text--cursive">${x.fields.title}</h3>
        <h4>${x.fields.description}</h4>
        </span>
        </div>
        </article>`;
        
        categoriesSection.appendChild(tempArt);
    })
    const categoryDamClick = document.getElementById("categoryDamkläder");
    categoryDamClick.onclick=()=>{
        changeActivePage("productListSection", "Dam");
    }

    const categoryHerrClick = document.getElementById("categoryHerrkläder");
    categoryHerrClick.onclick=()=>{
        changeActivePage("productListSection", "Herr");
        console.log("hejjj");
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

    categoryArray = [...data.categories];

    const categoryTitle = categoryArray.map(x=>{
        return x;
    })
    drawCategorys(categoryTitle);
}

getCategories();