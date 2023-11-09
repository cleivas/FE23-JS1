const names = ['Clara', 'Yasir', 'Thien', 'Ton', 'Johanna', 'Kristoffer'];
const iNames = ['Yasir', 'Kristoffer'];

for(const name of names){
    // console.log(name);

    for(const iName of iNames){
        if(iName === name){
            // console.log(name, 'IMPORTANT')
        }
    }
}


// console.log( Math.random() );

let randomNumber = Math.random();

// while(randomNumber>0.2){
//     console.log(randomNumber);
//     randomNumber = Math.random();
// }

// while(true){
//     const rand = Math.random();
//     console.log('rand', rand)
//     if(rand < 0.1){
//         break;
//     }
// }

// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }
// console.log(i);
// i = 0;

const firstName = 'Clara';

switch(firstName){
    case 'Clara':
        console.log('Du heter Clara');
        // break;
    case 'Filippa':
        console.log('Du heter Filippa');
        break;
    default:
        console.log('Vem heter vadå?');
}

const error = 404;

const PAGE_NOT_FOUND = 404;
const SERVER_DOWN = 500;

switch(error){

    case PAGE_NOT_FOUND:
        console.log('Page not found');
        break;

    case SERVER_DOWN:
        console.log('Server down');
        break;
}

// if(error === PAGE_NOT_FOUND){

// }

const num = 10;

const highLow = num > 50 ? 'HIGH' : 'LOW';
console.log(highLow);