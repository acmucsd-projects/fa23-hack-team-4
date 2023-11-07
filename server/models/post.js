const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_id: {type: Number, required: true},
    title: {type: String, maxLength: 80, required: true},
    date_created: {type: Date},
    seller: {type: mongoose.Schema.Types.ObjectId, ref:'User', required: true}, 
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;