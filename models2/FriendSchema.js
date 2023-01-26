const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
    username: {
        type: String,
      //  required: true,
    },
    friendlist:{
        type:String
    }
   




});

const FriendModel = mongoose.model("frnds", FriendSchema);

module.exports = FriendModel;