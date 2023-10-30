
//Hämtar och loggar det första h2 elementet
console.log( document.querySelector('h2') );

//Hämtar och loggar alla a element
console.log( document.querySelectorAll('a') );

//Hämtar och loggar det andra a-elementet
console.log( document.querySelectorAll('a')[1] );

//HÄmtar första h2
document.querySelector('h2').innerText = "FE22 for the win!";

// document.querySelector('div').innerHTML = '<h1> NYTT INNEHÅLL </h1>';

document.querySelector('article').style.backgroundColor = 'hotpink';

//hämta det tredje h2-elementet och ändra textfärgen till vad du vill
console.log( document.querySelectorAll('h2')[2] );
document.querySelectorAll('h2')[2].style.color = "red";

//Ändra texten på den andra paragrafen
document.querySelectorAll('p')[1].innerText = "Hejsan!";

document.querySelector('img').src = 'http://cageme.herokuapp.com/random';

//logga listan med klassnamn som diven har
console.log( document.querySelector('div').classList );

//Lägger till klassen red-bg på navbaren i headern
document.querySelector('#header-navigation').classList.add('red-bg');

//hämta diven och ta bort klassen wrapper
document.querySelector('div').classList.remove('wrapper');

document.querySelector('img').setAttribute('attribute-name', 'attribute-value');

document.querySelector('img').removeAttribute('attribute-name');