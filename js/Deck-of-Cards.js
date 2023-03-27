const kinds = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King', 'Ace'];
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];
const deck = []; // a new array to save the cards to

//8. Setting up a nested loop for type of cards;
for (let k = 0; k < kinds.length; k++) {
    for (let s = 0; s < suits.length; s++) {
        //concat the card file name and push the result in the dec
        //to get the images because the images are this.png
        deck.push(`${kinds[k]}-of-${suits[s]}`)
    }
}


const btn = document.querySelector('button');
btn.addEventListener('click', dealCards)
const imgArr = document.querySelectorAll('#card-box img'); 
const cardBox = document.getElementById('card-box');

//make a copy so tha when it's spliced out/cut out, we have a new copy
// let deckCopy = [...deck]; //works
let deckCopy = deck.slice(0);

function dealCards() {
    cardBox.innerHTML= "";
   for (let i =0; i < imgArr.length; i++) {
        //randomize the cards picks
        let r = Math.floor(Math.random() * deckCopy.length);
        cardBox.innerHTML += `<img src="images/${deckCopy[r]}.png">`;

        //splice/cut so that can't get two cards/repeat
        deckCopy.splice(r,1);

        //when there are two cards left then bring the deckCopy
        if (deckCopy.length == 2) {
            deckCopy = [...deck]; //recollect the deck //the original
        }
   } 
   return cardBox;
}
