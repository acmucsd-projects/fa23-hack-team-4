const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const offerSchema = new Schema({
    product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    buyer: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    price: {type: Number, min: 0, required: true},
    comment: {type: String, maxLength: 250},
    timestamp: {type: Date, default: Date.now},
    is_accepted: {type: Boolean, default: true}, 
    is_withdrawn: {type: Boolean, default: false}
});

offerSchema
  .virtual('url')
  .get(function() {
    return "http://localhost:" + process.env.PORT + '/offers/' + this.id;
  });

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;