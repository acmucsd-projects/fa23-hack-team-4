const { body, validationResult } = require("express-validator");
const Post = require('../models/post');
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
exports.post_create = [
    body("title", "Title must not be empty.")
        .trim()
        .isLength({ min: 1, max: 80})
        .escape(),
    body("description", "Description must not be empty.")
        .trim()
        .isLength({ min: 1, max: 1000})
        .escape(),
    body('product').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        
        Product.findById(req.body.product)
            .exec((err, productResult) => {
                if(err) return err;
            })
            .then(productResult => {
                if(errors.isEmpty()) {
                    const newPost = Post({
                        title: req.body.title,
                        description: req.body.description,
                        seller: req.user,
                        product: productResult
                    });
                    newPost.save((err) => {
                        if(err) return err;
                        res.send(newPost.url);
                    });
                }
            });
    }
];

/* If the creator, could edit title, description, and product. However, last_edited should be changed to the current time.*/
exports.post_put = (req, res) => {

}

// Can only delete if the logged in user is the creator. 
exports.post_delete = async (req, res, next) => {
    Post.findById(req.params.id)
        .exec((err, post) => {
            if(err) res.json(err.errors.message);
            else if(!post) res.status(404);
            else if(post.creator != req.user) res.status(403);
            else res.status(204);
        });
};
