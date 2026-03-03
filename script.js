/* POPUP LOGIC */
const popup = document.getElementById("updatePopup");
const popupOk = document.getElementById("popupOk");

window.addEventListener("load", () => {
  if (popup) {
    popup.classList.add("show");
  }
});

if (popupOk && popup) {
  popupOk.addEventListener("click", () => {
    popup.classList.remove("show");
  });
}

/* ENVELOPE + CONFETTI */
const envelope = document.getElementById('envelope');
const closeBtn = document.getElementById('closeBtn');
const confettiContainer = document.getElementById('confetti');

function explodeConfetti() {
  if (!confettiContainer) return;

  for (let i = 0; i < 180; i++) {
    const conf = document.createElement('div');
    conf.classList.add('confetti');

    const angle = Math.random() * 2 * Math.PI;
    const distance = 200 + Math.random() * 300;

    conf.style.setProperty('--tx', (Math.cos(angle) * distance) + 'px');
    conf.style.setProperty('--ty', (Math.sin(angle) * distance) + 'px');

    conf.style.backgroundColor = ["#ff6b6b", "#ffd93d", "#6bcB77", "#4d96ff"][Math.floor(Math.random() * 4)];

    confettiContainer.appendChild(conf);

    setTimeout(() => conf.remove(), 3500);
  }
}

if (envelope) {
  envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    if (closeBtn) closeBtn.classList.remove('hidden');
    explodeConfetti();
  });
}

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    if (envelope) envelope.classList.remove('open');
    closeBtn.classList.add('hidden');
    if (confettiContainer) confettiContainer.innerHTML = "";
  });
}
