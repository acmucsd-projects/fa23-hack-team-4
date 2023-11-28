const passport = require('passport');
const User = require('../models/user');

exports.registerUser = async (req, res, next) => {
  try {
    // Extract user information from the request body
    const { username, password } = req.body;

    // Use the User model's register method provided by Passport-Local-Mongoose
    await User.register(new User({ username }), password);

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
};

exports.loginUser = passport.authenticate('local', {
  successRedirect: '/hub',
  failureRedirect: '/login',
  failureFlash: true,
});

exports.logoutUser = (req, res) => {
  req.logout();
  res.json({ message: 'Logout successful' });
};