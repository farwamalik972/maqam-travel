import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".package-tab");
  const cards = document.querySelectorAll(".package-card");
  const packageGrid = document.querySelector("#package-grid");
  const currentYear = document.querySelector("#current-year");

  // Footer year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Filter packages when a tab is clicked
  function filterPackages(selectedCategory) {
    let visibleCards = 0;

    tabs.forEach((tab) => {
      const isActive = tab.dataset.filter === selectedCategory;

      tab.classList.toggle("active-tab", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    cards.forEach((card) => {
      const matches =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.classList.toggle("hidden", !matches);

      if (matches) {
        visibleCards++;
      }
    });

    // Keep the package section visible and in place
    if (packageGrid) {
      packageGrid.style.display = "grid";
    }

    return visibleCards;
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterPackages(tab.dataset.filter);
    });
  });

  // Show all packages when the page first loads
  filterPackages("all");
});
