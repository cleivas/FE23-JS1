const div = document.querySelector('div');
const h2Els = document.querySelectorAll('h2');
console.log(h2Els)

let skyblueCount = 0;
let orangeCount = 0;
let hotpinkCount = 0;

// let counters = [0, 0, 0];


div.addEventListener('click', (event) =>{
    console.log(event.target.tagName);
    
    if(event.target.tagName === 'BUTTON'){
        const color = event.target.innerText;
        // console.log('KNAPP');
        div.style.backgroundColor = color;

        if(color == 'Skyblue'){
            skyblueCount++;
            h2Els[0].innerText = 'Skyblue: ' + skyblueCount;
            // console.log('skyblue', skyblueCount)
        }
        else if(color == 'Orange'){
            orangeCount++;
            h2Els[1].innerText = 'Orange: ' + orangeCount;
            // console.log('orange', orangeCount)
        }
        else if(color == 'Hotpink'){
            hotpinkCount++;
            h2Els[2].innerText = 'Hotpink: ' + hotpinkCount;
            // console.log('hotpink', hotpinkCount)
        }
    }

})
