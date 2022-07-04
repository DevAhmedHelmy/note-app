const app = require('express')();
var bodyParser = require("body-parser");
var notRoute = require('./routes/noteRoute');

var cors = require("cors");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use('/api', notRoute);

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
}
);