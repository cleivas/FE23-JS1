const beerJson = `[{"id":100,"name":"Elvis Juice V2.0 - Prototype Challenge","tagline":"Citrus Infused IPA.","first_brewed":"12/2015","description":"Punchy resinous hoppy aromas blast from the glass; light floral and citrus notes riff against huge piney character. Showcasing Citra, Simcoe and Amarillo at their absolute best. A huge dose of grapefruit peel brings swirls of fresh pithy zest, accentuating the dry hops and building on the dry, biscuit malt base.","image_url":"https://images.punkapi.com/v2/100.png","abv":6.5,"ibu":60,"target_fg":1010,"target_og":1060,"ebc":25,"srm":12.5,"ph":4.4,"attenuation_level":83.3,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":65,"unit":"celsius"},"duration":75}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":"Add grapefruit and orange peel into the boil and FV for extra citrus twist"},"ingredients":{"malt":[{"name":"Extra Pale","amount":{"value":4.5,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.88,"unit":"kilograms"}}],"hops":[{"name":"Magnum","amount":{"value":2.5,"unit":"grams"},"add":"start","attribute":"bitter"},{"name":"Simcoe","amount":{"value":12.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Amarillo","amount":{"value":12.5,"unit":"grams"},"add":"middle","attribute":"flavour"},{"name":"Mosaic","amount":{"value":25,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Citra","amount":{"value":25,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Amarillo","amount":{"value":12.5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Simcoe","amount":{"value":12.5,"unit":"grams"},"add":"end","attribute":"flavour"},{"name":"Citra","amount":{"value":50,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Amarillo","amount":{"value":50,"unit":"grams"},"add":"dry hop","attribute":"aroma"},{"name":"Simcoe","amount":{"value":50,"unit":"grams"},"add":"dry hop","attribute":"aroma"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Mexican ceviche","Coriander and lime green thai curry","Grapefruit souffle"],"brewers_tips":"Shave of the surface of the citrus peel to unlock the highly aromatic compounds into the beer. Avoid putting any white pith into the brew as it will create an intense and unpleasant bitterness.","contributed_by":"Sam Mason <samjbmason>"}]`;

const beerArr = JSON.parse(beerJson);
console.log(beerArr[0]);

function displayBeer(beer){
    const h1El = document.createElement('h1');
    h1El.innerText = beer.name;

    const olEl = document.createElement('ol');

    for(const pairing of beer.food_pairing){
        const liEl = document.createElement('li');
        liEl.innerText = pairing;
        olEl.append(liEl);
    }

    const imgEl = document.createElement('img');
    imgEl.src = beer.image_url;

    document.body.append(h1El, olEl, imgEl);
}

displayBeer(beerArr[0]);

// Definierar en funktion med en parameter
// Parametern är placeholder för ett öl-objekt
// funktionen ska skapa element och visa

/**
 * 1. Name
 * 2. Lista med food-pairings
 * 3. bild
 */

const newBeerJson = `[{"id":303,"name":"Hazy Jane Rye Barrel Aged","tagline":"Bourbon Barrel Vermont IPA.","first_brewed":"2018","description":"A draft-only BrewDog bar exclusive; we have experimented with ageing our Vermount IPA for a short time in bourbon and rye barrels, both known for imparting flavour quickly compared to other types of barrel.","image_url":"https://images.punkapi.com/v2/keg.png","abv":7.2,"ibu":30,"target_fg":1009,"target_og":1065,"ebc":15,"srm":8,"ph":4.2,"attenuation_level":86,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":66,"unit":"celsius"},"duration":25}],"fermentation":{"temp":{"value":21,"unit":"celsius"}},"twist":null},"ingredients":{"malt":[{"name":"Pale Ale","amount":{"value":3.96,"unit":"kilograms"}},{"name":"Maris Otter","amount":{"value":0.96,"unit":"kilograms"}},{"name":"Wheat","amount":{"value":0.6,"unit":"kilograms"}},{"name":"Flaked Oats","amount":{"value":0.24,"unit":"kilograms"}}],"hops":[{"name":"Chinook","amount":{"value":1,"unit":"grams"},"add":"10","attribute":"Flavour"},{"name":"Chinook","amount":{"value":20,"unit":"grams"},"add":"0","attribute":"Aroma"},{"name":"Amarillo","amount":{"value":20,"unit":"grams"},"add":"0","attribute":"Aroma"},{"name":"Simcoe","amount":{"value":20,"unit":"grams"},"add":"0","attribute":"Aroma"},{"name":"Citra","amount":{"value":50,"unit":"grams"},"add":"Dry Hop","attribute":"Aroma"},{"name":"Simcoe","amount":{"value":50,"unit":"grams"},"add":"Dry Hop","attribute":"Aroma"},{"name":"Amarillo","amount":{"value":50,"unit":"grams"},"add":"Dry Hop","attribute":"Aroma"},{"name":"Mosaic","amount":{"value":50,"unit":"grams"},"add":"Dry Hop","attribute":"Aroma"},{"name":"American Oak Wood- chip medium toast, Ageing soaked in Rye Whisky","amount":{"value":50,"unit":"grams"},"add":"Dry Hop","attribute":"Wood Ageing"}],"yeast":"Wyeast 1056 - American Ale™"},"food_pairing":["Chickpea curry","Pork fajitas (with the works!)","Orange and carrot cake with orange cream cheese icing"],"brewers_tips":"Avoid any oxygen uptake! It will oxidise the delicate hop flavours during the ageing period. Purge your barrel/ageing vessel with CO2 and seal it airtight.","contributed_by":"John Jenkman <johnjenkman>"}]`;

const newBeerArr = JSON.parse(newBeerJson);

displayBeer(newBeerArr[0]);