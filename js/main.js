function buildLetterSwap(link) {
  const text = link.textContent;
  const letters = Array.from(text).map((ch) => (ch === ' ' ? ' ' : ch));

  const rowOver = document.createElement('span');
  rowOver.className = 'letters-row letters-row-over';

  const rowUnder = document.createElement('span');
  rowUnder.className = 'letters-row letters-row-under';

  letters.forEach((ch, i) => {
    const delay = `${i * 25}ms`;

    const over = document.createElement('span');
    over.className = 'letter';
    over.style.transitionDelay = delay;
    over.textContent = ch;
    rowOver.appendChild(over);

    const under = document.createElement('span');
    under.className = 'letter';
    under.style.transitionDelay = delay;
    under.textContent = ch;
    rowUnder.appendChild(under);
  });

  link.textContent = '';
  link.appendChild(rowOver);
  link.appendChild(rowUnder);
}

document.querySelectorAll('.nav-link').forEach(buildLetterSwap);

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
