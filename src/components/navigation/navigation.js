headerNavOpenerClick();

function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  const navbarBtn = document.querySelector(".navbar__btn");

  if (!bodyEl || !headerNavOpener || !navbarBtn) {
    return;
  }

  function openNav() {
    bodyEl.classList.add("is-nav-open");
    headerNavOpener.classList.add("is-open");
    navbarBtn.classList.add("is-open");
  }

  function closeNav() {
    bodyEl.classList.remove("is-nav-open");
    headerNavOpener.classList.remove("is-open");
    navbarBtn.classList.remove("is-open");
  }

  headerNavOpener.addEventListener("click", function () {
    if (!headerNavOpener.classList.contains("is-open")) {
      openNav();
    } else {
      closeNav();
    }
  });

  navbarBtn.addEventListener("click", function () {
    if (bodyEl.classList.contains("is-nav-open")) {
      closeNav();
    }
  });
}
