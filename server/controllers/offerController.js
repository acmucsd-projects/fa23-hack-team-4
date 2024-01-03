const { body, validationResult } = require("express-validator");
const Offer = require('../models/offer');

exports.delete_offer = async (req, res, next) => {
    try {
        const offerId = req.params.id;
        await Offer.findByIdAndDelete(offerId);
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, unable to delete offer' });
    }
};

