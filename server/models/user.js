const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    user_id: {type: Number, required: true, unique: true},
    username: {type: String, maxLength: 12, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    dateOfRegistration: {type: Date, default: Date.now}, 
    saved_posts: [{type: Schema.Types.ObjectId, ref: 'Post', }], required: true, 
    created_posts: [{type: Schema.Types.ObjectId, ref: 'Post', }], required: true,      
    contact_method: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);

module.exports = User;