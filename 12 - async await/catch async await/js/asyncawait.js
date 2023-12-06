async function fetchRandomDogImage() {
    const url = `https://dog.ceo/api/breeds/image/random`;

    // try{
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    return data.message;
    // }
    // catch (error){
    // displayError(error);
    // }

    // displayDogImage(data.message)
}

function displayDogImage(imgUrl) {
    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.append(img);
}
function displayError(e) {
    const h1 = document.createElement('h1');
    h1.innerText = e;
    document.body.append(h1);
}

console.log('överst i koden');

// console.log( fetchRandomDogImage() );
fetchRandomDogImage()
    .then(displayDogImage)
    .catch( displayError )

console.log('Sist i koden');

