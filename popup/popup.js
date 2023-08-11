const navItems = document.querySelectorAll(".nav-item");

// const Docs = document.querySelector("#main > #docs");
// const YouTube = document.querySelector("#main > #youtube");
// const Other = document.querySelector("#main > #other");

navItems.forEach(navItemHighlight);

function navItemHighlight(item) {
  item.addEventListener("click", (e) => {
    navItems.forEach((item) => {
      item.classList.remove("border-b-2");
    });
    e.target.classList.add("border-b-2");

    SectionHideShowFunc(e);
  });
}

function SectionHideShowFunc(e) {
  if (e.target.innerText === "Docs") {
    hide("youtube");
    hide("other");
    show("docs");
  } else if (e.target.innerText === "YouTube") {
    hide("docs");
    hide("other");
    show("youtube");
  } else {
    hide("docs");
    hide("youtube");
    show("other");
  }
}

function hide(section) {
  document.querySelector(`#main > #${section}`).classList.remove("flex");
  document.querySelector(`#main > #${section}`).classList.add("hidden");
}
function show(section) {
  document.querySelector(`#main > #${section}`).classList.remove("hidden");
  document.querySelector(`#main > #${section}`).classList.add("flex");
}
