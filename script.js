const envelope = document.getElementById('envelope');
const closeBtn = document.getElementById('closeBtn');
const confettiContainer = document.getElementById('confetti');

function explodeConfetti() {
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

envelope.addEventListener('click', () => {
  envelope.classList.add('open');
  closeBtn.classList.remove('hidden');
  explodeConfetti();
});

closeBtn.addEventListener('click', () => {
  envelope.classList.remove('open');
  closeBtn.classList.add('hidden');
  confettiContainer.innerHTML = "";
});
