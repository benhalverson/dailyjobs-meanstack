'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfileSchema = new Schema({
  firstName: String,
  lastName: String,
  jobTitle: String,
  email: String,
  phone: String,
  summary: String,
  desiredPosition: String,
  typeOfEmployment: String,
  authorizationToWork: Boolean,
  salaryRange: Number,
  profileVisibility: String,
  location: {
    address1: String,
    address2: String,
    city: String,
    state: String,
    zipCode: Number,
  },
  profiles:[{
    network: String, // twitter, facebook etc
    username: String,
    url: String
  }
  ],
  work:[{
    companyName: String,
    position: String,
    startDate: Date,
    endDate: Date,
    summary: String
  }],
  skills:[{
    skillName: String,
    experienceLevel: Number,
    selfRating: Number
  }],
  education:[{
    institutionName: String,
    highestDegree: String,
    city: String,
    state: String
  }]
});

module.exports = mongoose.model('Profile', ProfileSchema);
