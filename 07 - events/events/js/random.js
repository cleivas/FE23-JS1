const randomNumber = Math.random();
console.log(randomNumber);

const rand50 = randomNumber*50;
console.log(rand50);

const roundedRand = Math.round( rand50 );
console.log(roundedRand);


const random100 = Math.round( Math.random() * 100 );
console.log(random100);

const names = ['Benjamin', 'Jesper', 'Erika', 'Felix', 'Melker'];

// const randomNameIndex = Math.floor( Math.random()*names.length );
const randomNameIndex = Math.round( Math.random()*(names.length-1) );
console.log('index', randomNameIndex);

console.log( names[randomNameIndex] );


console.log(Math.round( Math.random() * 3 ));



// Random från 1000 till 2000

const r1000 = 1000 + Math.round( Math.random()*1000 );
console.log(r1000);







