const STATES = [
  { img: "images/reze.jpg", bg: "#FCBDBD", fg: "#382B2B", icon: "⏾", iconColor: "#FFFFFF", side: "right" },
  { img: "images/star.jpg", bg: "#0A0A0A", fg: "#F5F5F5", icon: "⚯", iconColor: "#FFF4DE", side: "right" },
  { img: "images/cozy.JPG", bg: "#121212", fg: "#FFF4DE", icon: "♡", iconColor: "#FFFFFF", side: "right" },
  { img: "images/rize.jpg", bg: "#2D1B4E", fg: "#F3E8FF", icon: "✶", iconColor: "#2D1B4E", side: "left" },
  { img: "images/cool.jpg", bg: "#4A5568", fg: "#F7FAFC", icon: "♡", iconColor: "#FFFFFF", side: "right" },
];

const root = document.documentElement;
const button = document.querySelector(".avatar-btn");
const avatar = document.querySelector(".avatar-icon");
const hint = document.querySelector(".avatar-hint");

let index = 0;

STATES.forEach((state) => {
  const preload = new Image();
  preload.src = state.img;
});

function apply(state) {
  root.style.setProperty("--primary-color", state.bg);
  root.style.setProperty("--secondary-color", state.fg);
  avatar.src = state.img;
  hint.textContent = state.icon;
  hint.style.color = state.iconColor;
  hint.classList.toggle("hint-left", state.side === "left");
}

apply(STATES[index]);

button.addEventListener("click", () => {
  index = (index + 1) % STATES.length;
  apply(STATES[index]);
});
