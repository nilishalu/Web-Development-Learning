const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/signup.html");
})

app.post('/', function(req, res) {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    // console.log(firstName, lastName, email)
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    EMAIL: email,
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us10.api.mailchimp.com/3.0/lists/7cff45c4a1";

    const options = {
        method: "POST",
        // auth: "shalini:7da839c568db7b2df216e4ea15b4e470-us10"
        headers: {
            Authorization: "shalini: 7da839c568db7b2df216e4ea15b4e470-us10"
        }
    }

    const request = https.request(url, options, function(response) {
        if (response.statusCode == 200) {
            res.sendFile(__dirname + "/success.html")
        }
        else {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function(data) {
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end();
})

app.post("/failure", function(req, res) {
    res.redirect("/")
})


app.listen(process.env.PORT || 3000, function () {
    console.log("Server running at port 3000");
})

//API Key
//444c75169f5c43fde690062c7f1d4368-us10

//List Id
//7cff45c4a1