const { body, validationResult } = require("express-validator");
const User = require('../models/user');

const Post = require('../models/post');

// Viewing your own profile
exports.viewProfile = async (req, res) => {
  try {
    const username = req.params.username;
    const currentUser = req.user; // Assuming that after authentication, details (username, ID, etc) are stored in req.user
    const user = await User.findOne({ username }); // fetches a user from the mongoDB that matches the given username

    if(!user) {
      return res.status(404).send('User not found');
    }

    const userPosts = await Post.find({ seller: user._id });

    // Check if the current user is viewing their own profile
    const isOwnProfile = currentUser && currentUser.username === username;
    
    if (isOwnProfile) {
      res.send('Viewing own profile').json({ user, userPosts });
    } else {
      res.send('Viewing other profile').json({ user, userPosts });
    }
    //res.render('profile/viewOwnProfile', { user, userPosts, isOwnProfile });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.user_detail = (req, res) => {
    res.json(req.user);
}
