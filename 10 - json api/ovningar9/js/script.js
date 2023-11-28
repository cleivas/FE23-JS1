const car = {
    make: 'Volvo',
    model: 'V70',
    year: 2010,
    speed: 0,
    arr: [3, 52, 34, 64, 32, 543],
    logInfo(){
        console.log(this.make, this.model, this.year);
    },
    increaseSpeed(targetSpeed){
        for(this.speed; this.speed<targetSpeed; this.speed+=5 ){
            // this.speed+=5;
            console.log(this.speed);
        }
    },
    brake(){
        for(this.speed; this.speed>0; this.speed-=10){
            console.log(this.speed);
        }

        if(this.speed<0) this.speed = 0;
    }
}

console.log( car );

car.logInfo();

car.increaseSpeed(105);
console.log(car.speed);

car.brake();
console.log(car.speed);


// let newCar = {};
// Object.assign(newCar, car);
// newCar.make = 'Toyota';
// console.log(newCar);
// newCar.logInfo();

const car2 = {
    make: 'Toyota',
    model: 'Corolla',
    year: 1999,
    arr: [1, 2, 3]
}
const car3 = {
    make: 'Saab',
    model: '95',
    year: 2007,
    arr: [4, 5, 6, 7],
}


function displayCar(carObj){
    const containerEl = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');

    h1.innerText = carObj.make;
    h2.innerText = carObj.model;
    h3.innerText = carObj.year;

    // Skapa en lista där varje punkt är ett nummer ur arrayen arr
    const ul = document.createElement('ul');
    for(let i=0; i<carObj.arr.length; i++){
        const li = document.createElement('li');
        li.innerText = carObj.arr[i];
        ul.append(li);
    }

    containerEl.append(h1, h2, h3, ul);
    document.body.append(containerEl);
}
displayCar(car);
displayCar(car2);
displayCar(car3);