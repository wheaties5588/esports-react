const router = require("express").Router();
const userRoutes = require("./userRoutes");

// Post routes
router.use("/users", userRoutes);

module.exports = router;
