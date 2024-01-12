const { body, validationResult } = require("express-validator");
const Product = require('../models/product')
const Offer = require('../models/offer');
const fs = require('fs');
const {handleQuery} = require('../helpers/queryHandler');

function deleteImages(product) {
    for(let i = 0; i < product.images.length; i++) {
        fs.unlink(product.images[i], (err) => {
            if(err) {
                console.log(err);
                res.status(500).json({ error: 'Error while deleting images, unable to delete product' });
            }
        });
    }
}

exports.product_list = (req, res) => {
    Product.find(handleQuery(req.query.filter))
        .populate('seller')
        .sort(handleQuery(req.query.sort))
        .exec((err, list_product) => {
            if(err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error, unable to get product' });
            }
            res.status(200).json(list_product);
        });
}

exports.product_create = [
    body("product-name", "Name must not be empty and be 70 characters maximum.")
        .trim()
        .isLength({ min: 1, max: 70})
        .escape(),
    body("product-description", "Description must not be empty and be 1000 characters maximum.")
        .trim()
        .isLength({ min: 1, max: 1000})
        .escape(),
    body('product-price', "Price must must be 0 or greater and is limited to 2 decimal places.")
        .trim()
        .isFloat({min: 0})
        .matches(/^\d+.{0,1}\d{0,2}$/)
        .escape(),
    body('product-categories', "Categories must be a list of strings")
        .isArray()
        .optional({ nullable: true }),
    body("product-categories.*").trim().escape(),
    body("product-is_on_campus", "On campus availability must be a boolean value")
        .isBoolean(),
    (req, res, next) => {
        console.log(req.body);
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            const newProduct = new Product({
                name: req.body['product-name'],
                description: req.body['product-description'],
                price: req.body['product-price'],
                categories: req.body['product-categories'],
                is_on_campus: req.body['product-is_on_campus'],
                seller: req.user,
            });
            if(req.files) {
                let path = []
                req.files.forEach(function(files, index, arr) {
                    path.push(files.path)
                })
                newProduct.images = path;
            }
            else res.status(400).send('At least one image needed.');
            newProduct.save((err) => {
                if(err) {
                    console.log(err);
                    res.status(500).json({ error: 'Internal Server Error, unable to save created product' });
                }
                res.send(newProduct.url);
            });
        }
        else res.send(errors);
    }
];

exports.product_get = (req, res) => {
    Product.findById(req.params.id)
        .exec((err, product_result) => {
            if(product_result == null) res.status(404).json({ error: 'Product not found' });
            else if(err) {
                console.log(err);
                res.status(500).json({ error: 'Internal Server Error, unable to get product' });
            }
            else res.json(product_result);
        });
}

/* Only can edit if the logged in user is the seller.
They can edit is_available, categories at any time. [If an offer is accepted, automatically change is_available to false]
Name, description, price can also be edited by the seller at any time, but last_edited will be changed to the current date if any of the previous are changed. 
*/
exports.product_put = [
    body("product-name", "Name must not be empty and be 70 characters maximum.")
        .trim()
        .isLength({ min: 1, max: 70})
        .escape()
        .optional({ nullable: true, checkFalsy: true }),
    body("product-description", "Description must not be empty and be 1000 characters maximum.")
        .trim()
        .isLength({ min: 1, max: 1000})
        .escape()
        .optional({ nullable: true, checkFalsy: true }),
    body('product-price', "Price must must be 0 or greater and is limited to 2 decimal places.")
        .trim()
        .isFloat({min: 0})
        .matches(/^\d+.{0,1}\d{0,2}$/)
        .escape()
        .optional({ nullable: true, checkFalsy: true }),
    body("product-is_available", "Availability must be a boolean value")
        .isBoolean()
        .optional({ nullable: true, checkFalsy: true }),
    body('product-categories', "Categories must be a list of strings")
        .isArray()
        .optional({ nullable: true, checkFalsy: true }),
    body("product-categories.*").trim().escape(),
    body("product-is_on_campus", "On campus availability must be a boolean value")
        .isBoolean()
        .optional({ nullable: true, checkFalsy: true }),
    (req, res, next) => {
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            Product.findById(req.params.id)
                .populate('offers', '_id is_accepted')
                .exec((err, product_result) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
                    }
                    else if(!product_result) res.status(404).json({error: "Product not found"})
                    else if(product_result.seller != req.user._id) res.status(403).send("Current user is not the seller of this product; product not updated")
                    else {
                        const newProduct = {}
                        if(req.body['product-name']) newProduct.name = req.body['product-name'];
                        if(req.body['product-description']) newProduct.description = req.body['product-description']
                        if(req.body['product-price']) newProduct.price = req.body['product-price'];
                        if(req.body['product-categories']) newProduct.categories = req.body['product-categories'];
                        if(req.body['product-is_on_campus']) newProduct.is_on_campus = req.body['product-is_on_campus'];
                        if(req.files) {
                            deleteImages(product_result);
                            let path = []
                            req.files.forEach(function(files, index, arr) {
                                path.push(files.path)
                            })
                            newProduct.images = path;
                        }
                        if(req.body['product-is_available']) {
                            newProduct.is_available = req.body['product-is_available'];
                            if(!newProduct.is_available) {
                                try{Offer.updateMany({product: req.params.id}, {is_accepted: false});}
                                catch(error) {
                                    console.log(error)
                                    res.status(500).json({ error: 'Error while updating associated offers, unable to update product'});
                                }
                            }
                        } 

                        if(req.body['product-name'] || req.body['product-description'] || req.body['product-price']) newProduct.last_edited = Date.now();

                        Product.findOneAndUpdate({_id: req.params.id}, newProduct)
                            .then(res.status(204).send("Product successfully updated"));
                    }
                });
        }
        else res.send(errors);
    }
];

//Only allow seller to delete if there's no offers yet. 
//If deletion is successful, also need to delete any associated images.
exports.product_delete = async (req, res, next) => {
    try {
        const productId = req.params.id;
        Product.findById(productId)
            .exec((err, product_result) => {
                if(err) {
                    console.log(err);
                    res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
                }
                else if(!product_result) res.status(404).json({error: "Product not found"})
                else if(product_result.seller != req.user._id) res.status(403).json({error: "User is not the product's seller, unable to delete product"})
                else {
                    Offer.find({product: product_result})
                        .exec((err, offer_result) => {
                            if(err) {
                                console.log(err);
                                res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
                            }
                            else if(offer_result.length != 0) res.status(403).json({error: "Product already contains offers, unable to delete product."})
                            else {
                                if(product_result.images) deleteImages(product_result);
                                Product.deleteOne({_id: productId})
                                    .then(res.status(204).send("Product successfully deleted"));
                            }
                        });
                }
            });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
    }
};
