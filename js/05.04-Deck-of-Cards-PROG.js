// nested loop to make a deck of playing cards

// Next, we will use a nested loop to make a standard deck of 52 playing cards. Each card has two identifiers: a **kind** and a **suit**. We start with these as arrays of strings. We also need a new empty array to save the cards to.

const kinds = ['2','3','4','5','6','7','8','9','10','Jack','Queen','King', 'Ace'];
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];
const deck = []; // a new array to save the cards to

// Set up the nested loop, where the outer loop iterates over the **kinds** array, and the inner loop iterates **suits**:

// The outer loop runs 13 times, and the inner loop runs 4 times, for a total of 52 iterations (one for each card). Inside the inner loop, concatenate the card name, and push it into the deck. After the loop ends, log the deck to see what we get.

// deck of cards as an array of objects


// Declare a new, empty array to hold our 52 card objects.


//8. Set up the nested loop;
for (let k = 0; k < kinds.length; k++) {
    for (let s = 0; s < suits.length; s++) {
        //concat the card file name and push the result in the dec
        //to get the images because the images are this.png
        deck.push(`${kinds[k]}-of-${suits[s]}`)
    }
}
// console.log(deck);
            
            // Simplify the current array items by passing them to vars:
 
            
            // Concatenate the name of the card and similarly named image file. The file name of the Queen of Diamonds is Queen-of-Diamonds.png.
    
            
            // Declare a variable, **valu**, with an initial value of 0. This is for storing the value of each card, from 1-11 (for blackjack):
            
            // Run an if-else-if-else block to set **valu** based on what kind of card it is. In blackjack, Aces have a starting value of 11 and the other cards equal their respective numbers.
                // Ace starts out with value of 11
                // "Jack", "Queen", "King"
                // all face cards have a value of 10
                // it's a number card: 2-10
                // string to number
            
            
            // Declare an object called **card** and assign it properties from the variables we have made. Finally, push the card object into the **deckOfCards** array:


// That completes the making of the deck of cards. Below the nested loop, output the deckOfCards, which is an array of 52 objects, each with five properties: name, file, kind, suit and valu.


// Ouputting cards to the DOM

// Let's deal a hand of 5-card poker. This will be the simplest implementation possible, meaning that there will only be one player hand dealt and all five cards will appear at once, without the benefit of a realistic-looking time delay between cards.

// Clicking the DEAL CARDS button will run a function which will rim a loop that chooses cards at random from the deck. The **file** property will be used to set the source of the image tags.

// Before we write the JS, have a look at the HTML:
/*
    <div id="card-box">
        <img src="../../images/cards350px/10-of-Diamonds.png">
        <img src="../../images/cards350px/Jack-of-Diamonds.png">
        <img src="../../images/cards350px/Queen-of-Diamonds.png">
        <img src="../../images/cards350px/King-of-Diamonds.png">
        <img src="../../images/cards350px/Ace-of-Diamonds.png">
*/

// We need a function that changes the source of these these five images files to randomly chosen cards.

//20. Get the DEAL CARDS button and tell it to run a function when clicked:
const btn = document.querySelector('button');
//btn.addEventListener('click', dealCards);
btn.addEventListener('click', dealShuffledCards)
//get the 5 imges from the cards-box
const imgArr = document.querySelectorAll('#card-box img'); //getting the class #card-box == id
// console.log(imgArr, typeof(imgArr));

//remove the html tags
const cardBox = document.getElementById('card-box');

//make a copy so tha when it's spliced out/cut out, we have a new copy
// let deckCopy = [...deck]; //works
let deckCopy = deck.slice(0);
//22. Now for the function, which loops through the array of images:
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

        // With each iteration of the loop we need to generate a random number in the range of the deck:

        // Next, choose that random card from the deck. All we need is the file property, which is the file name:

        // Set the source of the current image from 

        // To prevent the same card being dealt twice in the same hand, remove the dealt card from the deck with splice:

//redo the deck as 52 objects rather than just 52 strings
const deckOfCards = [];

for (let k = 0; k < kinds.length; k++) {
    for (let s = 0; s < suits.length; s++) {
        // all 52, make a card object
        let kind = kinds[k];
        let suit = suits[s];
        let name = `${kinds[k]} of ${suits[s]}`;
        let file = `${kinds[k]}-of-${suits[s]}.png`;
        let value = 0; //= Number(kind); //Number('King') == NaN cause its not a nun
        if (kind == 'Ace') {
            value = 11;
        }else if(kind.length>3){
            value = 10
        }else{
            value = Number(kind);
        }

        let card = {
            kind:kind, suit:suit, name:name, file:file,value:value
        }
        deckOfCards.push(card);
    }
}
// console.log('deckOfCards: ', deckOfCards);




//shuffle cards so we won't need a random number 

//loop through the deck
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
shuffleDeck(deckCopy);
//shuffled? yes!
// console.log('fisher-yates shuffle deck: ', deckCopy);




//works
function dealShuffledCards() {
   //cardBox.innerHTML= "";
   for (let i =0; i < imgArr.length; i++) {
    //console.log(deckCopy.pop());
        let card = deckCopy.pop(); //pop a card off, give it out
        //console.log(card);
        //card += cardBox.innerHTML;
        //cardBox.innerHTML += `<img src="images/${card}.png">`;
       imgArr[i].src = `images/${card}.png`;
       //console.log(`images/ ${card.file}`);

        //when there are two cards left then bring the deckCopy
        if (deckCopy.length == 2) {
            //if we run out of cards, call the shuffleDeck to suffle it again
            deckCopy = shuffleDeck[card];
        }
   } 
   return deckCopy; //cardBox;
}