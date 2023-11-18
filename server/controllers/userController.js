const { body, validationResult } = require("express-validator");
const User = require('../models/user');

exports.user_detail = (req, res) => {
    res.send('User with a username of ' + req.params.username);
}