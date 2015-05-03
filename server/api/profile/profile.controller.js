/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /profile              ->  index
 * POST    /profile              ->  create
 * GET     /profile/:id          ->  show
 * PUT     /profile/:id          ->  update
 * DELETE  /profile/:id          ->  destroy
 */

'use strict';

var _ = require('lodash')
var Profile = require('./profile.model');

// Getting a list of profiles
exports.index = function(req, res) {
  Profile.find(function (err, profile) {
    if(err) {
       return handleError(res, err);
     }
    return res.json(200, profile);
  })
};

// Getting a single profile
exports.show = function(req, res) {
  Profile.findById(req.params.id, function (err, thing) {
    if(err) {
      console.error('error 1', err);
      return handleError(res, err); }
    if(!thing) {
      console.error('error 2', err);
      return res.send(404); }
    return res.json(thing);
  });
};



function handleError(res, err) {
  console.log('Something broke', err);
  return res.send(500, err);
}
