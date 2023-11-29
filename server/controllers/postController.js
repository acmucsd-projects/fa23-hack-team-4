const { body, validationResult } = require("express-validator");
const Post = require('../models/post');
const User = require('../models/user');
const Product = require('../models/product');

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
exports.post_detail = (req, res) => {
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
    //res.send('general list of posts with a category of ' + req.params.name);
}

//Should check whether user is authenticated. If user is not, redirect to login or sign up.
//If they are, then show them the form to create a new post.
exports.post_create_get = (req, res, next) => {
    res.send('create post page');
};

//Double check if user is authenticated, sanitize data, add to database
exports.post_create_post = (req, res, next) => [
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