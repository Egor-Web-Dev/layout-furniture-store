/* eslint no-undef: "off" */
const catalogSection = document.querySelector(".catalog");
const productsList = document.querySelector(".catalog__list");
const products = document.querySelectorAll(".catalog__product");

let currentPageNumber = 1;

function showProducts() {
  const productsPerPage = getProductsPerPage();

  products.forEach((product, index) => {
    product.remove();

    if (
      index >= productsPerPage * (currentPageNumber - 1) &&
      index < productsPerPage * currentPageNumber
    ) {
      productsList.append(product);
    }
  });
}

function getProductsPerPage() {
  const productsPerPage = window.innerWidth >= 1024 ? 9 : 6;
  return productsPerPage;
}

function switchCatalog(clickedBtn) {
  const newPageNumber = Number(clickedBtn.textContent);

  if (currentPageNumber !== newPageNumber) {
    const activeButton = document.querySelector(".pagination__btn--active");

    activeButton.classList.remove("pagination__btn--active");
    clickedBtn.classList.add("pagination__btn--active");

    currentPageNumber = newPageNumber;

    showProducts();
    catalogSection.scrollIntoView({ behavior: "smooth" });
  }
}

function createPagination(count) {
  const list = document.createElement("ul");
  list.classList.add("list-reset", "pagination", "catalog__pagination");

  for (let i = 0; i < count; i++) {
    const item = document.createElement("li");
    const button = document.createElement("button");

    item.classList.add("pagination__item");
    button.classList.add("btn", "pagination__btn");

    if (i === 0) {
      button.classList.add("pagination__btn--active");
    }

    button.ariaLabel = `Страница ${i + 1}`;
    button.textContent = i + 1;

    button.addEventListener("click", () => {
      switchCatalog(button);
    });

    item.append(button);
    list.append(item);
  }

  return list;
}

function addPagination() {
  const productsPerPage = getProductsPerPage();
  const lastPage = Math.ceil(products.length / productsPerPage);

  if (lastPage > 1) {
    const pagination = createPagination(lastPage);
    catalogSection.append(pagination);
  }
}

function resizeHandler() {
  const pagination = document.querySelector(".catalog__pagination");
  pagination.remove();

  currentPageNumber = 1;

  addPagination();
  showProducts();
}

window.addEventListener("resize", () => {
  resizeHandler();
});

addPagination();
showProducts();
