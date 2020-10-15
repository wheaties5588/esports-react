const router = require("express").Router();
const userController = require("../controllers/userController");


// Matches with "/api/user"
router.route("/api/usernews")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/api/usernews/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);
  
  
  // Matches with "/api/user/:email"
router
.route("/api/usernews/:email")
.get(userController.findByEmail)
.put(userController.update)
.delete(userController.remove);

// router
//   .route("/api/login/:email")
//   .get(userController.findUser);

module.exports = router;


// let mongoose = require('mongoose');
// let express = require('express');
// let router = express.Router();

// let user = require('../../models');

// router.route('/create').post((req, res, next) => {
//   user.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// });

// router.route('/').get((req, res) => {
//   user.find((error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })

// router.route('/edit/:id').get((req, res) => {
//   user.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// router.route('/update/:id').put((req, res, next) => {
//   user.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('User updated successfully !')
//     }
//   })
// })

// router.route('/delete/:id').delete((req, res, next) => {
//   user.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

// module.exports = router;