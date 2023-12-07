// 05 - utmaningar 1

function createH1s(amount){
    for(let i=0; i<amount; i++){
        const h1 = document.createElement('h1');
        h1.innerText = i+1;
        document.body.append(h1);

        const startHue = 240;
        const stepLength = (280-startHue)/(amount-1);
        // console.log(stepLength)
        const hue = startHue+stepLength*i;
        console.log(hue);
        h1.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
    }
}

createH1s(7)
