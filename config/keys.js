//figure out what keys to return for building

if (process.env.NODE_ENV === 'production') {
  // run the production keys
  module.exports = require('./prod');
} else {
  //return the development keys
  module.exports = require('./dev'); 
}