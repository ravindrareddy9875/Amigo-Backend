const mongoose = require("mongoose");

const GrpRequestsSchema = new mongoose.Schema({
    Admin: {
        type: String,
      //  required: true,
    },
    GroupName:{
        type:String
    },
    Requestlist:{
        type:String
    }
   




});

const GrpRequestsModel = mongoose.model("grprequests", GrpRequestsSchema);

module.exports = GrpRequestsModel;