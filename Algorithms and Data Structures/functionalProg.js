const prepareTea = () => 'greenTea';
console.log(prepareTea());


const bookList = [  "The Hound of the Baskervilles", 
                    "On The Electrodynamics of Moving Bodies", 
                    "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookName) {
  let arr = [...bookList];
  arr.push(bookName);
  return arr;
  
  // Change code above this line
}

// Change code below this line
function remove(bookName) {
  let arr = [...bookList];
  const book_index = arr.indexOf(bookName);
  if (book_index >= 0) {
    arr.splice(book_index, 1);
    return arr;
    }
    return arr;
}
let arr = add("asdad");
console.log(bookList);
console.log(arr);
console.log(arr.indexOf("asdad"));
let arr2 = remove("asdad");
console.log(arr2);

/**
* -------------- MAP-------------------------
*/
const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'camperCat', age: 10 }
];
  
const names = users.map(user => user.name);
console.log(names);

// The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
];
  
 
  
const ratings = [];
watchList.map(movie => {
      ratings.push({title: movie.Title, rating: movie.imdbRating});
});
console.log(JSON.stringify(ratings));

//----------------------------------------------------
//----------------------------------------------------


//----------------------FILTER---------------------------

const filteredList = watchList.map(movie => {
  return {title: movie.Title, rating: parseFloat(movie.imdbRating)}
}).filter(movie => movie.rating >= 8.0);

console.log(filteredList);


//----------------------REDUCE---------------------------
let ff = [15, 16, 17, 18, 19];
console.log(ff.reduce( (prevVal,currentVal) => {return prevVal+currentVal}));
console.log(ff.reduce( (prevVal,currentVal) => {return prevVal+currentVal}, 10));


let op = watchList.map(movie => {
  return {director: movie.Director, rating: parseFloat(movie.imdbRating)};
})
.filter(movie => movie.director == "Christopher Nolan");

let t = op.reduce((prev, current) => {return (prev+current.rating)},0);

console.log(t);
//-----------------------------------------------------

//----------------------SORT---------------------------
const globalArray = [1, 30, 4, 21, 100000];

function nonMutatingSort(arr) {
  let a = [...arr];  
  console.log(a);
  return a.sort((a,b)=>{
      return a-b;
  });
}

console.log(nonMutatingSort(globalArray));
console.log(globalArray);


function urlSlug(title) { 
  return  title.toLowerCase().trim().split(/\s+/).join("-");
}

console.log(urlSlug("   Winter Is  Coming"));

//----------------------EVERY---------------------------
/**
 * The every method works with arrays to check if every element passes a particular test. It returns a Boolean value - true if all values meet the criteria, false if not
 */
let arr4 = [1, 2, 3, -4, 5];
console.log(`every result: ${arr4.every((i)=> i>=0)}`);

//----------------------SOME---------------------------
/**
 * The some method works with arrays to check if any element passes a particular test. It returns a Boolean value - true if any of the values meet the criteria, false if not.
 */
 console.log(`some result: ${arr4.some((i)=> i>=0)}`);

//----------------------CURRYING---------------------------
function add3(x) {
  return (y)=>{    
    return (z)=>{
      return x+y+z;
    }
  }  
}

console.log(add3(10)(20)(30));




