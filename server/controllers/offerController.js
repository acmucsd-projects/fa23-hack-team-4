const { body, validationResult } = require("express-validator");
const Offer = require('../models/offer');
const Product = require('../models/product');

exports.offer_list = (req, res) => {
    Offer.find({})
    .sort({timestamp: -1})
    .exec((err, list_offers) => {
        if(err) return err;

        res.json(list_offers);
    });
}

exports.offer_create = [
    body("offer-price", "Price must must be 0 or greater and is limited to 2 decimal places.") 
        .trim()
        .escape()
        .isFloat({min: 0})
        .matches(/^\d+.{0,1}\d{0,2}$/),
    body("offer-comment", "Comment must be 250 characters max.")
        .trim()
        .isLength({max: 250})
        .escape(),
    body('offer-product').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        
        if(errors.isEmpty()) {
            Product.findById(req.body['offer-product'])
                .exec((err, product_result) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json({ error: 'Internal Server Error, unable to create offer' });
                    }
                    else if(!product_result) res.status(404);
                    else {
                        const newOffer = Offer({
                            price: req.body['offer-price'],
                            comment: req.body['offer-comment'],
                            product: product_result,
                            buyer: req.user
                        });
                        newOffer.save((err) => {
                            if(err) {
                                console.log(err);
                                res.status(500).json({ error: 'Internal Server Error, unable to save created offer' });
                            }
                            else {res.send(newOffer.url);}
                        });
                    }
                });
        }
        else res.send(errors);
    }
]

exports.offer_get = (req, res) => {
    Offer.findById(req.params.id)
    .exec((err, offer_result) => {
        if(offer_result == null) res.status(404).res.json({ error: 'Page not found' });
        if(err) return err;
        res.json(offer_result);
    });
}

/* Allowed to update: is_accepted if the user is the seller and is_withdrawn is false
is_withdrawn if the user is the buyer, as well as price and comment if is_accepted is false
*/
exports.offer_put = [
    body("offer-price", "Price must must be 0 or greater and is limited to 2 decimal places.") 
        .trim()
        .escape()
        .isFloat({min: 0})
        .matches(/^\d+.{0,1}\d{0,2}$/),
    body("offer-comment", "Comment must be 250 characters max.")
        .trim()
        .isLength({max: 250})
        .escape(),
    body('offer-is_accepted', 'Accepted status must be a boolean value')
        .isBoolean()
        .optional({ nullable: true, checkFalsy: true }),
    body('offer-is_withdrawn', 'Withdrawn status must be a boolean value')
        .isBoolean()
        .optional({ nullable: true, checkFalsy: true }),
    (req, res, next) => {
        const errors = validationResult(req);
        
        if(errors.isEmpty()) {
            Offer.findById(req.params.id)
                .populate('product', 'seller')
                .exec((err, offer_result) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json({ error: 'Internal Server Error, unable to update offer' });
                    }
                    else if(!offer_result) res.status(404)
                    else if(req.body['offer-is_accepted']) {
                        if(offer_result.product.seller != req.user) res.status(403).send("Current user is not the seller of this product; offer accepted status not changed")
                        else if(!offer_result.product.is_available) res.status(403).send("Product is currently unavailable; offer accepted status not changed")
                        else {
                            
                        }
                    }
                });
        }
        else res.send(errors);
    }
]
