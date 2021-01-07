//Flip Cards
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        secondCard = this;

        checkForMatch();
    }
}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1000);
}

function resetBoard() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
}
//shuffle cards

var images = document.getElementByTagName("img");
var usedIds = [];
images.filter(image => image.src == "").forEach(image => {
    var newId = Math.floor(Math.random * (images.length + 1));
    while (!hasTwoOf(usedIds, newId)) {
        var newId = Math.floor(Math.random * (images.length + 1));
    }
    usedIds.push(newId);
    image.src = "img/bird" + newId + ".jpg";
});

function hasTwoOf(array, id) {
    var valuesSoFar = Object.create(null);
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (array[i] == id) {
            if (value in valuesSoFar) {
                return true;
            }
            valuesSoFar[value] = true;
        }
    }
    return false;
}

for(var i = 0; i < 10; i++) {
    console.log("Kevin");
}

cards.forEach(card => card.addEventListener('click', flipCard));
