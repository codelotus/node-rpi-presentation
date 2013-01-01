var express = require('express');
var app = express();

app.use(express.cookieParser('some secret'));
app.use(express.cookieSession());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

app.get('/', function(req, res) {
    //var body = "Hello World";
    //res.setHeader('Content-Type', 'text/plain');
    //res.setHeader('Content-Length', body.length);
    //res.end(body)
    res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000');
