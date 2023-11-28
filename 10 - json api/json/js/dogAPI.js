const dogJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/beagle\/n02088364_10575.jpg","status":"success"}`;

const pomJson = `{"message":"https:\/\/images.dog.ceo\/breeds\/pomeranian\/n02112018_2277.jpg","status":"success"}`;


const dogObj = JSON.parse(dogJson);
const pomObj = JSON.parse(pomJson);
console.log(dogObj);

function displayDog(dog){
    const imgEl = document.createElement('img');
    imgEl.src = dog.message;
    document.body.append(imgEl);
}

displayDog(pomObj);
displayDog(dogObj);