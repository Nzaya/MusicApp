const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const session = require('express-session')
const passport = require('passport')

const app = express();
app.use(cors());

//Passport Config
require('./config/passport')(passport)


//DB Config
const db = require('./config/keys').MongoURI

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

    
//Bodyparser
//for forms
app.use(express.urlencoded({ extended: false }));
//for json
app.use(express.json())

//Express Session Middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))

//Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));