const { body, validationResult } = require("express-validator");
const Offer = require('../models/offer');
const User = require('../models/user');
const Product = require('../models/product');

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
//For saved_post_list, you’ll be getting the saved posts from the user that is currently logged in.
exports.saved_post_list = (req, res) => {
    User.find({categories: req.user.saved_posts})
        .sort({date_created: -1})
    
    .exec((err, list_saved_posts) => {
        if(err) return err;

        res.json(list_saved_posts);
    });
}

//create functions
exports.offers_create_get = (req, res) => {
    res.send('create offer page');
}

exports.offers_create_post = (req, res) => {
    body("price", "Price must be between $0.25 and Asking Price.") //25cents cuz notebooks around there
         .trim()
    //     function to check if price is in bounds
         .escape(),
    body("comment", "Comment must not be empty.")
        .trim()
        .isLength({ min: 1, max: 150})
        .escape(),
    body('buyer').trim().escape(),
    body('seller').trim().escape(),
    body('product').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        Promise.all([
            User.findById(req.body.buyer)
            .exec((err, userResult) => {
                if(err) return err;

                res.json(userResult);
            }),
            
            User.findById(req.body.seller)
            .exec((err, userResult) => {
                if(err) return err;

                res.json(userResult);
            }),
        
            Product.findById(req.body.product)
            .exec((err, productResult) => {
                if(err) return err;

                res.json(productResult);
            })
        ]).then(results => {
            if(errors.isEmpty()) {
                const newOffer = Post({
                    price: req.body.price,
                    comment: req.body.comment,
                    buyer: results[0],
                    seller: results[1],
                    product: results[2]
                });
                newOffer.save((err) => {
                    if(err) return err;
                    res.redirect(newOffer.url);
                });
            }
        });
    }
};