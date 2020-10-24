const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {type: String, maxlength: 300},
});

module.exports = Comment = mongoose.model("comment", commentSchema);