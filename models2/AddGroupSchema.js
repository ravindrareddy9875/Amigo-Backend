const mongoose = require("mongoose");

const AddGroupSchema = new mongoose.Schema({
    Admin: {
        type: String,
        required: true,
    },
    GroupName: {
        type: String,
        required: true,
    },
    GroupIcon:{
        type: String,
    },
    Description:{
        type: String,
    },
    Participants:{
        type: [String],
        // default:[Admin],
        
    }
   
   
});

const AddGroupModel = mongoose.model("groups", AddGroupSchema);

module.exports = AddGroupModel;