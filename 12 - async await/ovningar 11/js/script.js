const formEl = document.querySelector('form');

formEl.addEventListener('submit', event=>{
    event.preventDefault();

    const typeOfActivity = document.querySelector('#type-input').value;
    const numberOfParticipants = document.querySelector('#participants-input').value;
    // console.log(typeOfActivity)

    const url = `http://www.boredapi.com/api/activity?type=${typeOfActivity}&participants=${numberOfParticipants}`;

    fetch( url )
        .then( (response)=>{ 
            console.log(response);
            return response.json();
        } )
        .then( (activityObj)=>{ 
            console.log(activityObj)
            displayActivity(activityObj);
        } )
})

function displayActivity(activity){
    const containerDiv = document.querySelector('#container')
    const h1El = document.createElement('h1');

    h1El.innerText = activity.activity;

    containerDiv.innerHTML = '';
    containerDiv.append(h1El);

    console.log(activity.activity)
}