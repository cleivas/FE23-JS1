const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const chars = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Kn', 'Q', 'K', 'A'];
const deck = [];

for(const suit of suits){
    
    chars.forEach( (char, value)=>{ //value är indexnumret
        deck.push({suit, char, value})
        // const card = {
        //     suit: suit,
        //     char: char,
        //     value: value
        // } 
        // deck.push(card);
        // console.log(card);
    } )
}
console.log('Original deck: ', deck);

function shuffleDeck(deckPar){
    const shuffledDeck = [];
    while(deckPar.length>0){
        const card = deckPar.splice(Math.floor(Math.random()*deckPar.length), 1);
        shuffledDeck.push(card[0]);
    }
    return shuffledDeck;
}

const shuffledDeck = shuffleDeck(deck);
console.log('Shuffled deck: ', shuffledDeck);


function drawTwoCards(deckPar){
    // console.log(deckPar.length);

    const randomIndex1 =  Math.floor(Math.random()*deckPar.length);
    const card1 = deckPar.splice(  randomIndex1, 1);
    // console.log(randomIndex1, card1[0]);

    const randomIndex2 =  Math.floor(Math.random()*deckPar.length);
    const card2 = deckPar.splice( randomIndex2, 1);
    // console.log(randomIndex2, card2[0]);

    // console.log(deckPar.length);

    return [card1[0], card2[0]];
}

const hand = drawTwoCards(shuffledDeck);
console.log('Hand:', hand);


function getHighestOfTwoCards(cards){
    if(cards[0].value>cards[1].value){
        return cards[0]
    }
    else if(cards[1].value>cards[0].value){
        return cards[1]
    }
}

const highestCard = getHighestOfTwoCards(hand);
console.log('Highest card: ', highestCard);


