const url = `https://restcountries.com/v3.1/lang/spanish`

fetch(url)
    .then(response=>response.json())
    .then(countries =>{
        console.log(countries);

        const moreThanArray = _.filter(countries, country=>
            country.population > 5000000
        );
        console.log(moreThanArray)
        for(let i=0; i<moreThanArray.length; i++){
            console.log(moreThanArray[i].name.common)
        };

        const orderedNames = _.sortBy(moreThanArray, function(country){
            return country.name.common;
        });
        
        for(const name of orderedNames){
            console.log(name);
        }

        const grouped = _.groupBy(countries, 'subregion');
        console.log(grouped)

        for(const property in grouped){
            console.log(property)

            for(const country of grouped[property]){
                console.log(country.name.common)
            }
        }
    })

