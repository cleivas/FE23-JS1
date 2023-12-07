const form = document.querySelector('form');

form.addEventListener('submit', handleForm );

function handleForm(event){
    event.preventDefault();

    const typeFromInput = document.querySelector('input').value;
    const isFreeFromInput = document.querySelector('#freeCheck').checked;

    fetchActivity(typeFromInput, isFreeFromInput)
        .then( displayActivity );

    form.reset();
}

async function fetchActivity(type, isFree){
    const maxPrice = isFree ? 0 : 1;

    // if(isFree == true){
    //     maxPrice = 0;
    // }
    // else{
    //     maxPrice = 1;
    // }

    const url = `http://www.boredapi.com/api/activity?type=${type}&minprice=0&maxprice=${maxPrice}`

    const response = await fetch(url);
    const activityData = await response.json();

    console.log(activityData);
    return activityData;
}

function displayActivity(activityObj){
    // console.log(activityObj);

    const h1 = document.querySelector('#activityContainer>h1');
    h1.innerText = activityObj.activity;
}