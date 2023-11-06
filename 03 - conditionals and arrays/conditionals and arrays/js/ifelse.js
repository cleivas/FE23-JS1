const x = 70;
const y = 100;

// if(x == 50){
//     console.log('x är lika med 50');
// }
// else {
//     console.log('inget var sant');
// }

// if(y == 100){
//     console.log('y är lika med 100');
// }
// else {
//     console.log('inget var sant');
// }

// if(x == 70 && y == 100){
//     console.log('Allt var sant');
// }

if(x == 70 ){
    console.log('första är sant')
    if(y==100){
        console.log('Allt var sant');
    }   
}

// skapa 10 h1-element
// Där första, tredje och femte har hotpink som bakgrundsfärg
// andra, sjätte, åttonde har skyblu2
// resten har orange

for( let i=0; i<100; i++){
    // let i = 5;
    const h1 = document.createElement('h1');
    document.body.append(h1);
    h1.innerText = i+1;

    if(i==0 || i==2 || i==4){
        h1.style.backgroundColor = 'hotpink';
    }
    else if(i==1 || i==5 || i==7){
        h1.style.backgroundColor = 'skyblue';
    }
    else{
        h1.style.backgroundColor = 'orange';
    }

    // modulus %
    console.log( i, i % 3);
    // Händer varannan gång eftersom resten av i%2 endast kan vara 1 eller 0
    if(i%2 == 0){
        h1.style.color = 'white';
    }

}