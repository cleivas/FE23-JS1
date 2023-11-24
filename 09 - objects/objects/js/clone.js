// primitive
let a = 0;
let b = a;
b = 10;
console.log( a, b);

// non primitive
let c = {p: 0};
let d = c;
d.p = 10;
console.log(c.p, d.p);

// Ett sätt att klona ett objekt
let e = {};
Object.assign(e, c);

e.p = 99;
console.log(e, c);