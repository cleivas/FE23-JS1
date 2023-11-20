const divs = document.querySelectorAll('div');
console.log(divs);

divs[0].addEventListener('click', ()=>{
    alert('Div 1');
    // console.log('div 1')
});

divs[1].addEventListener('click', ()=>{
    alert('Div 2');
    // console.log('div 2')

});

divs[2].addEventListener('click', (event)=>{
    alert('Div 3');
    event.stopPropagation();
});

divs[3].addEventListener('click', (event)=>{
    alert('Div 4');
    event.stopPropagation();
});

divs[4].addEventListener('click', ()=>{
    alert('Div 5');
});