var express = require('express');
var app = express();

app.use(express.cookieParser('some secret'));
app.use(express.cookieSession());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');
