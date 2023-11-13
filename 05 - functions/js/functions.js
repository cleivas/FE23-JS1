function logMessage(){
    console.log('This is a message');
}

logMessage();


function createWelcomeMessage(){
    const h1El = document.createElement('h1');
    h1El.innerText = 'Welcome!';

    document.body.appendChild(h1El);
}

// createWelcomeMessage();

for(let i=0; i<10; i++){
    createWelcomeMessage();
}

console.log( logMessage ) //Loggar datan i logMessage, alltså funktionen
console.log( logMessage() )