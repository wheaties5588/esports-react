const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// setup express 

const app = express();

// Serve up static assets (usually on heroku) production deploy
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`The server has started on port: ${PORT}`));

// set up mongoose
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
    }, (err)=> {
    if(err) throw err;
    console.log("MongoDB connection established");
});

// set up routes

app.use("/users", require("./routes/userRouter"));
