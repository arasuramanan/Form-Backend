 const mongoose = require('mongoose');

// //Schema definition
 const detailsSchema = new mongoose.Schema({


  username: {
    type: String,
    require: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    max: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
         NameoftheUPSI: {
         type: String,
         required: true,
          },
       InfoSharedBy: {
         type: String,
         required: true,
     },
        PANNumber1: {
        type: String,
        required: true,
     },
       InfoSharedwithrespectto: {
        type: String, 
       },
       InsiderTypes: {
        type: String,
      },
        InfoSharedTo: {
         type: String,
         required: true,
       },
       PANNumber2: {
        type: String,
        required: true,
       },
       TypeofOrganization: {
         type: String,
         required: true,
       },
      NameoftheOrganization: {
        type: String,
        required: true,
       },
       DateandTimeofSharing: {
         type: Date, 
         default: Date.now 
       },
      ParticularofInfoShared: {
        type: String,
        required: true,
       },
      PurposeofSharing: {
        type: String,
        required: true,
       },
      ModeofSharing: {
        type: String,
    },
  }, { timestamps: true });
       //Model creation
 module.exports = mongoose.model('detailsofUPSIdata', detailsSchema);

