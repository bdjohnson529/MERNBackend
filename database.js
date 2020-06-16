/* MongoDB connection via mongoose*/
require('dotenv').config();

// create connection string from vars in .env
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const endpoint = process.env.MONGO_ENDPOINT;
const database = process.env.MONGO_DATABASE;
const connection =  "mongodb+srv://" + username + ":" + password + "@" + endpoint + "/" + database + "?retryWrites=true&w=majority";

const mongoose = require('mongoose');
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));