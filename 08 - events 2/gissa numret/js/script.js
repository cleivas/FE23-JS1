let randomNumber = Math.floor( Math.random()*101 ) ;
let numberOfGuesses = 0;

// console.log(randomNumber);

const formEl = document.querySelector('form');
formEl.addEventListener('submit', (event)=>{
    const messageEl = document.querySelector('h2');

    event.preventDefault();
    numberOfGuesses++;

    const guess = formEl.querySelector('input').value;

    if(guess == randomNumber){
        messageEl.innerText = `Du gissade rätt! Det tog dig ${numberOfGuesses} gissningar.`;
        resetGame();
    }
    else if(guess < randomNumber){
        messageEl.innerText = 'Du gissade för lågt';
    }
    else if(guess > randomNumber){
        messageEl.innerText = 'Du gissade för högt';
    }

    formEl.reset();
})

function resetGame(){
    randomNumber = Math.floor( Math.random()*101 ) ;
    numberOfGuesses = 0;
    // console.log(randomNumber);
}