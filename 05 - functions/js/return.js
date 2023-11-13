function mult(x, y){
    return x*y;
}

mult(10, 7);

console.log( mult(10, 7) );

const result = mult(34, 234);
console.log(result);


function getElement(text){
    const el = document.createElement('h1');
    el.innerText = text;

    return el;
}

// document.body.appendChild( getElement('Är det lunch snart?') );
const newElement = getElement('Är det lunch snart?')
console.log(newElement);

document.body.appendChild( newElement );


function createArray(el1, el2, el3){
    return [el1, el2, el3];
}

const newArr = createArray(3, document.createElement('ol'), true);
console.log(newArr);

// EN funktion som ta emot hur många positiva nummerargument som helst och returnerar det högsta numret

function getHighestNum(){
    let highest = 0;

    for(const arg of arguments){
        if(arg > highest) highest = arg;

        console.log('arg', arg, 'highest', highest);
    }

    return highest;
}

let high = getHighestNum(0, 1, 2, 3, 4, 5);
console.log(high)

high = getHighestNum(4, 23, 543, 3, 7, 4);
console.log(high)