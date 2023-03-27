const kinds = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King', 'Ace'];
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];
const deck = []; 

//8. Setting up a nested loop for type of cards;
for (let k = 0; k < kinds.length; k++) {
    for (let s = 0; s < suits.length; s++) {
        //concat the card file name and push the result in the dec
        //to get the images because the images are this.png
        deck.push(`${kinds[k]}-of-${suits[s]}`)
    }
}


const btn = document.querySelector('button');
btn.addEventListener('click', dealShuffledCards);
const imgArr = document.querySelectorAll('#card-box img'); 
const cardBox = document.getElementById('card-box');

//make a copy so tha when it's spliced out/cut out, we have a new copy
let deckCopy = deck.slice(0);

//loop through and shuffle the deck
function shuffleDeck(deck){
    for (let i = 0; i < deck.length; i++) {
        //get a copy of the array
        let currentItemCopy = deck[i];
        //generat the integer in the range of the array
        let r = Math.floor(Math.random() * deck.length);
        
        //replace current item with the new
        deck[i] = deck[r];

        //replace the random item 
        deck[r] = currentItemCopy;
    }
    return deck;
}


function dealShuffledCards() {
   for (let i =0; i < imgArr.length; i++) {

        let card = deckCopy.pop(); 
        console.log(card);
        
       imgArr[i].src = `images/${card}.png`;

        //when there are two cards left then bring the deckCopy
        if (deckCopy.length == 2 ) {
            //if we run out of cards, call the shuffleDeck to suffle deck again
            deckCopy = shuffleDeck([...deck]);
        }
   } 
   return deckCopy;
}

