var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');
var app = express();
var port = 3000;
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

var dish = require('./dishRouter.js')(app);
var promo = require('./promoRouter.js')(app);
var leader = require('./leaderRouter.js')(app);

app.listen(port);
console.log('listening on port',port);
