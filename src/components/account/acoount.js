const favoriteButtons = document.querySelectorAll(".productItem__favorite");
const favoriteCountSpan = document.querySelector(".favorite-count");
const favoriteBox = document.querySelector(".account__favorite");
let favoriteCount = 0;

favoriteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const productItem = event.target.closest(".productItem");
    const isFavorite = productItem.classList.toggle("active");

    if (isFavorite) {
      favoriteCount++;
    } else {
      favoriteCount--;
    }

    if (favoriteCount > 0) {
      favoriteBox.style.display = "flex";
      favoriteCountSpan.style.display = "flex";
      favoriteCountSpan.textContent = favoriteCount;
    } else {
      favoriteCountSpan.style.display = "none";
      favoriteBox.style.display = "none";
    }
  });
});
