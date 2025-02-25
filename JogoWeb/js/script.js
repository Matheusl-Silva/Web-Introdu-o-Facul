// Configuração do jogo
const cardValues = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];  // valores das cartas
let cards = [...cardValues, ...cardValues];  // cria o array com cartas duplicadas
cards = shuffle(cards);  // embaralha as cartas

let flippedCards = [];  // cartas viradas
let matchedCards = [];  // cartas que já foram acertadas

// Embaralha as cartas
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];  // troca os elementos
    }
    return array;
}

// Cria o tabuleiro de jogo
function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';  // limpa o tabuleiro antes de recriar

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.dataset.value = card;
        cardElement.textContent = '';  // carta começa virada para baixo

        cardElement.addEventListener('click', flipCard);
        board.appendChild(cardElement);
    });
}

// Vira a carta
function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains('flipped') && !this.classList.contains('matched')) {
        this.classList.add('flipped');
        this.textContent = this.dataset.value;
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkMatch();
        }
    }
}

// Checa se as cartas viradas são um par
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            card1.textContent = '';
            card2.textContent = '';
        }, 1000);
    }

    flippedCards = [];

    // Verifica se o jogo foi vencido
    if (matchedCards.length === cards.length) {
        setTimeout(() => alert('Você ganhou!'), 500);
    }
}

// Reinicia o jogo
document.getElementById('reset-btn').addEventListener('click', function() {
    cards = shuffle(cards);  // embaralha as cartas
    flippedCards = [];  // limpa as cartas viradas
    matchedCards = [];  // limpa as cartas acertadas
    createBoard();  // recria o tabuleiro
});

// Inicia o jogo
createBoard();
