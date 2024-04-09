document.getElementById('drawButton').addEventListener('click', drawCard);

function drawCard() {
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
        .then(res => res.json())
        .then(data => {
            const cardImage = data.cards[0].image;
            const cardContainer = document.getElementById('cardContainer');
            cardContainer.innerHTML = ''; 
            const cardImageElement = document.createElement('img');
            cardImageElement.setAttribute('src', cardImage);
            cardContainer.appendChild(cardImageElement);
        })
        .catch(err => console.log(err));
}
