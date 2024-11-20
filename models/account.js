const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const accountSchema = new Schema({
    username: String,
    password: String
});

// Plugin to handle hashing and salting passwords
accountSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Account", accountSchema);
