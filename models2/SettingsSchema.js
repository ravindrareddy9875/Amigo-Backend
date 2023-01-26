const mongoose = require("mongoose");

const SettingsSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    Info:{
        type: String,
        default:'All',
    },
    Dp:{
        type: String,
        default:'All',
    }

   

});

const SettingsModel = mongoose.model("securities", SettingsSchema);

module.exports = SettingsModel;