'use strict'
/*
let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How much film did you see?", "");
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How much film did you see?", "");
  }
}

start();
*/

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    numberOfFilms.count = +prompt("How much film did you see?", "");
    while (numberOfFilms.count == '' || numberOfFilms.count == null || isNaN(numberOfFilms.count)) {
      numberOfFilms.count = +prompt("How much film did you see?", "");
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('One of last watched films?', ''),
        b = prompt('What mark do you give it?', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('You saw very litle films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('You are classical');
    } else if (personalMovieDB.count > 30) {
      console.log('You like films very much');
    } else {
      console.log('Error!');
    }
  },
  shoMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Your like kinde of films has number ${i}`);

      if (genre === '' || genre == null) {
        console.log('You dont enter data or you enter false');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item,i)=>{
      console.log(`Favorite kinde of movies ${i+1} - it is ${item}`);
    });
  },
};
