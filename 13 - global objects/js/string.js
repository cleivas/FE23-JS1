const name1 = 'Clara Lisa Leivas';
console.log(name1.length);
name1.length = 9; //Går inte att ändra värdet 
console.log(name1.length);

console.log(name1.charAt(5)); //Tecknet på index 5

// Byt ut alla mellanrum mot _
const underscoreName = name1.replaceAll(' ', '_');
console.log(underscoreName)

// Byta ut ett specifikt tecken i en String
// ta ut två substrings, en innan tecknet som ska bytas ut, och en efter tecknet som ska bytas ut
// Sätt ihop substringsen med det nya tecknet emellan
const sub1 = name1.substring(0, 4);
console.log(sub1);
const sub2 = name1.substring(5);
console.log(sub2);
const subFinal = sub1+'e'+sub2;
console.log(subFinal)


// C och c är inte samma tecken
console.log( name1.includes('Clara'));
console.log( name1.includes('clara'));

// Vill man jämföra Strings vill man ofta se till så att allt som jävmförs är i lowercase
const name1low = name1.toLowerCase();
const word = 'ClArA';
console.log(name1low, word.toLowerCase())
console.log(name1low.includes( word.toLowerCase() ))