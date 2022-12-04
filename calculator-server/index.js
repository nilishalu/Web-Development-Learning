const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    console.log(__dirname)
   res.sendFile(__dirname + "\\index.html")
})

app.post('/', function(req, res) {
    //console.log(req.body)
    var data = req.body;
    var n1 = parseInt(data.num1);
    var n2 = parseInt(data.num2);
    //console.log(n1 + n2)
    res.send("Result is: " + (n1 + n2))
})

app.listen('3000', function () {
    console.log("server started at the route")
})