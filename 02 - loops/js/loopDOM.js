// Skapa en ordered list med 10 punkter

const olEl = document.createElement('ol');
document.body.appendChild(olEl);

for(let i=0; i<10; i++){
    const liEl = document.createElement('li');
    olEl.appendChild(liEl);
    liEl.innerText = 'Abdulla testar'
}

const allLi = document.querySelectorAll('li');
console.log(allLi);
// allLi[0].style.backgroundColor = 'skyblue';
// allLi[1].style.backgroundColor = 'skyblue';
// allLi[2].style.backgroundColor = 'skyblue';

for(let i=0; i<10; i++){
    allLi[i].style.backgroundColor = 'skyblue';
}