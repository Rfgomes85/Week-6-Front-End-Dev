// need a class for card that has the value, suit, and rank of cards
class Card {
    constructor(faceValue, suit, rank) {
        this.faceValue = faceValue;
        this.suit = suit;
        this.rank = rank;
    }
}
//create a deck 
class Deck {
    constructor() {
    this.cards = [];
}
//creating suits and ranks for the deck 
    createDeck() {
        let suits = [':spades:', ':hearts:', ':clubs:', ':diamonds:'];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        for(let i = 0; i < suits.length; i++ ) {
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i <  51; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
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
        
    }
}
class Game {
    constructor() {
        this.war = [];
        this.players =[];
    }

start(playerOne, playerTwo) {
    this.players.push( new Player(playerOne));
    this.players.push(new Player(playerTwo));
    let d = new Deck();
    d.createDeck();
    d.shuffleDeck();
    this.players[0].playerCards = d.cards.slice(0, 26);
    this.players[1].playerCards = d.cards.slice(26, 52);
}
}
let war = new Game();
war.start('Ray', 'Yani');
console.log(war.players);


