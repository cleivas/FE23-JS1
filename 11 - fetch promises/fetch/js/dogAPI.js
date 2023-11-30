const dogAPIUrl = `https://dog.ceo/api/breed/dalmatian/images/random`;

fetch(dogAPIUrl)
  .then(function (response) {
    // console.log(response);
    return response.json();
  })
  .then( displayDogImage );

function displayDogImage(dogInfo) {
//   console.log(dogInfo);

  const imgEl = document.createElement('img');
  imgEl.src = dogInfo.message;
  document.body.append(imgEl);
}


// document.querySelector('button').addEventListener('click', logEvent );

// function logEvent(event){
//     console.log(event);
// }



// 10 pomeranians
const pomeranianUrl = `https://dog.ceo/api/breed/pomeranian/images/random/10`;


fetch(pomeranianUrl) //returnerar ett promise
    .then( //när promiset är resolved anropas callbackfuntionen
        // response innehåller ett Responseobjekt
        // Det innehåller json-datan från API:et, men vi kan inte se det
        // response innehåller metoden json, som tar json-datan och gör om den till JS-objekt
        // json() returnerar ett promise
        response => response.json() 
        )
    .then( //när json-promiset är resolver anropas nästa callbackfunktion

        // doginfo innehåller JS-objekt som beror på API:et. JSON-datan omgjord till JS-objekt
        dogInfo =>{
        console.log(dogInfo.message)

        for(const dogImgUrl of dogInfo.message){
            const imgEl = document.createElement('img');
            imgEl.src = dogImgUrl;
            document.body.append(imgEl);
        }
    })
    