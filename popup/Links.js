function Link(imgSrc, title, link) {
  return `<div class="group flex gap-2 justify-between w-full h-5">
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
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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
  "https://tailwindcss.com/docs/installation"
);
Docs.innerHTML += Link(
  "React-Dark.svg",
  "React - reference",
  "https://react.dev/"
);

Docs.innerHTML += Link(
  "lighthouse.svg",
  "Lighthouse",
  "https://developer.chrome.com/docs/lighthouse/"
);

Docs.innerHTML += Link(
  "google-chrome.svg",
  "Chrome Extensions",
  "https://developer.chrome.com/docs/extensions/"
);
Docs.innerHTML += Link(
  "javascript.info.png",
  "javascript.info",
  "https://javascript.info/"
);

Docs.innerHTML += Link(
  "framerMotion.webp",
  "Framer Motion",
  "https://www.framer.com/motion/introduction/"
);

Docs.innerHTML += Link("Vite-Dark.svg", "Vite", "https://vitejs.dev/guide/");

YouTube.innerHTML += Link(
  "ThePrimeTime.png",
  "ThePrimeTime",
  "https://www.youtube.com/@ThePrimeTimeagen"
);

Other.innerHTML += Link(
  "twitch.svg",
  "ThePrimeagen",
  "https://www.twitch.tv/ThePrimeagen"
);
Other.innerHTML += Link(
  "frontendmasters.png",
  "FrontendMasters",
  "https://frontendmasters.com/"
);

Other.innerHTML += Link("heroicons.png", "heroicons", "https://heroicons.com/");
Other.innerHTML += Link(
  "svgrepo-icon.svg",
  "SVG Repo",
  "https://www.svgrepo.com/"
);
