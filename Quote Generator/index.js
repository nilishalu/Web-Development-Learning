//const btn = document.querySelector('#quote').addEventListener('click', generateQuote)

function generateQuote() {
    var quotes = require('inspirational-quotes');
    console.log(quotes.getRandomQuote())
}

generateQuote()