const mongoose = require("mongoose");
const db = require("../models");




// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/esports").then(() => {
  console.log('Database connected sucessfully !')
},
  error => {
    console.log('Database could not be connected : ' + error)
  }
);



console.log(db);

const userSeed = [
  {
    firstName: "Matthew",
    lastName: "Wieciech",
    username: "Wheaties",
    email: "matt.wieciech@gmail.com",
    password: "123456789",
    securityQuestion1: "Blah1",
    securityQuestion2: "Blah2",
    date: { type: Date, default: Date.now }
  },
  {
    firstName: "Jason",
    lastName: "Cruz",
    username: "GodofMagic",
    email: "jason@gmail.com",
    password: "123456789",
    securityQuestion1: "Blah1",
    securityQuestion2: "Blah2",
    date: { type: Date, default: Date.now }
  }
];

db.UserNew.remove({})
  .then(() => db.UserNew.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
