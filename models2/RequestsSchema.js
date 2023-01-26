const mongoose = require("mongoose");

const RequestsSchema = new mongoose.Schema({
    username: {
        type: String,
      //  required: true,
    },
    Requestlist:{
        type:String
    }
   




});

const RequestsModel = mongoose.model("requests", RequestsSchema);

module.exports = RequestsModel;