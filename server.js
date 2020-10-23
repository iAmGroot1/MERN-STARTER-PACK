const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const items = require('./routes/api/item')
const app = express()

//Bodyparser Middleware 
//Middleware has access to res and req 
app.use(bodyParser.json())


//Anything that has api/items in its url should go 
//to the items file that we import from routes
app.use('/api/items', items)
const port = process.env.PORT || 5000;

const db = require('./config/keys').mongoURI;

try {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("connected")
        app.listen(port, () => console.log('Running'))
    }
    );
} catch (error) {
    console.log("could not connect");
}

