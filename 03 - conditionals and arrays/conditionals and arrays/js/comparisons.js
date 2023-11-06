let x = 5;
let y = 10;

console.log( x == y );
console.log( x != y);
console.log( x < y);
console.log( x > y);


console.log('---------------')
x = '10';
console.log(x == y);
console.log(x === y);

console.log('---------------')
x = 10;
console.log( x < y);
console.log( x <= y);


console.log('LOGICAL OPERATORS');
x = 100;
y = 150;
let z = 200;

console.log( x == 100 && y == 100);
console.log( x == 100 || y == 100);
console.log( !(x == 100) );

console.log( (x == 100 && y == 150) || z == 150);


let isCorrect = false;
isCorrect = !isCorrect;