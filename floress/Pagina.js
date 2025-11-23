// Selección de elementos
const stage = document.getElementById("stage");
const btn = document.getElementById("clickMe");

// SVG de flores
const flowerSVG = (color='#FF7FA1') => `
<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
<g fill="none" fill-rule="evenodd">
<circle cx="32" cy="32" r="6" fill="#FFD46A"/>
<path d="M32 10c-3 0-6 3-8 6-2 3-6 5-6 8s4 5 6 8c2 3 5 6 8 6s6-3 8-6c2-3 6-5 6-8s-4-5-6-8c-2-3-5-6-8-6z" fill="${color}" opacity="0.95"/>
<path d="M32 10c3 0 6 3 8 6 2 3 6 5 6 8s-4 5-6 8c-2 3-5 6-8 6s-6-3-8-6c-2-3-6-5-6-8s4-5 6-8c2-3 5-6 8-6z" fill="${color}" opacity="0.8" transform="rotate(30 32 32)"/>
</g>
</svg>`;

// Crear flores
function spawnFlowers(n = 12) {
    stage.innerHTML = '';
    const w = stage.clientWidth, h = stage.clientHeight;

    for (let i = 0; i < n; i++) {
        const el = document.createElement('div');
        el.className = 'flower';

        const size = 34 + Math.random() * 60;
        el.style.width = size + 'px';
        el.style.height = size + 'px';
        el.style.left = Math.random() * (w - 60) + 'px';
        el.style.top = Math.random() * (h - 60) + 'px';

        const colors = ['#FF7FA1','#FFC6E0','#B8FFD6','#FFD6A6','#D6C9FF','#A6FFD9'];
        const c = colors[Math.floor(Math.random()*colors.length)];
        el.innerHTML = flowerSVG(c);

        setTimeout(() => el.classList.add('show'), 80 * i + Math.random() * 200);
        stage.appendChild(el);
    }
}

// Estrellas fugaces
function shootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';

    star.style.left = Math.random() * stage.clientWidth + 'px';
    star.style.top = Math.random() * (stage.clientHeight / 2) + 'px';

    stage.appendChild(star);

    setTimeout(() => star.remove(), 1200);
}

function spawnStars(amount = 3) {
    for (let i = 0; i < amount; i++) {
        setTimeout(() => shootingStar(), i * 300);
    }
}

// Evento del botón
btn.addEventListener('click', () => {
    spawnFlowers(14 + Math.floor(Math.random() * 8));
    spawnStars(4);

    btn.textContent = '✨ GRACIAS ✨';
    btn.disabled = true;

    setTimeout(() => {
        btn.disabled = false;
        btn.textContent = 'PRESIÓNAME';
    }, 3000);
});

// Inicial
spawnFlowers(10);
