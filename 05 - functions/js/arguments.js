function logHi(fNamn, eNamn){
    console.log( `Hi, ${fNamn} ${eNamn}`);
    console.log('fNamn', fNamn);
    console.log('eNamn', eNamn);
}

logHi('Filip', 'Leivas');
logHi('Nick', 'Cage');


// Lägg till en parameter som ska användas till elementets innerText 

function createElement(typeOfEl, text, color = 'hotpink'){
    const el = document.createElement(typeOfEl);
    document.body.appendChild(el);

    el.innerText = text;
    el.style.color = color;
}

createElement('h1', 'Hej!');
createElement('p', 'Lorem ipsum', 'skyblue');
// createElement();

// createElement('green', 'h1', 'TEXT')

// const typeOfEl = 'h1';
// const text = 'Hej!'

// const el = document.createElement(typeOfEl);
// document.body.appendChild(el);

// el.innerText = text;

function logSum(x, y){
    if(typeof x == 'number' && typeof y == 'number'){
        console.log(x+y);
    }
    else{
        console.log('NaN');
    }
}

logSum('Test', 50);
logSum(33, 76);

console.log(typeof true)


function logAllArgs(){
    console.log(arguments);

    for(const arg of arguments){
        console.log(arg);
    }
}

logAllArgs(4, 346, 3, 756, 324);
logAllArgs('text', true, 34)

//definiera en funktion utan paramterar
// anropa den med så många argument du vill
// Varje argument ska vara ett html-element
// för varje argument ska ett html-element skapas med innerText "Element nummer "+indexNUmret i argumnets


function createEls(){
    console.log(arguments);

    for(let i=0; i<arguments.length; i++){
        console.log(arguments[i]);
        const el = document.createElement(arguments[i]);
        document.body.appendChild(el);

        el.innerText = 'Element nummer ' + i;
    }
}

createEls('h1', 'p', 'h2', 'p', 'p', 'h1');