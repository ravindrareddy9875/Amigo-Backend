const mongoose = require("mongoose");

const CommentsSchema = new mongoose.Schema({
    commentername: {
        type: String,
      //  required: true,
    },
    postid: {
        type: String,
      //  required: true,
    },
    comment:{
        type: String,
     //   required: false,
    },
    postedTime:{
        type:Date,
        default:Date.now,
    },
   




});

const CommentsModel = mongoose.model("comments", CommentsSchema);

module.exports = CommentsModel;