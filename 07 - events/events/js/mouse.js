const btn = document.querySelector('#firstButton');
const h1El = document.querySelector('h1');
let h1Text = h1El.innerText;

btn.addEventListener('mouseenter', ()=>{
    btn.style.color = 'red';

    
    h1El.innerText = 'Goodbye, cruel world!';
})

btn.addEventListener('mouseleave', ()=>{
    btn.style.color = 'black';

    h1El.innerText = h1Text;
})

// kom ihpg bodyn måsste ha 100vw och 100vh

document.body.addEventListener('mousemove', (event)=>{
    console.log(event.clientX);

    document.body.style.backgroundColor = `hsl(${event.clientX*0.1}, 80%, 80%)`;
})