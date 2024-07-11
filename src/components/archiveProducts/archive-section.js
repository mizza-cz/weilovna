const archInner = document.querySelector(".archiveProducts__inner");

if (archInner) {
  const archProducts = document.querySelectorAll(
    ".archiveProducts__inner .col-lg-3"
  );
  const archBtn = document.querySelector(".archiveProducts__btn");
  let archCount = 12;

  function showProd() {
    archProducts.forEach((product, index) => {
      if (index < archCount) {
        product.classList.add("visible");
      }
    });

    if (archCount >= archProducts.length) {
      archBtn.style.display = "none";
    }
  }

  archBtn.addEventListener("click", function () {
    archCount += 4;
    showProd();
  });

  showProd();
}
