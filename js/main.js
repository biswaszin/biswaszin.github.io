const STATES = [
  { img: "images/reze.jpg", bg: "#FCBDBD", fg: "#382B2B" },
  { img: "images/cozy.JPG", bg: "#0F0F0F", fg: "#E2E8F0" },
  { img: "images/rize.jpg", bg: "#2D1B4E", fg: "#F3E8FF" },
  { img: "images/cool.jpg", bg: "#4A5568", fg: "#F7FAFC" },
  { img: "images/star.jpg", bg: "#0A0A0A", fg: "#F5F5F5" },
];

const root = document.documentElement;
const button = document.querySelector(".avatar-btn");
const avatar = document.querySelector(".avatar-icon");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let index = 0;
let animating = false;

const rippleDuration = parseFloat(
  getComputedStyle(root).getPropertyValue("--ripple-duration")
) || 650;

STATES.forEach((state) => {
  const preload = new Image();
  preload.src = state.img;
});

function apply(state) {
  root.style.setProperty("--primary-color", state.bg);
  root.style.setProperty("--secondary-color", state.fg);
  avatar.src = state.img;
}

button.addEventListener("click", (event) => {
  if (animating) return;

  index = (index + 1) % STATES.length;
  const next = STATES[index];

  if (reducedMotion.matches) {
    apply(next);
    return;
  }

  animating = true;

  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.setProperty("--x", event.clientX + "px");
  ripple.style.setProperty("--y", event.clientY + "px");
  ripple.style.setProperty("--ripple-color", next.bg);
  document.body.appendChild(ripple);

  let settled = false;
  const finish = () => {
    if (settled) return;
    settled = true;
    apply(next);
    ripple.remove();
    animating = false;
  };

  ripple.addEventListener("transitionend", finish, { once: true });
  setTimeout(finish, rippleDuration + 150);

  ripple.getBoundingClientRect();
  ripple.classList.add("is-active");
});
