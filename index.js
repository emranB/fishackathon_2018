var express = require('express');
var app = module.exports = express();
var fs = require('fs');

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const path = require('path');

var geojson = require('geojson');
var data = require('./models/data.js');

app.use('/js', express.static(__dirname + '/node_modules')); 
app.use('/css', express.static(__dirname + '/css')); 
app.use('/controllers', express.static(__dirname + '/controllers')); 

app.use(express.static(__dirname + '/'));

app.get('/data', function(req, res) {
    var geoData = geojson.parse(data, {Point: ['catch_latitude', 'catch_longitude']});
    fs.writeFile('./data/data.geojson', JSON.stringify(geoData), function(err) {
        console.log("Created GeoJson");
    });
    res.send(geoData);
});
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/views', '/index.html'));
});
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, '/views', '/index.html'));
// });


app.listen('2000');
console.log('Listening to port 2000');