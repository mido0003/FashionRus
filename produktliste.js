const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productListContainer = document.querySelector(".grid_1-1-1-1");

document.querySelector(".category_title").textContent = category;

document
  .querySelectorAll("#filters button")
  .forEach((knap) => knap.addEventListener("click", showFiltered));
function showFiltered() {
  console.log("showFiltered");
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    showProducts(data);
  });

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);
    productListContainer.innerHTML += `
     <div> <img src="https://kea-alt-del.dk/t7/images/webp/640/${
       element.id
     }.webp" alt="Undertrøje"/>
        <h2>${element.productdisplayname}</h2>
        <p>${element.articletype}</p>
        <p>${element.brandname}</p>
        <p>${element.price}</p>
        ${element.soldout ? "<p class='udsolgt'>SOLD OUT</p>" : ""}
        ${element.discount ? "<p class='tilbud'></p>" : ""}
        <a href="produkt.html?id=${element.id}">Read more</a>
        </div>`;
  });
}
