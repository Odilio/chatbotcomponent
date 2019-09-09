var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.post('/dialogflow-webhook', function(req, res) {
    json_data_string = JSON.stringify(req.body, undefined, 3);
    console.log(json_data_string)
    res.send('Hello World!');
})

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});

