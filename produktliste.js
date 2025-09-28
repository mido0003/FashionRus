const productListContainer = document.querySelector("main");

// const params = new URLSearchParams(window.location.search);

// const id = params.get("id");

// console.log("mit id fra url'en:" + id);

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20`)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  console.log(products);
  products.forEach((element) => {
    console.log(element);
    productListContainer.innerHTML += `
  <div class="grid_1-1-1-1">
     <div> <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="Undertrøje"/>
        <h2>${element.productdisplayname}</h2>
        <p>${element.articletype}</p>
        <p>${element.brandname}</p>
        <p>${element.price}</p>
        <a href="produkt.html?id=${element.id}">Read more</a>
        </div>`;
  });
}
