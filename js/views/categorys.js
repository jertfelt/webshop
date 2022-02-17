

fetch(`js/data/categories.json`)
.then (response => response.json())
.then(data =>{
    console.log(data.categories[0].fields.image.fields.file.url)

    const h3 = document.getElementById("categoryTitle");
    h3.innerHTML = data.categories[0].fields.title;

    const h4 = document.getElementById("categoryInfo");
    h4.innerHTML = data.categories[0].fields.description;

    const img = document.getElementById("categoryImg");
    img.src = data.categories[0].fields.image.fields.file.url;
})

