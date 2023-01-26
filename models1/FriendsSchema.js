const mongoose = require("mongoose");

const FriendsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  
  FriendName: {
    type: String,
    required: true,
  },
 
  
 
});

const FriendsModel = mongoose.model("friends", FriendsSchema);

module.exports =FriendsModel;