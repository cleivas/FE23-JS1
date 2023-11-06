// for-loop, DOM #3
const typeOfElement = 'h1';
const amount = 20;

for( let i = 0; i<amount; i++){
    const h1 = document.createElement(typeOfElement);

    document.body.appendChild(h1);
    h1.innerText = i+1;

    // När i är 0 ska lightness vara 100
    // När i är 20 ska lightness vara 0

    const lightness = 100 - i*100/(amount-1);
    console.log(lightness)

    h1.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
}

const allH1 = document.querySelectorAll(typeOfElement);
console.log(allH1);

for(let i = 0; i<amount; i++){
    const lightness = i*100/(amount-1);
    allH1[i].style.color = `hsl(0, 0%, ${lightness}%)`
}

// Utmaningar #1 - ska fem listor med tre punkter vardera

for(let i = 0; i<5; i++){
    const ol = document.createElement('ol');

    document.body.appendChild(ol);

    for(let i = 0; i<3; i++ ){
        const li = document.createElement('li');

        ol.appendChild(li);
        console.log(i, i);
    }
}