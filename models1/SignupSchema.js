const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
 
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
  },

});

const SignupModel = mongoose.model("signups", SignupSchema);

module.exports =SignupModel;