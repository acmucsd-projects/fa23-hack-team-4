const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {type: String, maxLength: 12, required: true, unique: true},
    email: {type: String, maxLength: 254, required: true, unique: true},
    is_verified: {type: Boolean, default: false},
    password: {type: String},
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    date_of_registration: {type: Date, default: Date.now}, 
    saved_posts: {type: [Schema.Types.ObjectId], ref: 'Post', default: []},     
    contact_method: {type: [String]},
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;