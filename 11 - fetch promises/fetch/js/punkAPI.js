const punkAPIUrl = `https://api.punkapi.com/v2/beers/random`;

fetch(punkAPIUrl)
    .then( res => res.json() )
    .then( beerArr =>{
        console.log( beerArr[0] );

        displayBeer(beerArr[0]);
    })


function displayBeer(beer){
    console.log(beer.description);
    console.log(beer.food_pairing);

    const descriptionEl = document.createElement('p');
    descriptionEl.innerText = beer.description;

    const ulEl = document.createElement('ul');
    for(const pairing of beer.food_pairing){
        const liEl = document.createElement('li');
        liEl.innerText = pairing;
        ulEl.append(liEl);
    }
    document.body.append(descriptionEl, ulEl);
}