//define the MONGOOSE SCHEMA and the MODEL for all DOCUMENTS in our 'campsites' COLLECTION
const mongoose = require("mongoose");
//create a shorthand for 'mongoose.Schema
const Schema = mongoose.Schema;
//create a new MONGOOSE SCHEMA
const campsiteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  //CONFIGS(optional)
  {
    timestamps: true,
  }
);

//create a MODEL from 'campsiteSCHEMA. Use singular, capitalized version of the collection name for both the variable and MODEL name
const Campsite = mongoose.model("Campsite", campsiteSchema);
//export the MODEL
module.exports = Campsite;
