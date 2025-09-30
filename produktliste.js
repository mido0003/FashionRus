const params = new URLSearchParams(window.location.search);
const category = params.get("category");

const productListContainer = document.querySelector(".grid_1-1-1-1");

document.querySelector(".category_title").textContent = category;

document
  .querySelectorAll("#filters button")
  .forEach((knap) => knap.addEventListener("click", showFiltered));
function showFiltered() {
  console.log(this.dataset.gender);
  const gender = this.dataset.gender;
  if (gender == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((product) => product.gender == gender);
    showProducts(udsnit);
  }
}

let allData;

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100&category=${category}`)
  .then((response) => response.json())
  .then((data) => {
    allData = data;
    showProducts(allData);
  });

function showProducts(products) {
  console.log(products);
  productListContainer.innerHTML = "";
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
        ${element.soldout ? "<p class='udsolgt'>Sold out</p>" : ""}
        ${
          element.discount
            ? `<p class='tilbud'>Offer ${element.discount}%</p>
              <p>Now ${Math.round(
                element.price - (element.price * element.discount) / 100
              )},-</p>`
            : ""
        }
        <a href="produkt.html?id=${element.id}">Read more</a>
        </div>`;
  });
}
