const cards = Array.from({ length: 41 }, (_, i) => i + 1); // Usamos números de 1 a 41 para representar las cartas
let availableIndices = cards.slice(); // Copiamos todos los índices disponibles

function shuffleCards() {
    const cardElements = document.querySelectorAll('.card');

    cardElements.forEach(cardElement => {
        if (availableIndices.length === 0) {
            availableIndices = cards.slice(); // Si se agotan los índices, los recargamos
        }
        const randomIndex = availableIndices.splice(Math.floor(Math.random() * availableIndices.length), 1)[0];
        cardElement.style.backgroundImage = `url(images/${randomIndex}.jpg)`;
    });
}

function showCardPosition(index) {
    const positionDisplay = document.getElementById('positionDisplay');
    positionDisplay.textContent = `Posición de la carta: ${index}`;
}

const shuffleButton = document.getElementById('shuffleButton');
shuffleButton.addEventListener('click', shuffleCards);

const cardElements = document.querySelectorAll('.card');
cardElements.forEach((cardElement, index) => {
    cardElement.addEventListener('click', () => {
        showCardPosition(index + 1); // +1 para que las posiciones empiecen desde 1
    });
});

shuffleCards();
