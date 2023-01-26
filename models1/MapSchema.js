const mongoose = require("mongoose");

const MapSchema = new mongoose.Schema({
  house: {
    type: String,
    required: true,
  },
 
  latitude: {
    type: String,
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
 

});

const MapModel = mongoose.model("maps", MapSchema);

module.exports =MapModel;