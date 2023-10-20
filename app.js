const planets = [
    'images/sol.png',
    'images/mercurio.png',
    'images/venus.png',
    'images/terra.png',
    'images/marte.png',
    'images/jupiter.png',
    'images/saturno.png',
    'images/urano.png',
    'images/netuno.png'
];

let indiceatual = 0;
let direcao = 'left';
const numStars = 70;
const starsContainer = document.querySelector(".stars");


for (let i = 0; i < numStars; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    starsContainer.appendChild(star);
}

function updatestars(direction) {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
        star.style.animation = `anim-stars-${direction} 9s ease forwards`;
    });
}

function updatePlanet(saida, entrada) {
    const planetContainer = document.getElementById('planet-container');
    let animacaosaida, animacaoentrada;

    if (direcao === 'left') {
        animacaosaida = 'slide-out-left';
        animacaoentrada = 'slide-in-right';
    } else {
        animacaosaida = 'slide-out-right';
        animacaoentrada = 'slide-in-left';
    }

    if (saida) {
        planetContainer.classList.add(animacaosaida);
    }

    setTimeout(() => {
        planetContainer.classList.remove(animacaosaida);
        planetContainer.style.backgroundImage = `url('${planets[indiceatual]}')`;

        if (entrada) {
            planetContainer.classList.add(animacaoentrada);
        }

        setTimeout(() => {
            planetContainer.classList.remove(animacaoentrada);
        }, 5500);
    }, 5500);

}


document.getElementById('left').addEventListener('click', () => {
    if (indiceatual > 0) {
        indiceatual--;
        direcao = 'right';
        updatestars('right');
        updatePlanet(true, true);
    }
    
});

document.getElementById('right').addEventListener('click', () => {
    if (indiceatual < planets.length - 1) {
        indiceatual++;
        direcao = 'left';
        updatestars('left');
        updatePlanet(true, true);
    }
});



updatePlanet(false, true);