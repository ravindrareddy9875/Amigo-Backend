const mongoose = require("mongoose");

const MsgSchema = new mongoose.Schema({
  
  username: {
    type: String,
    required: true,
  },
  room: {
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

const MsgModel = mongoose.model("messages", MsgSchema);

module.exports =MsgModel;