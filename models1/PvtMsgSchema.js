const mongoose = require("mongoose");

const PvtMsgSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
  },

  FriendmsgName: {
    type: String,
    required: true,
  },
 
  message: {
    type: String,
    required: true,
  },
  time:{
    type:String,
    
  }
 
});

const PvtMsgModel = mongoose.model("pvtmessages", PvtMsgSchema);

module.exports =PvtMsgModel;