function getHighest(x, y){
    // if(x>y) return x;
    // else if(y>x) return y;
    return x>y ? x:y;
}

function getLowest(x, y){
    return x<y ? x : y;
}

// console.log( getHighest(3, 39));
// console.log( getLowest(300, 39));

function mapArray(arr, callback){
    let num = arr[0];

    for(let i=0; i<arr.length-1; i++){
        num = callback(num, arr[i+1]);
    }
    return num;
}

const numArr = [23, 53, 12, 75, 3, 86, 343, 3];

const resultHighest = mapArray(numArr, getHighest);
const resultLowest = mapArray(numArr, getLowest);

console.log(resultHighest, resultLowest);

// Från övningar 5 - return i konsolen #6
// function getLowestArg(){
//     let low = arguments[0];

//     for(const arg of arguments){
//         if(arg<low) low = arg;
//     }

//     return low;
// }

// const res = getLowestArg(40000, 60000, 2000, 3000, 65436, 32000, 6000);

// console.log('result', res);