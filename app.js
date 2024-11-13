require('dotenv').config();
const mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var relicsRouter = require('./routes/relics');
var gridRouter = require('./routes/grid');
var pickRouter = require('./routes/pick');
var Relic = require("./models/relic");
var resourceRouter = require('./routes/resource');
var app = express();

// Connect to MongoDB using Mongoose
const connectionString = process.env.MONGO_CON
mongoose.connect(connectionString);
// .then(() => console.log("MongoDB connected successfully"))
// .catch((err) => console.error("MongoDB connection error:", err));
// Bind connection to error event
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to confirm successful connection)
db.once("open", function() {
  console.log("Connection to DB succeeded");
});

// Function to seed the database
async function recreateDB() {
  // Delete all existing relics
  await Relic.deleteMany();
  // Create instances of Relic
  let instance1 = new Relic({ relic_name: "Ancient Vase", origin: "Greece", estimated_value: 5000 });
  let instance2 = new Relic({ relic_name: "Samurai Sword", origin: "Japan", estimated_value: 12000 });
  let instance3 = new Relic({ relic_name: "Egyptian Amulet", origin: "Egypt", estimated_value: 8000 });

  // Save instances to the database
  await instance1.save().then(() => console.log("Relic 1 saved"));
  await instance2.save().then(() => console.log("Relic 2 saved"));
  await instance3.save().then(() => console.log("Relic 3 saved"));
}

// Seed the database on server start if needed
let reseed = true;
if (reseed) {
  recreateDB();
}

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/relics', relicsRouter);
app.use('/grid', gridRouter);
app.use('/pick', pickRouter);
app.use('/resource', resourceRouter);
app.use('/api/relics', relicsRouter);
app.use('/resource', relicsRouter);
// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
