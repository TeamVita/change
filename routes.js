
var keys = require('./config');
var CLIENT_ID = keys.CLIENT_ID;
var API_KEY = keys.API_KEY;

var TOKEN_URI = 'https://connect.stripe.com/oauth/token';
var AUTHORIZE_URI = 'https://connect.stripe.com/oauth/authorize';

var qs = require('querystring');
var request = require('request');
var express = require('express');

var app = express();

// var headers = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "content-type, accept",
//   "access-control-max-age": 10 // Seconds.
// };

exports.authorize = function(req, res){
  // res.set(headers);
  res.send(AUTHORIZE_URI + '?' + qs.stringify({
    response_type: 'code',
    scope: 'read_write',
    client_id: CLIENT_ID,
    redirect_uri: 'http://localhost:3000/oauth'
  }));
};

exports.oauth = function(req, res){
  var code = req.query.code;

 // Make /oauth/token endpoint POST request
 request.post({
   url: TOKEN_URI,
   form: {
     grant_type: 'authorization_code',
     client_id: CLIENT_ID,
     code: code,
     client_secret: API_KEY
   }
 }, function(err, r, body) {

   var accessToken = JSON.parse(body).access_token;

   // Save accessToken in DB

   // For demo's sake, output in response:
   res.send({ 'Your Token': accessToken });

 });
};
