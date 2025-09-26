const productContainer = document.querySelector(".grid_2-2-1");

const params = new URLSearchParams(window.location.search);

const id = params.get("id");
console.log(id);
// console.log("mit id fra url'en:" + id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((product) => {
    console.log(product);

    productContainer.innerHTML = `
<div>
        <img
          src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
          alt="${product.productdisplayname}"
        />
      </div>
      <div>
        <div>
          <h1 class="H1produkt">Product information</h1>
          <p>Model name</p>
          <p>${product.productdisplayname}</p>
          <p>Color</p>
          <p>blue</p>
          <p>Ivenory number</p>
          <p>1164</p>
          <h1 class="H1produkt">Nike</h1>
          <p>Nike, creating, experiences</p>
        </div>
      </div>
      <div>
        <h2 class="H2produkt">Sahara team India fanwear round Jersey</h2>
        <p>${product.brandname} - ${product.articletype}</p>
        <div class="produktknap">Add to basket</div>
      </div>
`;
  });
