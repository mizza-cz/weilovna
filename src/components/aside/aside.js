const asideProductsContainer = document.querySelector(".aside__products");

if (asideProductsContainer) {
  const products = document.querySelectorAll(".asideProduct");
  const buttonMore = document.querySelector(".asideBtn");
  let visibleCount = 3;

  function showProducts() {
    products.forEach((product, index) => {
      if (index < visibleCount) {
        product.classList.add("visible");
      }
    });

    if (visibleCount >= products.length) {
      buttonMore.style.display = "none";
    }
  }

  buttonMore.addEventListener("click", function () {
    visibleCount += 3;
    showProducts();
  });

  showProducts();
}
