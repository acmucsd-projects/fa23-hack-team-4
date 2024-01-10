const { body, validationResult } = require("express-validator");
const Offer = require('../models/offer');

exports.offer_list = (req, res) => {
    Offer.find({})
    .sort({timestamp: -1})
    .exec((err, list_offers) => {
        if(err) return err;

        res.json(list_offers);
    });
}

exports.offer_create = (req, res) => {

}

exports.offer_get = (req, res) => {
    Offer.findById(req.params.id)
    .exec((err, offer_result) => {
        if(offer_result == null) res.status(404).res.json({ error: 'Page not found' });
        if(err) return err;
        res.json(offer_result);
    });
}

/* Allowed to update: status if the user is the seller and is_withdrawn is false
is_withdrawn if the user is the buyer
*/
exports.offer_put = (req, res) => {

}

exports.offer_delete = async (req, res) => {
    try {
        const offerId = req.params.id;
        await Offer.findByIdAndDelete(offerId);
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, unable to delete offer' });
    }
};

