const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose')
const bycrypt = require('bcryptjs')
const passport = require('passport')

//Load User Model
const User = require('../models/User')

module.exports = function(passport){
    passport.use(
        new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
            //Match User
            User.findOne({email: email})
                .then(user => {
                    if(!user){
                        return done(null, false, {msg: "Email not registered"})
                    }
                    //Match Password
                    bycrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;
                        if(isMatch){
                            return done(null, user)
                        } else {
                            return done(null, false, {msg: "Password Incorrect"})
                        }
                    })
                })
                .catch(err => console.log(err))
        })
    )

    passport.serializeUser((user, done) => {
        done(null, user.id)
    })

    passport.deserializeUser((id, done) => {
        User.findById(id).exec()
        .then(user => {
            done(null, user)
        })
        .catch(err => {
            done(err, null)
        })
    })
}