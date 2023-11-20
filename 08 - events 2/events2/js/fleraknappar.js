const divEl = document.querySelector('div');

divEl.addEventListener('click', (event)=>{
    console.log(event.target, event.currentTarget);

    if(event.target.tagName === 'BUTTON'){
        const h1El = document.querySelector('h1');
        // h1El.innerText = event.target;
        h1El.innerText = event.target.getAttribute('fruit');
    }
    // if(event.target != event.currentTarget){
    //     const h1El = document.querySelector('h1');
    //     h1El.innerText = event.target.innerText;
    // }
    
})