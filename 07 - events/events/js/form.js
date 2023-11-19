const form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault(); //Förhindrar default-beteendet

    const text = document.querySelector('#textInput').value;
    const num = document.querySelector('#numberInput').value;

    document.querySelector('#name').innerText = text;
    document.querySelector('#age').innerText = num;



    console.log(text, num);
    form.reset();
})