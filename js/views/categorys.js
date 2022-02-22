const categoriesSection = document.querySelector(".products__grid--categories");

let categoryArray = []; 

const categoryCreator = (item) => {
    const categoryDam = document.getElementById("categoryTitelInfoDam");

        categoryDam.innerHTML= `
            <h3>${data.categories[0].fields.title}</h3>
            <h4>${data.categories[0].fields.description}</h4>
            <button id="categoryDamBtn">Se mer</button>
        `;
        const imgDam = document.getElementById("imgWrapperDam");
        const btnDam = document.getElementById("categoryDamBtn");
        imgDam.innerHTML= `
            <img src="${data.categories[0].fields.image.fields.file.url}" class="product__img" alt="produkt ${data.categories[0].fields.title}">
        `;
        imgDam.onclick=()=>{
            console.log("image clicked...");
        }
        btnDam.onclick=()=>{
            console.log("button clicked...");
        }
    
        categoriesSection.appendChild(categoryDam);
    
        const categoryHerr = document.getElementById("categoryTitelInfoHerr");
        categoryHerr.innerHTML= `
            <h3>${data.categories[1].fields.title}</h3>
            <h4>${data.categories[1].fields.description}</h4>
            <button id="categoryHerrBtn">Se mer</button>
        `;
        const imgHerr = document.getElementById("imgWrapperHerr");
        const btnHerr = document.getElementById("categoryHerrBtn");
        imgHerr.innerHTML= `
            <img src="${data.categories[1].fields.image.fields.file.url}" class="product__img" alt="produkt ${data.categories[1].fields.title}">
        `;
        imgHerr.onclick=()=>{
            console.log("image clicked...");
        }
        btnHerr.onclick=()=>{
            console.log("button clicked...");
        }
    
        const categoryBaby = document.getElementById("categoryTitelInfoBaby");
        categoryBaby.innerHTML= `
            <h3>${data.categories[2].fields.title}</h3>
            <h4>${data.categories[2].fields.description}</h4>
            <button id="categoryBabyBtn">Se mer</button>
        `;
        const imgBaby = document.getElementById("imgWrapperBaby");
        const btnBaby = document.getElementById("categoryBabyBtn");
        imgBaby.innerHTML= `
            <img src="${data.categories[2].fields.image.fields.file.url}" class="product__img" alt="produkt ${data.categories[2].fields.title}">
        `;
        imgBaby.onclick=()=>{
            console.log("image clicked...");
        }
        btnBaby.onclick=()=>{
            console.log("image clicked...");
        }
    }

//---------fetch from JSON and render:



async function getCategories() {

    const catResponse = await fetch("/js/data/categories.json");

    const data = await catResponse.json();

    productsArray = [...data.categories];

    console.log(productsArray);

    //här behöver vi göra en form av .map() för att få ut och definiera data
    // productsArray.map((product) => {
    //     if (product.sys.id === productId){
    //         productCreator(product)
    //     }
    //     })

    //categoryCreator();
}

getCategories();



// fetch("js\data\categories.json")
// .then (response => response.json())
// .then(data =>{
//     const categoryDam = document.getElementById("categoryTitelInfoDam");
//     categoryDam.innerHTML= `
//         <h3>${data.categories[0].fields.title}</h3>
//         <h4>${data.categories[0].fields.description}</h4>
//         <button id="categoryDamBtn">Se mer</button>
//     `;
//     const imgDam = document.getElementById("imgWrapperDam");
//     const btnDam = document.getElementById("categoryDamBtn");
//     imgDam.innerHTML= `
//         <img src="${data.categories[0].fields.image.fields.file.url}" class="product__img" alt="produkt ${data.categories[0].fields.title}">
//     `;
//     imgDam.onclick=()=>{
//         console.log("image clicked...");
//     }
//     btnDam.onclick=()=>{
//         console.log("button clicked...");
//     }

//     categoriesSection.appendChild(categoryDam);

//     const categoryHerr = document.getElementById("categoryTitelInfoHerr");
//     categoryHerr.innerHTML= `
//         <h3>${data.categories[1].fields.title}</h3>
//         <h4>${data.categories[1].fields.description}</h4>
//         <button id="categoryHerrBtn">Se mer</button>
//     `;
//     const imgHerr = document.getElementById("imgWrapperHerr");
//     const btnHerr = document.getElementById("categoryHerrBtn");
//     imgHerr.innerHTML= `
//         <img src="${data.categories[1].fields.image.fields.file.url}" class="product__img" alt="produkt ${data.categories[1].fields.title}">
//     `;
//     imgHerr.onclick=()=>{
//         console.log("image clicked...");
//     }
//     btnHerr.onclick=()=>{
//         console.log("button clicked...");
//     }

//     const categoryBaby = document.getElementById("categoryTitelInfoBaby");
//     categoryBaby.innerHTML= `
//         <h3>${data.categories[2].fields.title}</h3>
//         <h4>${data.categories[2].fields.description}</h4>
//         <button id="categoryBabyBtn">Se mer</button>
//     `;
//     const imgBaby = document.getElementById("imgWrapperBaby");
//     const btnBaby = document.getElementById("categoryBabyBtn");
//     imgBaby.innerHTML= `
//         <img src="${data.categories[2].fields.image.fields.file.url}" class="product__img" alt="produkt ${data.categories[2].fields.title}">
//     `;
//     imgBaby.onclick=()=>{
//         console.log("image clicked...");
//     }
//     btnBaby.onclick=()=>{
//         console.log("image clicked...");
//     }
// })

