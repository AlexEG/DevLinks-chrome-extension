function Link(imgSrc, title, link) {
  return `<div class="group flex gap-2 justify-between w-full h-5 ">
  <div class="flex gap-2">
    <img src="../images/${
      imgSrc === "" ? "icon.png" : imgSrc
    }" alt="icon" width="20px" />
    <p>${title}</p>
  </div>

  <button class="group-hover:text-neutral-50 transition-colors delay-75 duration-200">
    <a href="${link}" target="_blank" title="Open in New Tap">
    
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.2"
        stroke="currentColor"
        class="w-4 h-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </a>
  </button>
</div>`;
}

const Docs = document.querySelector("#main > #docs");
const YouTube = document.querySelector("#main > #youtube");
const Other = document.querySelector("#main > #other");

Docs.innerHTML += Link(
  "TailwindCSS-Dark.svg",
  "Tailwind CSS",
  "https://tailwindcss.com/"
);
Docs.innerHTML += Link(
  "React-Dark.svg",
  "React - reference",
  "https://react.dev/"
);

YouTube.innerHTML += Link(
  "icon.png",
  "Tailwind CSS2",
  "https://tailwindcss.com/"
);
Other.innerHTML += Link("heroicons.png", "heroicons", "https://heroicons.com/");
