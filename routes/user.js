var express = require('express');
var routers = express.Router();
var User = require('../models/user');

routers.get('/', (req, res) => {
    User.find({isCustomerSuccess: false, isSale: false, isFinance: false}, (err, allUser) => {
        if(err){
            console.log("error: ", err)
        }
        else {
            res.render('user/index', { users: allUser })
        }
    });
});
routers.put('/:id/approval', (req, res) => {
    var id = req.params.id;
    console.log(id);
    User.find({_id: id}, (err, foundUser) => {
        if(err) {
            console.log('user not found');
        }
        else {
                User.findByIdAndUpdate({_id: id}, { $set: { status: "Waiting" } }, (err, updateStatus) => {
                    res.redirect('/user');
                });
        };
    });
});
 routers.put('/:id/csapproval', (req, res) => {
     var id = req.params.id;
     console.log(id);
     User.find({_id: id}, (err, foundUser) => {
         if(err) {
             console.log('user not found');
         }
         else {
                 User.findByIdAndUpdate({_id: id}, { $set: { status: "Approve" } }, (err, updateStatus) => {
                     res.redirect('/user'); 
                 });
         };
     });
 });
 routers.put('/:id/salesapproval', (req, res) => {
     var id = req.params.id;
     console.log(id);
     User.find({_id: id}, (err, foundUser) => {
         if(err) {
             console.log('user not found');
         }
         else {
                 User.findByIdAndUpdate({_id: id}, { $set: { status: "Finalize" } }, (err, updateStatus) => {
                     res.redirect('/user'); 
                 });
         };
     });
 });
 routers.put('/:id/reject', (req, res) => {
     var id = req.params.id;
     User.find({_id: id}, (err, foundUser) => {
         if(err) {
             console.log('user not found');
         }
         else {
                 User.findByIdAndUpdate({_id: id}, { $set: { status: "Reject" } }, (err, updateStatus) => {
                     res.send("Please Consider the bill for WriteOff");
                 });
         };
     });
 });
 routers.put('/:id/sent', (req, res) => {
     var id = req.params.id;
     User.find({_id: id}, (err, foundUser) => {
         if(err) {
             console.log('user not found');
         }
         else {
                 User.findByIdAndUpdate({_id: id}, { $set: { status: "sent" } }, (err, updateStatus) => {
                     res.redirect('/user');
                 });
         };
     });
 });

module.exports = routers;