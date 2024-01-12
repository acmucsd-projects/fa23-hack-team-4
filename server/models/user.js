const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, maxLength: 50, required: true, unique: true},
    email: {type: String, maxLength: 254, required: true, unique: true},
    is_verified: {type: Boolean, default: false},
    password: {type: String},
    name: {type: String, required: true},
    date_of_registration: {type: Date, default: Date.now}, 
    saved_products: {type: [Schema.Types.ObjectId], ref: 'Product', default: []},     
    contact_method: {type: [String]},
});

userSchema
  .virtual('url')
  .get(function() {
    return "http://localhost:" + process.env.PORT + '/users/' + this.username;
  });

const User = mongoose.model('User', userSchema);

module.exports = User;