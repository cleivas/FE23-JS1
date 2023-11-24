const student = {
    stressLevel: 6,
    name: 'Yasir Kakar',
    subjects: ['js', 'konsultrollen', 'html'],
    adress: {
        street: 'Paradisvägen 15',
        zipCode: 66666
    },
    code(){
        console.log('Jag har så kul för jag kodar JS!');
    }
}

console.log( student )
console.log( student.stressLevel );
console.log( student.name );
student.code();
console.log( student.subjects[1] )
console.log( student.adress.street )


// function test(){
//     console.log('test')
// }
// console.log(test)
// test();
