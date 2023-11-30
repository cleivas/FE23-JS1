const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const breed = document.querySelector('input').value;
    fetchAndDisplayDogImage(breed);
    form.reset();
})

function fetchAndDisplayDogImage(breed){
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const containerDiv = document.querySelector('#container');
    containerDiv.innerHTML = '';

    fetch(url)
        .then(res=>res.json())
        .then( dogObj =>{
            console.log(dogObj);

            const imgEl = document.createElement('img');
            imgEl.src = dogObj.message;
            containerDiv.append(imgEl);
        })

}