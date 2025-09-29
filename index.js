const categorylist = document.querySelector(".grid_1-1-1");

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => showCategories(categories));

function showCategories(categories) {
  categories.forEach((category) => {
    categorylist.innerHTML += `<a class="knapper" href="produktliste.html?category=${category.category}">${category.category}</a>`;
  });
}
