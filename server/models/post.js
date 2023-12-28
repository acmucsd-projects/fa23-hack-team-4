const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, maxLength: 80, required: true},
    description: {type:String, maxLength: 1000, required: true},
    date_created: {type: Date, default: Date.now},
    seller: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}, 
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;