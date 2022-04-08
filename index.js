//require MONGOOSE
const mongoose = require("mongoose");
//IMPORT our 'Campsite' MODEL
const Campsite = require("./models/campsite");
const url = "mongodb://localhost:27017/nucampsite";
//CONNECT to the MONGODB 'nucampsite' via MONGOOSE wrapped around MONGODB NODE DRIVER
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//connect METHOD returns PROMISE(built-in NODE functionality)
connect.then(() => {
  console.log("Connected correctly to the server.");
  //instantiate a NEW DOCUMENT using the 'Campsite' MODEL using the 'create()' METHOD returning a PROMISE to create a NEW DOCUMENT
  Campsite.create({
    name: "React Lake Campground",
    description: "Still moist.",
  })
    //****BELOW Code uses the 'New' KEYWORD to instantiate an instance of the 'Campsite' MODEL(create a NEW DOCUMENT). Requires 'mongoose.save()' METHOD to save to DB. UPDATED ABOVE */
    // const newCampsite = new Campsite({
    //   name: "React Lake Campground",
    //   description: "moist",
    // });
    // //use mongoose.save() METHOD to save DOCUMENT to DB and return a PROMISE indicating success/failure
    // newCampsite
    //   .save()
    .then((campsite) => {
      //log the NEW DOCUMENT added
      console.log(campsite);
      //return ALL DOCUMENTS(instances) of the 'Campsite' MODEL as a PROMISE
      return Campsite.find();
    })
    //if SUCCESSFUL return all DOCUMENTS as an ARRAY
    .then((campsites) => {
      console.log(campsites);
      //delete ALL DOCUMENTS that use the 'Campsite' MODEL
      return Campsite.deleteMany();
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
    });
});
