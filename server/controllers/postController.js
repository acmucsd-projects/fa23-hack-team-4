const { body, validationResult } = require("express-validator");
const Post = require('../models/post');
const Product = require('../models/product');
const Offer = require('../models/offer');
const User = require('../models/user');

//Sends a general list of posts, which by default shows them by most recent.
exports.post_list = (req, res) => {
    Post.find({})
        .sort({date_created: -1})
        .exec((err, list_post) => {
            if(err) return err;

            res.json(list_post);
        });
}

//Sends details about a particular post based on ID.
exports.post_get = (req, res) => {
    Post.findById(req.params.id)
        .exec((err, post_result) => {
            if(post_result == null) res.status(404).res.json({ error: 'Page not found' });
            if(err) return err;
            res.json(post_result);
        });
}

//Sends a list of posts with the given category, which by default shows them by most recent. 
exports.post_category_get = (req, res) => {
    Post.find({categories: req.params.name})
        .sort({date_created: -1})
        .populate('seller')
        .populate('buyer')
        .exec((err, list_post) => {
            if(err) return err;

            res.json(list_post);
        })
}

//Double check if user is authenticated, sanitize data, add to database
exports.post_create = (req, res, next) => [
    body("title", "Title must not be empty.")
        .trim()
        .isLength({ min: 1, max: 80})
        .escape(),
    body("description", "Description must not be empty.")
        .trim()
        .isLength({ min: 1, max: 1000})
        .escape(),
    body('seller').trim().escape(),
    body('product').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);

        Promise.all([
            User.findById(req.body.seller)
            .exec((err, userResult) => {
                if(err) return err;
            }),
        
        Product.findById(req.body.product)
            .exec((err, productResult) => {
                if(err) return err;
            })
        ]).then(results => {
            if(errors.isEmpty()) {
                const newPost = Post({
                    title: req.body.title,
                    description: req.body.description,
                    seller: results[0],
                    product: results[1]
                });
                newPost.save((err) => {
                    if(err) return err;
                    res.redirect(newPost.url);
                });
            }
        });
    }
];

exports.post_get = (req, res) => {
    
}

/* If the creator, could edit title, description, and product. However, last_edited should be changed to the current time.*/
exports.post_put = (req, res) => {

}

// Can only delete if the logged in user is the creator. 
exports.post_delete = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        const productId = post.product;
        // deletes the associated offers with the product of the post
        const product = await Product.findById(productId).populate('offers.offer');
        const offers = product.offers;
        for (const offer of offers) {
            await Offer.findByIdAndDelete(offer._id);
        }
        // deletes the associated product
        await Product.findByIdAndDelete(productId);
        // deletes post
        await Post.findByIdAndDelete(postId);
        res.status(204).send(); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, unable to delete post' });
    }
};
