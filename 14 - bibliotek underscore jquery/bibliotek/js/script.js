fetch('https://restcountries.com/v3.1/lang/spanish')
    .then(res=>res.json())
    .then(countries =>{
        console.log(countries);
        // Pluck
        const populationArray = _.pluck(countries, 'population');

        console.log(populationArray);

        const nameObjArr = _.pluck(countries, 'name');
        console.log(nameObjArr);
        const nameArr = _.pluck(nameObjArr, 'common');
        console.log(nameArr)

        // Max
        const highestPopulation = _.max(countries, country => country.population );
        console.log(highestPopulation);

        // each
        _.each(countries, country=>console.log(country.population));

        // sortBy -> kolla själva!
        
    });