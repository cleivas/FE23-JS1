const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];

for(const suit of suits){
    
    chars.forEach( (char, value)=>{ //value är indexnumret
        deck.push({suit, char, value})
    } )
}
console.log('Original deck: ', deck);

const shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);

console.log( _.random(10, 13))
const randomI1 = _.random(shuffledDeck.length);
console.log(randomI1);

console.log( shuffledDeck[randomI1] );


const hand = _.sample(shuffledDeck, 2);
console.log(hand)
console.log(shuffledDeck)