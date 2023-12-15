/*
 * Clara Leivas, 2023 
 * (c) CC BY - https://creativecommons.org/licenses/by/4.0/
 * 
 * Search Countries
 * Uses the Rest Countries API - https://restcountries.com/ 
 */

document.querySelector('form').addEventListener('submit', inputs );

// Gets user inputs from the form
function inputs(e){
    e.preventDefault();

    //Remove previous searchresult and error messages
    const containerEl = document.querySelector('#countryContainer');
    const errorContainer = document.querySelector('#errorContainer');
    containerEl.innerHTML = '';
    errorContainer.classList.add('hide');

    // Fetch countries based on user input and displays info about the countries or an error if something goes wrong
    fetchInfo(document.querySelector('#searchInput').value, document.querySelector('input[type="radio"]:checked').value)
    .then(display )
    .catch( (er)=>{
        let message;
        if(er ===404) message = `The country or language can't be found... try again!`;
        else message = 'Something went wrong... relax for a bit and then try again.';
        const errorMessageEl = document.querySelector('#errorMessage');
        errorMessageEl.innerText = message;
        const errorContainer = document.querySelector('#errorContainer');
        errorContainer.classList.remove('hide');
    });
}

// Fetches countries by language or name and throws an error if the country can't be found or if there's a server error etc
async function fetchInfo(term, type){
    const res = await fetch(`https://restcountries.com/v3.1/${type}/${term}?fields=name,flags,population,subregion,capital`);
    if(res.ok){
        const d = await res.json();
        return d;
    }
    else if(res.status===404) throw 404;
    else throw 'error';
}

// Creates a card to display info about each country
function display(countries){
    const flexContainer = document.querySelector('#countryContainer');
    countries.sort((a, b)=> b.population-a.population);
    for(const c of countries){
        const countryCardDiv = document.createElement('div');
        countryCardDiv.classList.add('country-card');
        create('img', c.flags.png, countryCardDiv);
        create('h1', c.name.official, countryCardDiv);
        create('h3', c.subregion, countryCardDiv);
        create('p', `Capital: ${c.capital[0]}`, countryCardDiv);
        create('p', `Population: ${c.population.toLocaleString()}`, countryCardDiv);
        flexContainer.append(countryCardDiv);
    }
}

// Creates an element and appends it to container
function create(type, content, container){
    const el = document.createElement(type);
    container.append(el);
    if(type === 'img') el.src = content;
    else el.innerText = content;
    return el;
}