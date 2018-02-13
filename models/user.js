var mongoose = require('mongoose');
var passportLocalMongose = require('passport-local-mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    status: { type: String, default: 'Open' },
    isCustomerSuccess: { type: Boolean, default: false },
    isSale: { type: Boolean, default: false },
    isFinance: { type: Boolean, default: false}
});

userSchema.plugin(passportLocalMongose);

module.exports = mongoose.model('User', userSchema);