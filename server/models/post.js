const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    post_id: {type: Number, maxLength: 70, required: true},
    title: {type: String, required: true},
    date_created: {type: Date},
    seller: {type: String, required: true}, 
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;