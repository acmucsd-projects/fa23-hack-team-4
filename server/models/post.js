const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, maxLength: 80, required: true},
    description: {type:String, maxLength: 1000, required: true},
    date_created: {type: Date, default: Date.now},
    last_edited: {type: Date, default: null},
    creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
});

postSchema
  .virtual('url')
  .get(function() {
    return "http://localhost:" + process.env.PORT + '/posts/' + this.id;
  });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;