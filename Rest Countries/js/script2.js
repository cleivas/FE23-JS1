// variables for all elements
const error = document.querySelector("#errorMessage");
const containsError = document.querySelector("#errorContainer");
const countries = document.querySelector("#countryContainer");
const text = document.querySelector("#searchInput");
const radio = document.querySelectorAll('input[type="radio"]');
const form = document.querySelector('form')

form.addEventListener("submit", (e) => {
  e.preventDefault(); //Prevents default submit

  const input = text.value; //What the user searched for

  // Hides error message and all countries
  containsError.classList.remove("hide");
  countries.innerHTML = "";

  // If user checked the first radio, search for name
  // else If user checked second radio, search for language
  if (radio[0].checked === true) {
    searchName(input);
  } else if (radio[1].checked === true) {
    searchLanguage(input);
  }
});

// A function that searches for name and displays country
function searchName(name) {
  //A variable for the url
  const url = `https://restcountries.com/v3.1/name/${name}` 

  // Fetches from the url
  fetch(url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        throw 1;
      } else throw 2;
    })
    .then((data) => {
      // Creates elements to display all info about the country
      const country = document.createElement("div");
      country.classList.add("country-card");
      const flag = document.createElement("img");
      flag.src = data[0].flags.png;
      country.append(flag);
      const name = document.createElement("h1");
      name.innerText = data[0].name.official;
      country.append(name);
      const subregion = document.createElement("h3");
      subregion.innerText = data[0].subregion;
      country.append(subregion);
      const stad = document.createElement("p");
      stad.innerText = data[0].capital;
      country.append(stad);
      const pop = document.createElement("p");
      pop.innerText = data[0].population;
      country.append(pop);
      countries.append(country);
    })
    .catch((e) => {
      // If there is an error
      console.log(e);
      if (e === 1) error.innerText = "404, try again";
      else error.innerText = "Server or network is down.";
      containsError.classList.remove("hide");
    });
}

// A function that searches for language and displays countries
function searchLanguage(language) {
  // Fetches url 
  fetch(`https://restcountries.com/v3.1/lang/${language}`)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else if (response.status === 404) {
        throw 1;
      } else throw 2;
    })
    .then((data) => {
      // Sort the countries in descending order. For ascending order use a.population - b.population
      data.sort((a, b)=>b.population-a.population) 

      // Loops through all countries and creates elements for all the information to be displayed
      for (let i = 0; i < data.length; i++) {
        const country = document.createElement("div");
        country.classList.add("country-card");
        const flag = document.createElement("img");
        flag.src = data[i].flags.png;
        country.append(flag);
        const name = document.createElement("h1");
        name.innerText = data[i].name.official;
        country.append(name);
        const subregion = document.createElement("h3");
        subregion.innerText = data[i].subregion;
        country.append(subregion);
        const stad = document.createElement("p");
        stad.innerText = data[i].capital;
        country.append(stad);
        const pop = document.createElement("p");
        pop.innerText = data[i].population;
        country.append(pop);
        countries.append(country);
      }
    })
    .catch((e) => {
      console.log(e);
      // when an error happens
      if (e === 1) error.innerText = "404, try again";
      else error.innerText = "Server or network is down.";
      containsError.classList.remove("hide");
    });
}
