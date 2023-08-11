const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(navItemHighlight);

function navItemHighlight(item) {
  item.addEventListener("click", (e) => {
    navItems.forEach((item) => {
      item.classList.remove("border-b-2");
    });
    e.target.classList.add("border-b-2");
  });
}
