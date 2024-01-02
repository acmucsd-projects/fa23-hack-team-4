const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true},
    buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    price: {type: Number, min: 0, required: true},
    comment: {type: String, maxLength: 250},
    timestamp: {type: Date, default: Date.now},
    status: {type: String, required: true, enum: ['pending', 'accepted', 'rejected'], default: 'pending'}, 
    is_withdrawn: {type: Boolean, default: false}
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;