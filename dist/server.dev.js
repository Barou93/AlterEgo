"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');

var cors = require('cors');

var path = require('path'); //Routes dependances


var adminRoutes = require('./routes/admin.routes');

var articleRoutes = require('./routes/article.routes');

var infosRoutes = require('./routes/information.routes');

var app = express();

require('dotenv').config('./.env');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
var corsOptions = {
  origin: process.env.FRONT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
};
app.use(cors(corsOptions));

var _require = require('./middleware/auth.middleware'),
    requireAuth = _require.requireAuth;

app.get('/jwtid', requireAuth, function (req, res) {
  res.json(res.locals.admin.id);
});
app.use('/api/admin', adminRoutes);
app.use('/api/article', articleRoutes);
app.use('/api/infos', infosRoutes);
app.use('/uploads', express["static"](path.join('uploads')));
app.listen(process.env.PORT, function () {
  console.log("Listenning on PORT ".concat(process.env.PORT));
});