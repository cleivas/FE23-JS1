const bilar = ['saab', 'toyota', 'volvo', 'audi', 'jeep', 'bmw'];

console.log(bilar);
console.log(bilar[3]);
console.log( bilar.length)

// const length = bilar.length;
for(let i = 0; i<bilar.length; i++){
    console.log( bilar[i] )
}

// Skapa ett h2-element för varje bil i arrayen
// InnerText ska vara bilmärket
// Toyota ska ha bakgrundsfärgen champange 
// jeep ska ha bakgrundsfärgen militärgrön
// Var tredje bil ska ha en valfri border

for(let i = 0; i<bilar.length; i++){
    const h2El = document.createElement('h2');
    document.body.appendChild(h2El);

    h2El.innerText = bilar[i];
    
    let color = 'lightblue';

    if(bilar[i] == 'toyota'){
        color = 'hsl(37, 72%, 89%)';
    }
    else if(bilar[i] == 'jeep'){
        color = 'hsl(68, 74%, 20%)';
    }

    h2El.style.backgroundColor = color;

    if(i%3 == 2){
        h2El.style.border = '2px dashed orange';
    }
}