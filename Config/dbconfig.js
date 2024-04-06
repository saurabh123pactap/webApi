//Import the mongoose module
var mongoose = require('mongoose');
const {config} = require("../Config/config.js");
//Set up default mongoose connection
// var mongoDB ="mongodb+srv://saurabh:saurabh890@cluster0-son5o.mongodb.net/test?retryWrites=true&w=majority"
 var mongoDB = config.get('DB_URL');
mongoose.connect(mongoDB, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));