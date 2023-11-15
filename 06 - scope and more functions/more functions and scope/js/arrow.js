// function getSquare(x){
//     return x*x;
// }

// const getSquare = function(x){
//     return x*x;
// }

// const getSquare = (x) => {
//     return x*x;
// }

// const getSquare = x => {
//     return x*x;
// }

const getSquare = (x) => x * x;
console.log(getSquare(4));

// function addH1(text, color){
//     const h1 = document.createElement('h1');
//     h1.innerText = text;
//     h1.style.color = color;

//     document.body.append(h1);
// }

const addH1 = (text, color) => {
  const h1 = document.createElement("h1");
  h1.innerText = text;
  h1.style.color = color;

  document.body.append(h1);
};

addH1("Apa", "brown");


// Higher Order
const mapArray = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    array[i] = func(array[i]);
  }
};

const getHalf = (x) => x / 2;

const numberArr = [4, 2, 35, 253, 3, 54, 8, 8];

mapArray(numberArr, getHalf);
console.log(numberArr);

// const timesTen = x=>x*10;

mapArray(numberArr, x=>x*10);
console.log(numberArr);



