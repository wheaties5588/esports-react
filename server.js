const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const routes = require("./routes/newUser");
const app = express();
var session = require("express-session");
var passport = require("./config/passport");
const PORT = process.env.PORT || 3001;


app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Add routes, both API and view
app.use(routes);



// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());



// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/esports").then(() => {
  console.log('Database connected sucessfully !')
},
  error => {
    console.log('Database could not be connected : ' + error)
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
