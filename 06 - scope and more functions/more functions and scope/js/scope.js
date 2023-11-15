{
    let x = 10;
    var y = 100;
}

// console.log(x);
console.log(y);

let globalScope = 'global';

function myFunc(par1){
    const myFuncVariable = 'myFunc';

    globalScope = par1;
}

myFunc('yassir');

console.log( globalScope );


const outerInner = 'outer';

function outIn(){
    const outerInner = 'inner';
    console.log(outerInner);
}

outIn();

// console.log( outerInner )

// let count = 0;
function counter(){
    var count = 0;
    count++;

    console.log(count);
}

counter();
counter();
counter();
counter();

// error
// console.log(variabel)

// const variabel = 10;

// funktion();

// getWeather();
// displayWeather();



// function funktion(){
//     console.log('i funktionen funktion');
// }

// getHalf(10);


