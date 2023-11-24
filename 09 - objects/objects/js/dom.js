const movie = {
    title: 'Titanic',
    year: 1997,
    genre: 'Drama',
    director: 'James Cameron'
}

const movie2 = {
    title: '13 snart 30',
    year: 2004,
    genre: 'Comedy',
    director: 'Garry Winick'
}

const movie3 = {
    title: 'Interstellar',
    year: 2014,
    genre: 'Sci-fi',
    director: 'Christopher Nolan'
}

const movieArray = [movie, movie2, movie3];
console.log(movieArray)

function displayMovie(movieObject){
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');

    h1.innerText = movieObject.title;
    h2.innerText = movieObject.director;
    h3.innerText = movieObject.year;
    h4.innerText = movieObject.genre;
    
    document.body.append(h1, h2, h3, h4);
}

// displayMovie(movie);
// displayMovie(movie2)

for(const movie of movieArray){
    displayMovie(movie);
}