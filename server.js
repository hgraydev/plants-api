'use strict'

const
  express     =   require('express'),
  app         =   express(),
  bodyParser  = require('body-parser'),
  morgan      = require('morgan'),
  cors        = require('cors'),
  validation    = require('express-validator'),
  env         = require('./configuration/config'); //basic configuration for variables

// CONFIGURATIONS
//CORS Cross-origin resource sharing
// allows restricted resources on a web page to be requested from another domain
app.use(cors()); // Enable for all origins
// setup bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//HTTP request logger middleware for node.js
app.use(morgan('combined'));
//add validation support
app.use(validation());
// SETUP static files
app.use('/public', express.static('static'));
//route base
app.get("/", (req, res) => {
  res.json({ message: "Welcome to API BASIC TEMPLATE" });
});
// setup Sequelize
var models = require("./models");
//Sync Database
models.sequelize.sync({force: false }).then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});
//add more routes
var account  = require('./route/account.js')(app);

//run server
app.listen(env.PORT, ()=> {
  console.log("Server is running on "+ env.PORT +" port");
});
