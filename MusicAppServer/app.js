const express = require('express');
const mongoose = require('mongoose')
var cors = require('cors')

const app = express();
app.use(cors());
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

//routes
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server listening on port ${PORT}`));