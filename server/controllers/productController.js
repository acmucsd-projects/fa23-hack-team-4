const { body, validationResult } = require("express-validator");
const Product = require('../models/product')
const Offer = require('../models/offer');

exports.product_list = (req, res) => {
    Product.find({})
        .sort({date_created: -1})
        .exec((err, list_product) => {
            if(err) return err;

            res.json(list_product);
        });
}

exports.product_create = [
    body("product-name", "Name must not be empty.")
        .trim()
        .isLength({ min: 1, max: 70})
        .escape(),
    body("product-description", "Description must not be empty.")
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
    (req, res, next) => {
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            const newProduct = new Product({
                name: req.body['product-name'],
                description: req.body['product-description'],
                price: req.body['product-price'],
                categories: req.body['product-categories'],
                seller: req.user,
            });
            if(req.files) {
                let path = '';
                req.files.forEach(function(files, index, arr) {
                    path = path + files.path + ','
                })
                path = path.substring(0, path.lastIndexOf(','));
                newProduct.images = path;
            }
            else res.status(400).send('At least one image needed.');
            newProduct.save((err) => {
                if(err) console.log(err);
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
            else if(err) console.log(err);
            else res.json(product_result);
        });
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
