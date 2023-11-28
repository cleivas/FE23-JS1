const jsonString = `{"name":"John", "age":30, "car":null}`;

console.log(jsonString);
console.log( typeof jsonString);
console.log( jsonString.age );

const obj = JSON.parse( jsonString );

console.log(obj);
console.log( typeof obj);
console.log( obj.age )