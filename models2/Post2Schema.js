const mongoose = require("mongoose");

const Post2Schema = new mongoose.Schema({
    username: {
        type: String,
      //  required: true,
    },
    postid: {
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
    // isliked:{
    //   type:Boolean,
    //   default:false
    // },
    



});

const Post2Model = mongoose.model("postlikes", Post2Schema);

module.exports = Post2Model;