const express = require("express");
const router = express.Router();
const bycrypt = require("bcrypt");
const passport = require('passport')

//User Model
const User = require("../models/User");

//Login Page
router.get("/login", (req, res) => res.send('login'));

//Register Page
router.get("/register", (req, res) => res.send("Register"));

//Register Handle
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  console.log("now", req.body);
  let errors = [];

  //check required fields
  if (!username || !email || !password) {
    errors.push({ msg: "Please fill in all fields" });
  }

  //check password length
  if (password.length < 6) {
    errors.push({ msg: "Password should be atleast 6 characters" });
  }

  if (errors.length > 0) {
    res.status(400).json({ errors, username, email, password });
  } else {
    //Validation pass
    User.findOne({ email: email }).then((user) => {
      if (user) {
        //User exist
        errors.push({ msg: "Email is already registered" });
        return res.status(201).json({ errors, username, email, password });
      } else {
        const newUser = new User({username,email, password });

        //Hash password
        bycrypt.genSalt(10, (err, salt) => bycrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //set password to hashed
            newUser.password = hash;
            //save user to db
            newUser
              .save()
              .then((user) => {res.redirect("/users/login");
              })
              .catch((err) => {
                  console.log(err);
                return res .status(400) .json({ errors, username, email, password });
              });
          })
        );
      }
    }); 
  }
});

//Login Handle
router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if(err){
      return next(err)
    }
    if(!user){
      //Authentication failed
      return res.status(401).json({message: 'Invalid credentials'})
    }
    //Log In User
    req.logIn(user, (err) => {
      if(err){
        return next(err);
      }
      //Authentication successful, success response
      return res.status(200).json({message: 'Login successful'})
    })

    // successRedirect: '/dashboard',
    // failureRedirect: '/users/login'
  })(req, res, next)
})

module.exports = router;
