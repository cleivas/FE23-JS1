const minFunktion = function(m){
    console.log(m);
}

minFunktion('Meddelande'); //Meddelande

console.log( minFunktion );
console.log( typeof minFunktion );



function higherOrder( funk ){
    console.log('higherOrder');
    funk();
}

function logHi(){
    console.log('Hi!');
}

function logGoodbye(){
    console.log('Goodbye!');
}

higherOrder( logHi );
higherOrder( logGoodbye );


// 
const arr = [4, 5, 6, 3, 5, 753, 3, 9];
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//     arr[i] = getHalf(arr[i]);
// }
// console.log(arr);

// for(let i=0; i<arr.length; i++){
//     // arr[i] = arr[i] * arr[i];
//     arr[i] = getSquare(arr[i]);
// }
// console.log(arr);


console.log(arr);

mapArray(arr, getHalf );
console.log(arr);


const arr2 = [43, 3, 2, 6];
console.log('----------')
console.log(arr2);
mapArray(arr2, getSquare );
console.log(arr2);


function mapArray(array, func){
    for(let i=0; i<array.length; i++){
        array[i] = func( array[i] );
    }
}

function getHalf(x){
    return x/2;
}
function getSquare(x){
    return x*x;
}

