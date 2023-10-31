
console.log( document.querySelector('h3') );

console.log( document.querySelectorAll('h3') );

console.log( document.querySelectorAll('h3')[1] );

// document.querySelector('h3');

document.querySelector('a').innerText = 'NY TEXT'
document.querySelectorAll('a')[1].innerText = 'Mer Text';

// document.querySelector('article').innerText = 'Ny article text';
document.querySelector('article').innerHTML = '<a href="#"> Ny article text </a>';

// document.querySelector('a').style.backgroundColor = 'hsl(0, 50%, 50%)';
document.querySelector('a').style.backgroundColor = 'hotpink';

//Hämta a-elementet med texten "contact"
// Byt text till FE23
//Byt textfärg till grön

document.querySelectorAll('a')[2].style.color = 'green';
document.querySelectorAll('a')[2].innerText = 'FE23';

document.querySelectorAll('img')[2].src = "https://cdn.mos.cms.futurecdn.net/KG7kYHyteTset4EW6MqxV-650-80.jpg";

document.querySelector('nav').classList.add('bg-red');

// document.querySelector('nav').classList.remove('bg-red');

// console.log( document.querySelector('div').classList)
// document.querySelector('div').classList = '';
// console.log( document.querySelector('div').classList)

