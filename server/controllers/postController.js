const { body, validationResult } = require("express-validator");
const Post = require('../models/post');

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