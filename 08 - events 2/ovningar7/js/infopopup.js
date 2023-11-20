const h1El = document.querySelector('h1');

h1El.addEventListener('mouseenter', (event)=>{
    const popupDiv = document.querySelector('#infoPopup');
    popupDiv.style.display = 'block';

    popupDiv.style.top = event.clientY + 'px';
    popupDiv.style.left = event.clientX + 'px';
    console.log(event)
})

h1El.addEventListener('mouseleave', ()=>{
    const popupDiv = document.querySelector('#infoPopup');
    popupDiv.style.display = 'none';
})