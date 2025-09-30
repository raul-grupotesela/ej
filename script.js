const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const filterButtons = document.querySelectorAll('.filters .btn');
const matches = document.querySelectorAll('.match');
const countdownDate = new Date('2024-07-12T18:00:00').getTime();

navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navLinks.classList.toggle('nav__links--visible');
});

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.setAttribute('aria-pressed', 'false'));
        button.setAttribute('aria-pressed', 'true');
        const phase = button.dataset.phase;

        matches.forEach((match) => {
            const shouldShow = phase === 'todas' || match.dataset.phase === phase;
            match.style.display = shouldShow ? 'block' : 'none';
        });
    });
});

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const now = Date.now();
    const distance = countdownDate - now;

    if (distance <= 0) {
        daysEl.textContent = '0';
        hoursEl.textContent = '0';
        minutesEl.textContent = '0';
        secondsEl.textContent = '0';
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days);
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

const yearEl = document.getElementById('year');
yearEl.textContent = new Date().getFullYear();

// Cerrar el menú al seleccionar una opción en móviles
navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement && navLinks.classList.contains('nav__links--visible')) {
        navLinks.classList.remove('nav__links--visible');
        navToggle.setAttribute('aria-expanded', 'false');
    }
});
