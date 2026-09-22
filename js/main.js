const STATES = [
  { img: "images/reze.jpg", bg: "#FCBDBD", fg: "#382B2B" },
  { img: "images/cozy.JPG", bg: "#121212", fg: "#FFF4DE" },
  { img: "images/rize.jpg", bg: "#2D1B4E", fg: "#F3E8FF" },
  { img: "images/cool.jpg", bg: "#4A5568", fg: "#F7FAFC" },
  { img: "images/star.jpg", bg: "#0A0A0A", fg: "#F5F5F5" },
];

const root = document.documentElement;
const button = document.querySelector(".avatar-btn");
const avatar = document.querySelector(".avatar-icon");

let index = 0;

STATES.forEach((state) => {
  const preload = new Image();
  preload.src = state.img;
});

button.addEventListener("click", () => {
  index = (index + 1) % STATES.length;
  const next = STATES[index];

  root.style.setProperty("--primary-color", next.bg);
  root.style.setProperty("--secondary-color", next.fg);
  avatar.src = next.img;
});
