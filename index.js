const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require('path');
require("./models/Survey");
require("./models/User");
const routes = require('./routes');

const assets = require("connect-assets");
require('mincer-babel')(assets.Mincer);

const app = express();
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/surveys', { useNewUrlParser: true });

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(assets());

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log("Listening on port 3000 ..."));
