let count = 0;
const btn = document.querySelector('#firstButton');

btn.addEventListener('click', firstResponse );

function firstResponse(event){
    count++;
    console.log(count);
    addPElement(count);
    // console.log(event);
}


function addPElement(text){
    const containerDiv = document.querySelector('#pContainer');
    const pEl = document.createElement('p');
    pEl.innerText = text;
    containerDiv.prepend(pEl);
}