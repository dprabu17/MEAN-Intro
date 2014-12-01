var mongoose = require('mongoose');

//define schema
module.exports = mongoose.model('Meetup',{
  name: { type: String, require: true }
});