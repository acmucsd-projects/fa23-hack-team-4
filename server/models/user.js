const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {type: String, maxLength: 12, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    date_of_registration: {type: Date, default: Date.now}, 
    saved_posts: {type: [Schema.Types.ObjectId], ref: 'Post', required: true}, 
    created_posts: {type: [Schema.Types.ObjectId], ref: 'Post', required: true},      
    contact_method: {type: [String], required: true},
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;