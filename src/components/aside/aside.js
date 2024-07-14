const asideProductsContainer = document.querySelector(".aside__products");

if (asideProductsContainer) {
  const products = document.querySelectorAll(".asideProduct");
  const buttonMore = document.querySelector(".asideBtn");
  let isExpanded = false;

  function showInitialProducts() {
    products.forEach((product, index) => {
      if (index < 3) {
        product.classList.add("visible");
      } else {
        product.classList.remove("visible");
      }
    });
    buttonMore.style.display = "block";
  }

  function toggleProducts() {
    if (isExpanded) {
      products.forEach((product, index) => {
        if (index >= 3) {
          product.classList.remove("visible");
        }
      });
      buttonMore.classList.remove("active");
    } else {
      products.forEach((product, index) => {
        if (index >= 3 && index < 6) {
          product.classList.add("visible");
        }
      });
      buttonMore.classList.add("active");
    }
    isExpanded = !isExpanded;
  }

  buttonMore.addEventListener("click", toggleProducts);

  showInitialProducts();
}
