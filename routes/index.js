var express = require('express');
var passport = require('passport');
var routers = express.Router();
var User = require('../models/user');

routers.get('/', (req, res) => {
    res.render('index');
});

routers.get('/register', (req, res) => {
    res.render('register');
});

routers.post('/register', (req, res) => {
    var newUser = new User({username: req.body.username});
    switch (req.body.adminCode) {
        case 'cs':
            newUser.isCustomerSuccess = true
            break;
        case 'sale':
            newUser.isSale = true
            break;
        case 'finance':
            newUser.isFinance = true
            break;
    }
    User.register(newUser, req.body.password, (err, user) => {
        passport.authenticate('local')(req, res, () => {
            res.redirect('/user');
        });
    });
});

routers.get('/login', (req, res) => {
    res.render('login');
});

routers.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/login'
}), (req, res) => {
});

routers.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

routers.get('users/:id', (req, res) => {
    User.findById(req.params.id, (err, foundUser) => {
        if(err) {
            res.redirect('/')
        }
        res.render('/users/show')
    });
});

module.exports = routers;