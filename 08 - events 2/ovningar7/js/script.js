const h1El = document.querySelector('h1');
const pEl = document.querySelector('p');
const btn = document.querySelector('button');

// let count = 0;

h1El.addEventListener('click', ()=>{
    changeH2Text('H1');
})

pEl.addEventListener('click', ()=>{
    changeH2Text('P');
} )

btn.addEventListener('click', ()=>{
    changeH2Text('KNAPP');
})

// function firstResponse(event){
//     // count++;
//     console.log('h1', count);
//     h2El.innerText = 'Du klickade på H1';
// }

// function addElement(myEvent){
//     const myNewElement = document.querySelector('h2');
//     myNewElement.innerText = 'Du klickade på' + myEvent.currentTarget.tagName;
//     if(myEvent.currentTarget.tagName == 'BUTTON'){
//         myNewElement.innerText = 'Du klickade på' + myEvent.currentTarget.tagName;
//     }
// }

function changeH2Text(elementString){
    const h2El = document.querySelector('h2');
    h2El.innerText = 'Du klickade på ' + elementString;
}