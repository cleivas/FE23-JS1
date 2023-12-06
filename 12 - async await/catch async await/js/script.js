const url = `https://dog.ceo/api/breeds/image/random`;
// const url = `https://api.punkapi.com/v2//random`;

fetch(url)
    .then(response=>{
        console.log(response.status);
        if(response.status === 200){
            return response.json();
        }
        else if(response.status === 404){
            throw 'Response status är 404'
        }
    })
    .then( data =>{
        console.log(data);
        // console.log(data.message)
        const img = document.createElement('img');
        img.src = data.message;
        document.body.append(img);
        
    })
    .catch(error =>{
        console.log('Det var ett error')
        console.log(error)
        displayError('Försök igen');
        // skapa html-element för att visa användaren ett felmeddelande
    })

    function displayError(message){
        const h1 = document.createElement('h1');
        h1.innerText = message;
        document.body.append(h1);
    }

console.log('sist i koden');