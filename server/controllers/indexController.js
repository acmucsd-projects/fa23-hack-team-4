const { body, validationResult } = require("express-validator");

exports.index = (req, res) => {
    res.send('index page');
}

exports.login = (req, res) => {
    res.send('login page');
}