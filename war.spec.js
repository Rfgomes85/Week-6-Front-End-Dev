const expect = chai.expect;

describe('Deck', ()=>{
    it('should create a Deck of 52 cards', () =>{
        const warGame = new Deck();
        warGame.createDeck();
        expect(warGame.cards.length).to.eql(52);
       console.log('warGame.deck', warGame.cards.length);
        })

}) 