// 
async function fetchRandomBeer(){

    const url = `https://api.punkapi.com/v2/beers/random`;

    const res = await fetch(url);
    const beerData = await res.json();

    // console.log( beerData )

    return beerData[0]
}


fetchRandomBeer()
    .then( displayIngredients );

function displayIngredients(beerObj){
    console.log(beerObj);

    // Namnet på yeast
    // console.log(beerObj.ingredients.yeast)
    const p = document.createElement('p');
    p.innerText = beerObj.ingredients.yeast;
    document.body.append(p)

    // Namnet på alla hops
    for(const hops of beerObj.ingredients.hops){
        // console.log(hops.name);
        const p = document.createElement('p');
        p.innerText = hops.name;
        document.body.append(p)
    }

    // namnet på alla malt
    for(const malt of beerObj.ingredients.malt){
        // console.log(malt.name);
        const p = document.createElement('p');
        p.innerText = malt.name;
        document.body.append(p)
    }

}

// Utan async await, exakt samma resultat som ovan
function fetchRandomBeer2(){
    fetch(`https://api.punkapi.com/v2/beers/random`)
    .then( res=>res.json() )
    .then(beerData =>{
        // console.log(beerData);

        displayIngredients(beerData[0]);
    })
}

fetchRandomBeer2();


