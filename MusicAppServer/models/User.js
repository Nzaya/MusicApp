const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        min: [6, 'Password should be atleast 6 characters long'],
        required: [true, "Password is required"]
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;