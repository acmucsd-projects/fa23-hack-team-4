const { body, validationResult } = require("express-validator");
const Post = require('../models/post');
const Product = require('../models/product');
const Offer = require('../models/offer');

exports.post_list = (req, res) => {
    res.send('general list of posts');
}

exports.post_detail = (req, res) => {
    res.send('Post with an id of ' + req.params.id);
}

exports.post_category_get = (req, res) => {
    res.send('general list of posts with a category of ' + req.params.name);
}

exports.post_create_get = (req, res, next) => {
    res.send('create post page');
};

exports.post_create_post = (req, res, next) => {
    //Actions after create post form is filled
};

exports.delete_post = async (req, res, next) => {
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
