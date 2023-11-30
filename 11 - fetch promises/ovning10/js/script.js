const rawData = `[{"flags":{"png":"https://flagcdn.com/w320/se.png","svg":"https://flagcdn.com/se.svg","alt":"The flag of Sweden has a blue field with a large golden-yellow cross that extend to the edges of the field. The vertical part of this cross is offset towards the hoist side."},"name":{"common":"Sweden","official":"Kingdom of Sweden","nativeName":{"swe":{"official":"Konungariket Sverige","common":"Sverige"}}},"population":10353442,"timezones":["UTC+01:00"]}]`;

const rawBurkina = `[{"flags":{"png":"https://flagcdn.com/w320/bf.png","svg":"https://flagcdn.com/bf.svg","alt":"The flag of Burkina Faso features two equal horizontal bands of red and green, with a yellow five-pointed star in the center."},"name":{"common":"Burkina Faso","official":"Burkina Faso","nativeName":{"fra":{"official":"République du Burkina","common":"Burkina Faso"}}},"population":20903278,"timezones":["UTC"]}]`;


const countryArr = JSON.parse(rawData);
const countryArr2 = JSON.parse(rawBurkina);
// console.log(countryArr[0]);

function displayCountry(countryObj){
    console.log(countryObj.name.official); //Namnet
    console.log(countryObj.flags.png) //flagga
    console.log(countryObj.population) //Population
    console.log(countryObj.timezones[0]) //Timezone

    const name = countryObj.name.official;
    const flagUrl = countryObj.flags.png;
    const population = countryObj.population;
    const timezone = countryObj.timezones[0];

    const nameEl = document.createElement('h1');
    const populationEl = document.createElement('p');
    const timezoneEl = document.createElement('p');
    const flagImg = document.createElement('img');

    nameEl.innerText = name;
    populationEl.innerText = population + ', ' + timezone;
    // populationEl.innerText = timezone;
    flagImg.src = flagUrl;

    document.body.append(nameEl, populationEl, timezoneEl, flagImg);
}

displayCountry(countryArr[0]);
displayCountry(countryArr2[0]);