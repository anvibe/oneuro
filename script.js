// Paste the share link of your signup form here (Tally or Typeform),
// for example "https://tally.so/r/XXXXXX".
const FORM_URL = "https://tally.so/r/yXJK86";

const status = document.querySelector(".status");

const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

// A small shower of coins from wherever the button was pressed.
function burst(x, y) {
  for (let i = 0; i < 12; i++) {
    const coin = document.createElement("img");
    coin.src = "assets/icons/coin.svg";
    coin.alt = "";
    coin.className = "burst";
    coin.style.left = `${x}px`;
    coin.style.top = `${y}px`;
    document.body.append(coin);
    const angle = -Math.PI * (0.08 + (0.84 * i) / 11);
    const reach = 70 + Math.random() * 70;
    const dx = Math.cos(angle) * reach;
    const dy = Math.sin(angle) * reach;
    coin.animate(
      [
        { transform: "translate(0, 0) scale(0.4)", opacity: 1 },
        { transform: `translate(${dx}px, ${dy}px) scale(1)`, opacity: 1, offset: 0.55 },
        { transform: `translate(${dx * 1.25}px, ${dy + 90}px) scale(0.8)`, opacity: 0 },
      ],
      { duration: 800, easing: "cubic-bezier(.2,.7,.4,1)" }
    ).onfinish = () => coin.remove();
  }
}

document.querySelectorAll("[data-join]").forEach((link) => {
  if (FORM_URL) link.href = FORM_URL;
  link.addEventListener("click", (event) => {
    // Leave "open in new tab" clicks to the browser.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const box = link.getBoundingClientRect();
    if (!calm.matches) burst(box.left + box.width / 2, box.top + box.height / 2);
    if (FORM_URL) {
      setTimeout(() => location.assign(FORM_URL), calm.matches ? 0 : 450);
      return;
    }
    // With no form connected, say so instead of leading nowhere.
    status.textContent = "Signups aren’t open yet. Please check back soon.";
    status.scrollIntoView({ block: "center" });
  });
});

const pause = document.querySelector(".pause");
pause.addEventListener("click", () => {
  const paused = document.querySelector(".hero").classList.toggle("paused");
  pause.setAttribute("aria-pressed", paused);
  pause.textContent = paused ? "Play animation" : "Pause animation";
});
