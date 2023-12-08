console.log(Math.PI);

const random = Math.random() * 100;
console.log(random);

const rounded = Math.round(random);
console.log('rounded:', rounded);



console.log( Math.abs( -10 ) );
console.log( Math.abs( 2.999-10 ) );

const x = 10*7-900/3;
console.log( Math.abs( x ) );


console.log('min:', Math.min(2, 5, 54, -100))
console.log('min:', Math.min())
console.log('min:', Math.min(2, 5, 'TOBBE', -100));

const arrNumbers = [56, 6, 246, 54, 3, 4];
console.log('min:', Math.min(arrNumbers))
console.log('min:', Math.min(...arrNumbers))
console.log(arrNumbers);
console.log(...arrNumbers)