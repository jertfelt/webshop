const categoriesSection = document.querySelector(".products__grid--categories");

const queryParams1 = new URLSearchParams(location.search);
const categoryId = queryParams1.get('id');

let categoryArray = []; 

const categoryCreator = (data) => {
    const categoryDam = document.getElementById("categorysMainSection");

        categoryDam.innerHTML= `

            <article id="categoryDam" class="product__img--container">
                    <div class="">
                        <img src="${data[0].fields.image.fields.file.url}" class="product__img" alt="produkt ${data[0].fields.title}"></img>
                    </div>
                
                    <article class="products__items">
                        <div id="categoryTitelInfoDam" class="">
                            <h3>${data[0].fields.title}</h3>
                            <h4>${data[0].fields.description}</h4>
                            <button class="">Se mer</button>
                        </div>
                    </article>
            </article>


            <article id="categoryHerr" class="product__img--container">
                    <div class="">
                        <img src="${data[1].fields.image.fields.file.url}" class="product__img" alt="produkt ${data[1].fields.title}"></img>
                    </div>
                
                    <article class="products__items">
                        <div id="categoryTitelInfoHerr" class="">
                            <h3>${data[1].fields.title}</h3>
                            <h4>${data[1].fields.description}</h4>
                            <button class="">Se mer</button>
                        </div>
                    </article>
            </article>


            <article id="categoryBaby" class="product__img--container">
                    <div class="">
                        <img src="${data[2].fields.image.fields.file.url}" class="product__img" alt="produkt ${data[2].fields.title}"></img>
                    </div>
                
                    <article class="products__items">
                        <div id="categoryTitelInfoBaby" class="">
                            <h3>${data[2].fields.title}</h3>
                            <h4>${data[2].fields.description}</h4>
                            <button class="">Se mer</button>
                        </div>
                    </article>
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