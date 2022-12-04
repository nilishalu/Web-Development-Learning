//console.log("Hello, welcome to backend development")

/* File system in native node modules
const fs = require('fs');

fs.copyFileSync('file1.txt', 'file2.txt');

*/

// var movieName = require('mymoviedb');

// console.log(movieName)

var quote = require('popular-movie-quotes')

console.log("Here is your quote for the moment:")
console.log(quote.getRandomQuote())
