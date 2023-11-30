const punkAPIUrl = `https://api.punkapi.com/v2/beers`;

// fetch( punkAPIUrl )
//     .then( response => response.json() )
//     .then( beers =>{
//         console.log(beers);
//     })


const firstPromise = fetch(punkAPIUrl);
console.log('First promise', firstPromise);

const secondPromise =  firstPromise.then( function(res){
    console.log('Response object', res);
    return res.json();
} )
console.log('Second promise', secondPromise);

secondPromise.then( beerArray =>{
    console.log('beer array', beerArray);
})


// function func(x){
//     return x*10;
// }

// const func = x => x*10;

// btn.addEventListener('click', ()=>{

// })

// JSON.parse(json);