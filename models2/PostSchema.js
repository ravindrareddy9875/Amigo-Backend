const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    username: {
        type: String,
      //  required: true,
    },

    userPic: {
        type: String,
      //  required: true,
    },
    userPost: {
        type: String,
      //  required: true,
    },
    likedCount:{
      type: Number,
      default:0
    },
    likedPerson: {
        type: [String],
      //  required: true,
    },
    description:{
        type: String,
     //   required: false,
    },
    postedTime:{
        type:Date,
        default:Date.now,
    },
   




});

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;