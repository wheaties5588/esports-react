const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("User email backend:  findall");
    console.log(req.query);
    db.UserNew
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("User email backend id:  ", req.params);
    db.UserNew
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByEmail: function(req, res) {
    console.log("User email backend:  ");
    db.UserNew
      .find(req.params.email)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("User email backend: create  ");
    console.log(req.body);
    db.UserNew
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    console.log("User email backend:  update");
    db.UserNew
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    console.log("User email backend:  ");
    db.UserNew
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findUser: function(req,res){
    console.log("User email backend:  ");
   console.log("I am at the find user: ");
   console.log( req.body);
     db.UserNew.findOne({ email: req.params.email })
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
  }

};
