const mongoose = require("mongoose");

const GroupMsgSchema = new mongoose.Schema({
    GroupName: {
        type: String,
        required: true,
    },
   username:{
    type: String,
    required: true,
   },
   message:{
    type: String,
    required: true,
   },
    postedTime:{
        type:Date,
        default:Date.now,
    },
   persons:{
    type: [String],
   }
});

const GroupMsgModel = mongoose.model("groupmessages", GroupMsgSchema);

module.exports = GroupMsgModel;