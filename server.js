var express = require('express');

var app = express();
var fs = require('fs')
var stringifyFile;
app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    //res.send('JSON:');
    res.json(test.json)
});


fs.readFile('./test.json', 'utf8', function(err, data) {
    if (err) throw err;
    stringifyFile = data
    res.send(data);
});

app.post('/updateNote/:note', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    stringifyFile = req.params.note;
    res.send('Hello POST!');
});


fs.writeFile('./test.json', stringifyFile, function(err) {
    If (err) throw err;
    console.log('file updated');
});


var server = app.listen(3000);


/*
app.get('/', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony głównej');
    res.send('Identyfikator, który został dopisany to ' + req.params.id);
});

var server = app.listen(3000);

app.post('/', function (req, res) {
    console.log('Otrzymałem żądanie POST do strony głównej');
    res.send('Hello POST!');
});

app.delete('/del_user', function (req, res) {
    console.log('Otrzymałem żądanie DELETE do strony /del_user');
    res.send('Hello DELETE!');
});

app.get('/list_user', function (req, res) {
    console.log('Otrzymałem żądanie GET do strony /list_user');
    res.send('Strona z listą użytkowników!');
});

app.get('/ab*cd', function(req, res) {
    console.log('Otrzymałem żądanie GET do strony /ab*cd');
    res.send('Wzór pasuje');
});

app.use(function (req, res, next) {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});
*/