const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type:String, maxLength: 70, required: true},
    description: {type:String, maxLength: 1000, required: true},
    price: {type: Number, min: 0, required: true},
    images: {type: [String], default: []},
    seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    is_available: {type: Boolean, default: true},
    categories: [String],
    offers: {type: [Schema.Types.ObjectId], ref: 'Offer', default: []},
    last_edited: {type: Date, default: null}
});

productSchema
  .virtual('url')
  .get(function() {
    return "http://localhost:" + process.env.PORT + '/products/' + this.id;
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;