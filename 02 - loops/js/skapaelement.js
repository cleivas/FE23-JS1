const h1El = document.createElement('h1');

console.log(h1El);

document.body.appendChild(h1El);

h1El.innerText = 'Schhhhhh'


// Skapa ett valfritt element
// Med valfri text
// lägg till till bodyn

const imgEl = document.createElement('img');
document.body.appendChild(imgEl);
imgEl.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgiffiles.alphacoders.com%2F134%2F13425.gif&f=1&nofb=1&ipt=850fe06a6fb924e8a1a5f94e14f734f9a37e162c836e350a845aded8547500f1&ipo=images';

imgEl.style.width = '50%';


// header med en nav med en länk
const headerEl = document.createElement('header');
const navEl = document.createElement('nav');
const aEl = document.createElement('a');
aEl.innerText = 'HOME';
aEl.href = '#';

document.body.appendChild(headerEl);
headerEl.appendChild(navEl);
navEl.appendChild(aEl);
// navEl.innerHTML = '<a href=#> HOME </a>'

// ta bort ett element
// h1El.remove();

// navEl.remove();
// headerEl.innerHTML = '';