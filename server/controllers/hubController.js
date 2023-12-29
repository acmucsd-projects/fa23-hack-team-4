const { body, validationResult } = require("express-validator");
const Offer = require('../models/offer');
const User = require('../models/user');

exports.hub = (req, res) => {

    res.send('main hub page');
}

exports.offer_list = (req, res) => {
    Offer.find({})
    .sort({timestamp: -1})
    .exec((err, list_offers) => {
        if(err) return err;

        res.json(list_offers);
    });
}

//Detail for offer with id of 
exports.offer_detail = (req, res) => {
    Offer.findById(req.params.id)
    .exec((err, offer_result) => {
        if(offer_result == null) res.status(404).res.json({ error: 'Page not found' });
        if(err) return err;
        res.json(offer_result);
    });
}

//list of saved posts'
exports.saved_post_list = (req, res) => {
    User.find({categories: req.params.saved_posts})
        .sort({date_created: -1})
    
    .exec((err, list_offers) => {
        if(err) return err;

        res.json(list_post);
    });
}

//create functions
exports.create_get = (req, res) => {
    res.send('create offer page');
}

exports.create_offer = (req, res) => {
    
}