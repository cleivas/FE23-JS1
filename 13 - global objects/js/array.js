const arr = [43, 46 ,23, 45, 4, 7, 96, 3, -10, 'clara', false];
console.log(arr.length);


const arr2 = [];
console.log(arr2);

arr2.push('nytt element');
arr2.push(5);
console.log(arr2);

arr2.push('tobbe', 88);
console.log(arr2);

const lastElement = arr2.pop();
console.log(lastElement, arr2);

// Byter ut 5 mot amanda
const removedElement = arr2.splice(1, 1, 'amanda');
console.log(removedElement, arr2);

console.log(arr)
arr.forEach( (element, index ,array)=>{
    console.log(element, index, array);

    const p = document.createElement('p');
    p.innerText = element;
    document.body.append(p);
})

function createP(e, i, a){
    console.log(e, i, a);

    const p = document.createElement('p');
    p.innerText = e;
    document.body.append(p);
}
arr.forEach( createP );

for(const element of arr){
    console.log(element)
}

// Från arr vill vi hämta alla numemr som är mer än 20
console.log(arr)

const newArr = arr.filter(function(element){
    console.log(element, element>20)
    return element>20;
})
console.log(newArr)