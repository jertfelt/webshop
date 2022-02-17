

fetch(`js/data/categories.json`)
.then (response => response.json())
.then(data =>{
    const categoryDam = document.getElementById("categoryTitelInfoDam");
    categoryDam.innerHTML= `
        <h3>${data.categories[0].fields.title}</h3>
        <h4>${data.categories[0].fields.description}</h4>
    `;
    const imgDam = document.getElementById("categoryImgDam");
    imgDam.src = data.categories[0].fields.image.fields.file.url;


    const categoryHerr = document.getElementById("categoryTitelInfoHerr");
    categoryHerr.innerHTML= `
        <h3>${data.categories[1].fields.title}</h3>
        <h4>${data.categories[1].fields.description}</h4>
    `;
    const imgHerr = document.getElementById("categoryImgHerr");
    imgHerr.src = data.categories[1].fields.image.fields.file.url;


    const categoryBaby = document.getElementById("categoryTitelInfoBaby");
    categoryBaby.innerHTML= `
        <h3>${data.categories[2].fields.title}</h3>
        <h4>${data.categories[2].fields.description}</h4>
    `;
    const imgBaby = document.getElementById("categoryImgBaby");
    imgBaby.src = data.categories[2].fields.image.fields.file.url;
})

