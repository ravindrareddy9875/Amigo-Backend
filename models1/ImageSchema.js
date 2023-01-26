const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  image1: {
    type: String,
    required: true,
  },
  
 
  
 
});

const ImageModel = mongoose.model("images", ImageSchema);

module.exports =ImageModel;