const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/bmiCalculator', function(req, res) {
    console.log(__dirname + "\\index.html")
    res.sendFile(__dirname + "\\index.html")
})

app.post('/bmiCalculator', function(req, res) {
    var h = parseFloat(req.body.height);
    var w = parseFloat(req.body.weight);
    var bmi = w / Math.pow(h, 2)
    console.log(h + w + w/h)
    res.send("Your BMI is: " + bmi)
})

app.listen(3000, function() {
    console.log("Server started at 3000")
})