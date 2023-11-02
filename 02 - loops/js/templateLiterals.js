//Två variabler med olika datatyper
let age = 52;
const fullName = "Bob Ross";

//Så här har vi satt ihop meningar tidigare
const sentence1 = fullName + " was " + age + " years old when he passed away.";

//Så här sätter man ihop en mening med template literals
const sentence2 = `${fullName} was ${age} years old when he passed away.`
 
//Resultatet av de två olika sätten blir exakt samma
console.log(sentence1);
console.log(sentence2);

const newString = `${10*2} vsgdgh`
console.log(newString);