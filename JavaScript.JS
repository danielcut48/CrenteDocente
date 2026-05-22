// Script de Reveal suave e fluido
        const observerOptions = { threshold: 0.15 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        
        // 1. Liste aqui os nomes dos arquivos que estão na sua pasta /imagens
const imagens = ['foto1.jpg', 'foto2.jpg', 'foto3.jpg'];
const pasta = 'imagens/';

const slideContainer = document.getElementById('carousel-slide');
let counter = 0;

// 2. Gerar as imagens dinamicamente
imagens.forEach(nomeImg => {
    const img = document.createElement('img');
    img.src = pasta + nomeImg;
    slideContainer.appendChild(img);
});

// 3. Lógica de movimento
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    if (counter >= imagens.length - 1) {
        counter = 0; // Volta para a primeira
    } else {
        counter++;
    }
    atualizarCarrossel();
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = imagens.length - 1; // Vai para a última
    } else {
        counter--;
    }
    atualizarCarrossel();
});

function atualizarCarrossel() {
    const size = slideContainer.clientWidth;
    slideContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
}