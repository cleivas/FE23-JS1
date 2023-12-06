// async function fetchRandomDogImage() {
//     const url = `https://dog.ceo/api/breeds/image/random`;

//     // try{
//     const response = await fetch(url);
//     console.log(response);

//     const data = await response.json();
//     console.log(data);
//     return data.message;
//     // }
//     // catch (error){
//     // displayError(error);
//     // }

//     // displayDogImage(data.message)
// }

// function displayDogImage(imgUrl) {
//     const img = document.createElement('img');
//     img.src = imgUrl;
//     document.body.append(img);
// }
// function displayError(e) {
//     const h1 = document.createElement('h1');
//     h1.innerText = e;
//     document.body.append(h1);
// }

// console.log('överst i koden');

// // console.log( fetchRandomDogImage() );
// fetchRandomDogImage()
//     .then(displayDogImage)
//     .catch( displayError )

// console.log('Sist i koden');


// Med catch i slutet på promisekedjan
async function fetchRandomDogImage() {
    //const url = `https://dog.ceo/api/breeds/image/random`; //Fungerar
    //const url = `https://dog.ceo/api/breeds/im/random`; //Ger statuskod 404 men alla promises blir fulfilled
    const url = `https://og.ceo/api/breeds/image/random`; //Promiset från fetch blir rejected

    const response = await fetch(url);
    console.log(response);

    if(response.ok){ //om allt är okej
        const data = await response.json();
        console.log(data);
        return data.message;
    }
    else if(response.status === 404){ //om statuskoden är 404
        throw 404
    }

}

function displayDogImage(imgUrl) {
    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.append(img);
}
function displayError(error) {
    const h1 = document.createElement('h1');

    if(error === 404){ //Vid Errormeddelandet som vi har definierat
        h1.innerText = 'Ingen bild kunde hittas';
    }
    else{ //Vid alla andra error 
        h1.innerText = 'Någonting gick fel... försök igen senare'
    }
    document.body.append(h1);
}

console.log('Innan fetchRandomDogImage');

fetchRandomDogImage()
    .then( displayDogImage )
    .catch( displayError )

console.log('Sist i koden');


