/* Fill out these functions using Mongoose queries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

   Listing.findOne({name: 'Library West'}, function(error, info){
    if(error){
      throw error;
    } 
    console.log(info);
   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */

   Listing.findOne({code: 'CABL'}, function(error, info){
    if(error){
      throw error;
    } 
    data.remove( function( error ){
      if( error ) {
        throw err;
      }
      console.log(info);
    });
   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */

   Listing.findOneAndUpdate({
    name: 'Phelps Laboratory'}, 
    {address: 'Phelps Lab, Gainesville, FL 32603'}, 

    function(error, info){
    if(error){
      throw error;
    } 
    console.log(info);

   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */

   Listing.find({}, function(error, info){
    if(error){
      throw error;
    } 
    console.log(info);
    
   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
