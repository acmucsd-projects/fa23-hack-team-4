const { body, validationResult } = require("express-validator");
const Product = require('../models/product');
const Offer = require('../models/offer');

exports.product_list = (req, res) => {

}

exports.product_create = (req, res) => {
    
}

exports.product_get = (req, res) => {
    
}

/* Only can edit if the logged in user is the seller.
They can edit is_available, categories at any time. [If an offer is accepted, automatically change is_available to false]
Name, description, price can be edited only if no offers are accepted. last_edited will be changed to the current date if any of these are changed. 
*/
exports.product_put = (req, res) => {
    
}

//Only allow seller to delete if there's no offers yet. Instead flag as archived if there are offers present. 
exports.product_delete = async (req, res, next) => {
    try {
        const productId = req.params.id;
        // deletes the associated offers
        const product = await Product.findById(productId).populate('offers.offer');
        const offers = product.offers;
        for (const offer of offers) {
            await Offer.findByIdAndDelete(offer._id);
        }
        await Product.findByIdAndDelete(productId);
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
    }
};
