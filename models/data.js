var express = require('express');
var app = module.exports = express();
var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('./data/catchData.json', 'utf8'));

module.exports = obj;



