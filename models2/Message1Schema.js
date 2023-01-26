const mongoose = require("mongoose");

const Message1Schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    frndname: {
        type: String,
        required: true,
    },

    message: {
        type: String,
        required: true,
    },
    user1: {
        type: Boolean,
        default:true
    },
    user2: {
        type: Boolean,
        default:true
    },
    time: {
        type: Date,
        default: Date.now,
    },








});

const Message1Model = mongoose.model("pmessages", Message1Schema);

module.exports = Message1Model;