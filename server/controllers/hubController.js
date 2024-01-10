const { body, validationResult } = require("express-validator");
const Offer = require('../models/offer');
const User = require('../models/user');
const Product = require('../models/product');

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
    User.find({categories: req.user.saved_posts})
        .sort({date_created: -1})
    
    .exec((err, list_saved_posts) => {
        if(err) return err;

        res.json(list_saved_posts);
    });
}

//create function

exports.offers_create_post = (req, res) => {
    body("price", "Offered price must be $0.00 or above, and within 2 decimal points.") //25cents cuz notebooks around there
        .trim()
        .isFloat({ min: 0.00, max: 15000.00 })
        .matches(/^\d+(\.\d{1,2})?$/)
        .escape(),
    body("comment", "Comment must not be empty.")
        .trim()
        .isLength({ min: 1, max: 150})
        .escape(),
    // body('buyer').trim().escape(),
    body('seller').trim().escape(),
    body('product').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        Promise.all([
            User.findById(req.body.seller),
        
            Product.findById(req.body.product)
            .exec((err, productResult) => {
                if(err) return err;

                Offer.find({buyer: req.user})
                .exec((err, list_buyers) => {
                    if(list_buyers.find(req.user)) res.status(403).res.json({ error: 'Only one offer allowed per user on each post!' });
                    if(err) return err;        
                })
            }),
        ]).then(results => {
            if(errors.isEmpty()) {
                const newOffer = Post({
                    price: req.body.price,
                    comment: req.body.comment,
                    buyer: req.User,
                    seller: results[0],
                    product: results[1]
                });
                newOffer.save((err) => {
                    if(err) return err;
                    res.redirect(newOffer.url);
                });
            }
        });
    }
};