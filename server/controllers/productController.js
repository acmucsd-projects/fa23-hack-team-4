const { body, validationResult } = require("express-validator");
const Product = require('../models/product');
const Offer = require('../models/offer');

exports.delete_product = async (req, res, next) => {
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

