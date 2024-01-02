const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {type:String, maxLength: 70, required: true},
    description: {type:String, maxLength: 1000, required: true},
    price: {type: Number, min: 0},
    image: {data: Buffer, contentType: String},
    seller: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    is_available: {type: Boolean, default: true},
    categories: [String],
    last_edited: {type: Date, default: null},
    offers: [{type: Schema.Types.ObjectId, ref: 'Offer}'}],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;