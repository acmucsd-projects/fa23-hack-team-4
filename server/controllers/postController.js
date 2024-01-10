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
    body("post-title", "Title must not be empty.")
        .trim()
        .isLength({ min: 1, max: 80})
        .escape(),
    body("post-description", "Description must not be empty.")
        .trim()
        .isLength({ min: 1, max: 1000})
        .escape(),
    body('post-product').trim().escape(),
    (req, res, next) => {
        const errors = validationResult(req);
        if(errors.isEmpty()) {
            Product.findById(req.body['post-product'])
                .exec((err, product_result) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json({ error: 'Internal Server Error, unable to create post' });
                    }
                    else if(!product_result) res.status(404);
                    else if(product_result.seller != req.user._id) res.status(403);
                    else {
                        const newPost = Post({
                            title: req.body['post-title'],
                            description: req.body['post-description'],
                            seller: req.user,
                            product: product_result
                        });
                        newPost.save((err) => {
                            if(err) {
                                console.log(err);
                                res.status(500).json({ error: 'Internal Server Error, unable to save created post' });
                            }
                            else {res.send(newPost.url);}
                        });
                    }
                });
        }
        else res.send(errors);
    }
];

/* If the creator, could edit title, description, and product. However, last_edited should be changed to the current time.*/
exports.post_put = [
    body("post-title", "Title must not be empty.")
        .trim()
        .isLength({ min: 1, max: 80})
        .escape()
        .optional({ nullable: true, checkFalsy: true }),
    body("post-description", "Description must not be empty.")
        .trim()
        .isLength({ min: 1, max: 1000})
        .escape()
        .optional({ nullable: true, checkFalsy: true }),
    body('post-product').trim().escape().optional({ nullable: true, checkFalsy: true }),
    (req, res, next) => {
        const errors = validationResult(req);
        
        if(errors.isEmpty()) {
            Post.findById(req.params.id)
                .exec((err, post_result) => {
                    if(err) {
                        console.log(err);
                        res.status(500).json({ error: 'Internal Server Error, unable to update post' });
                    }
                    else if (!post_result) res.status(404)
                    else if(post_result.creator != req.user._id) res.status(403).send("Current user is not the creator of this post; post not updated")
                    else if(req.body['post-product']) {
                        Product.findById(req.body['post-product'])
                            .exec((err, product_result) => {
                                if(err) {
                                    console.log(err);
                                    res.status(500).json({ error: 'Internal Server Error, unable to update post' });
                                }
                                else if(!product_result) res.status(404);
                                else if(product_result.seller != req.user._id) res.status(403).send("Current user is not the seller of the product associated with the post; post not updated")
                                else {
                                    const newPost = {product: product_result};
                                    if(req.body['post-title']) newPost.name = req.body['post-title'];
                                    if(req.body['post-description']) newPost.description = req.body['post-description']
                                    newPost.last_edited = Date.now();
                                    Post.findOneAndUpdate({_id: req.params.id}, newPost)
                                        .then(res.status(204).send("Post successfully updated"));
                                }
                            });
                    }
                    else {
                        const newPost = {};
                        if(req.body['post-title']) newPost.name = req.body['post-title'];
                        if(req.body['post-description']) newPost.description = req.body['post-description']
                        newPost.last_edited = Date.now();
                        Post.findOneAndUpdate({_id: req.params.id}, newPost)
                            .then(res.status(204).send("Post successfully updated"));
                    }
                });
            
        }
        else res.send(errors);
    }
];

// Can only delete if the logged in user is the creator. 
exports.post_delete = async (req, res, next) => {
    try {
        Post.findById(req.params.id)
            .exec((err, post_result) => {
                if(err) {
                    console.log(err);
                    res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
                }
                else if(!post_result) res.status(404);
                else if(post_result.creator != req.user._id) res.status(403);
                else {
                    Post.deleteOne({_id: req.params.id})
                            .then(res.status(204).send("Post successfully deleted"));
                }
            });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error, unable to delete product' });
    }
};
