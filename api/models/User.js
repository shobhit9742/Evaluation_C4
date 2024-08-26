// const mongoose = require('mongoose');
// const {Schema} = mongoose;

// const UserSchema = new Schema({
//   name: String,
//   email: {type:String, unique:true},
//   password: String
// })

// const UserModel = mongoose.model('User', UserSchema);

// module.exports = UserModel;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true }, // Ensure username is required and unique
  password: { type: String, required: true },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
