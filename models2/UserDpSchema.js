const mongoose = require("mongoose");

const UserDpSchema = new mongoose.Schema({
    username: {
        type: String,
      //  required: true,
    },
    userdp: {
        type: String,
      //  required: true,
    },
    Gender:{
      type: String,
    },
    DOB:{
      type:String,
    }
   




});

const DpModel = mongoose.model("userdps", UserDpSchema);

module.exports = DpModel;