const arr = [4, 23, 65, 23, 1, 2, 88, 54, 103, 23, 53, 65, 2, 54, 33, 24, 100];

// arr.forEach((el, i, array)=>{
//     console.log(el, array[i]);

//     // el[0] = el[0]*2;
//     array[i] = el*2;
// })

console.log(arr)

// arr.forEach((el, i, array)=>{
//     console.log(el, !(el%2));
//     // array[i] = el%2 === 0;
//     // array[i] = !(el%2);
// })

// console.log(arr)

// console.log( !0 )

// if(!0){
//     console.log('test')
// }

const newArr = arr.map(el=>el*2)

// function(el){
//     return el*2;
// }

console.log(arr, newArr)