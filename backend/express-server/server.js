const express = require('express')
const app = express();

app.get('/', function(request, response) {
    //console.log(request)
    //response.send("Hello, we got your request!")
    response.send("<h1>Hello, your request is under process</h1><button>Click here to head back</button>")
})

app.get('/contact', function(req, res) {
    res.send("<h3>Contact me @: shalini.c.e.ganu@gmail.com</h3>")
})

app.get('/about', function(req, res) {
    res.send("<p><b>Hey, I am Shalini C E, a third year undergraduate @NITK, Surathkal. I am currently learning full stack web development. I enjoy learning new things. I listen to music, read books or watch dramas whenever I am bored.</b></p>")
})

app.listen('2000', function () {
    console.log("Server started in port 2000")
})