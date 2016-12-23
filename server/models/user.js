var mongoose = require('mongoose');
//schema for authenticationg user
var userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: {type:String, unique: true},
    password: String
});
var User = mongoose.model('userdetails',userSchema);
module.exports=User;
