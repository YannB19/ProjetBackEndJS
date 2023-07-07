require('http');
//require('./lib/controller');

const express = require('express');
const app = express();

const http = require("http");

app.get('/', function(req, res) {
    console.log("Got a GET request for the homepage");
    res.send('Hello GET!')
})

app.get('/list_singer', function(req, res) {
    console.log("Got a GET request for /list_singer");
    res.send('Page Listing GET!')
})

app.post('/', function(req, res) {
    console.log("Got a POST request for homepage");
    res.send('POST!')
})

app.delete('/del_singer', function(req, res) {
    console.log("Got a DELETE request for del_singer");
    res.send('DELETE')
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

app.use('/singer/:id', function (req, res, next) {
    res.send('SINGER');
});

app.use(function(err, req, res, next) { 
    console.error(err.stack);
    res.status(500).send('erreur!');
})

app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('files'));

var router = express.Router();

router.get('/singer/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send('special');
});


/*
const server = http.createServer(function (req, res) {
    // A l'arrivée d'une requête
    console.log("Serveur running at http://127.0.0.1:8081/")
    res.write("Hello World!");
    res.end();
})

// Lancer le serveur (en écoute au port 8081)
server.listen(8081)
*/