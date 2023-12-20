const { body, validationResult } = require("express-validator");

exports.hub = (req, res) => {
    res.send('main hub page');
}

exports.offer_list = (req, res) => {
    res.send('list of offers');
}

exports.offer_detail = (req, res) => {
    res.send('Detail for offer with id of ' + req.params.id);
}

exports.saved_post_list = (req, res) => {
    res.send('list of saved posts');
}