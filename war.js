// need a class for card that has the value, suit, and rank of cards
class Card {
    constructor(suit, faceValue , rank) {
        this.suit = suit; 
        this.faceValue = faceValue;
        this.rank = rank;
    }
}
//create a deck 
class Deck {
    constructor() {
    this.cards = []; //cards array
}
//creating suits and ranks for the deck 
    createDeck() {
        let suits = ['♠', '♥', '♣', '♦']; //fancy suits shout out to Chris
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(let i = 0; i < suits.length; i++ )  {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));

            }
        }
    }
        get deckSize() { 
            return this.cards.length
        }
    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i <  this.deckSize; i++) {
            location1 = Math.floor((Math.random() * this.deckSize));
            location2 = Math.floor((Math.random() * this.deckSize));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }

    }
}
class Player{
    constructor(name) {
        this.playerName = name;
        this.playerCards = [];
        this.points = 0;
        
    }
}
class Game {
    constructor() {
        this.war = [];
        this.players =[];
    }
    

start() {
    console.log(`I declare War!!!!!!
    `);
    // this.players.push( new Player(playerOne));
    // this.players.push(new Player(playerTwo));
    let d = new Deck();
    d.createDeck();
    d.shuffleDeck();
    playerOne.playerCards.push(...d.cards.slice(0, 26)); //spread the array with ... makes 1 array of 26
    playerTwo.playerCards.push(...d.cards.slice(26, 52));
// console.log(this.players[0].playerCards[0]);
// console.log(this.players[1].playerCards[0]);
// console.log(d); See if we had a successful deck
}
}
let playerOne = new Player('Ray');
let playerTwo = new Player('Yani');
let war = new Game();
war.start(); //starts game of War
// console.log(playerOne.playerCards) //shows me the deck of cards that player one has
// console.log(playerOne.playerCards[2].rank); //testing to see if I can target the rank of cards
for (let i =0; i < 26; i++) {
    let playerOneCard =  (`${playerOne.playerCards[i].faceValue} of ${playerOne.playerCards[i].suit}`)
    let playerTwoCard =  (`${playerTwo.playerCards[i].faceValue} of ${playerTwo.playerCards[i].suit}`)
    console.log(`${playerOne.playerName} flips over ${playerOneCard}`);
    console.log(`${playerTwo.playerName} flips over ${playerTwoCard}`);
   if  (playerOne.playerCards[i].rank > playerTwo.playerCards[i].rank) {
    playerOne.points ++ 
    } else if (playerTwo.playerCards[i].rank > playerOne.playerCards[i].rank) {
    playerTwo.points ++
    } else {
    console.log('Tie Hand'); //tie hand
    }
    console.log(`${playerOne.playerName} scores ${playerOne.points}`); //Gives me player 1 points total
    console.log(`${playerTwo.playerName} scores ${playerTwo.points}`); // gives me player 2 points total
    
}

if (playerOne.points > playerTwo.points) {
    console.log(`${playerOne.playerName} wins`);
    } else if (playerTwo.points > playerOne.points) {
        console.log(`${playerTwo.playerName} is the winner`);
    } else {
        console.log('Its a tie play another game');
    }



