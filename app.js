var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var localStrategy = require('passport-local');
var methodOverride = require('method-override');

var authRoutes = require('./routes/index');
var userRoutes = require('./routes/user')

var User = require('./models/user')

var app = express();
var port = 3000;

mongoose.connect('mongodb://John:John@ds221228.mlab.com:21228/billing-app-segment');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use(require('express-session')({
  secret: 'johnny',
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
passport.use(new localStrategy(User.authenticate()));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.use(authRoutes);
app.use('/user', userRoutes);

app.listen(port, process.env.IP, () => {
  console.log(`Server start on localhost ${port}`);
});