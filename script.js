(() => {
  const siteHeader = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("primary-nav");

  if (siteHeader && navToggle && navMenu) {
    const setMenuState = (isOpen) => {
      siteHeader.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    navMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => setMenuState(false));
    });

    document.addEventListener("click", (event) => {
      if (!siteHeader.classList.contains("is-open")) return;
      if (!siteHeader.contains(event.target)) setMenuState(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") setMenuState(false);
    });
  }

  const yearTarget = document.getElementById("current-year");
  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }
})();
