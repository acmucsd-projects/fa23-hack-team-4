const User = require('../models/user');

exports.user_get = async (req, res) => {
  User.findOne({username: req.params.username})
    .exec((err, user) => {
      if(err) return err;
      if(!user) res.status(404).send('User not found');
      else res.json(user);
    });
};

exports.user_detail = (req, res) => {
    res.json(req.user);
}
