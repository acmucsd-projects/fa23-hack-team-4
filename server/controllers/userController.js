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

exports.update_password = async (req, res) => {
  const { userId } = req.params;
  const { newPassword } = req.body;

  try {
    const user = await User.findById(userId);
    user.password = newPassword;
    await user.save();

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error,  could not update password' });
  }
};
