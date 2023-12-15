/*
 * Clara Leivas, 2023 
 * (c) CC BY - https://creativecommons.org/licenses/by/4.0/
 * 
 * Search Countries
 * Uses the Rest Countries API - https://restcountries.com/ 
 * 
 * Fetches all countries matching a user search.
 * User can search by language or country name.
 * All countries are displayed in a a descendong order based on population.
 * Info displayed for each country
 * - flag
 * - official name
 * - subregion
 * - capital
 * - population
 */

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit );

function handleSubmit(event){
    event.preventDefault();
    removePrevSearchResult(); 

    const searchTerm = document.querySelector('#searchInput').value.trim();
    const searchType = document.querySelector('input[type="radio"]:checked').value;

    fetchCountries(searchTerm, searchType)
        .then(displayCountries )
        .catch( displayError );
}


async function fetchCountries(term, type){
    const baseUrl = `https://restcountries.com/v3.1/${type}/${term}`;
    const queries = `?fields=name,flags,population,subregion,capital`;
    const url = baseUrl+queries;

    const response = await fetch(url);

    if(response.ok){
        const countries = await response.json();
        return countries;
    }
    else if(response.status===404){
        if(type === 'lang') throw '404 lang';
        else if(type === 'name') throw '404 name';
    } 
    else throw 'error';
}


function displayCountries(countries){
    const flexContainer = document.querySelector('#countryContainer');

    countries.sort((a, b)=> b.population-a.population); 

    for(const country of countries){
        const countryCardDiv = document.createElement('div');
        countryCardDiv.classList.add('country-card');

        createAndAppendElement('img', country.flags.png, countryCardDiv);
        createAndAppendElement('h1', country.name.official, countryCardDiv);
        createAndAppendElement('h3', country.subregion, countryCardDiv);
        createAndAppendElement('p', `Capital: ${country.capital[0]}`, countryCardDiv);
        createAndAppendElement('p', `Population: ${country.population.toLocaleString()}`, countryCardDiv);

        flexContainer.append(countryCardDiv);
    }
}

function displayError(error){
    console.log(error);

    let message;
    if(error === '404 lang') message = `That's not a language... try again.`;
    else if(error === '404 name') message = `That's not a country... try again.`;
    else message = 'Something went wrong... wait for a bit and try again,';

    const errorMessageEl = document.querySelector('#errorMessage');
    errorMessageEl.innerText = message;

    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.classList.remove('hide');
}


function createAndAppendElement(type, content, container){
    const el = document.createElement(type);
    container.append(el);

    if(type === 'img') el.src = content;
    else el.innerText = content;

    return el;
}

function removePrevSearchResult(){
    const containerEl = document.querySelector('#countryContainer');
    containerEl.innerHTML = '';

    const errorContainer = document.querySelector('#errorContainer');
    errorContainer.classList.add('hide');
}
