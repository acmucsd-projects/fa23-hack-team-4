const passport = require('passport')

exports.google = passport.authenticate('google', { scope: ['email', 'profile']});

exports.google_failure = (req, res) => {
  res.status(400).send("login unsuccessful");
};

exports.google_callback = passport.authenticate('google', { successRedirect: 'back', failureRedirect: '/auth/google/failure'})

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if(err) return next(err);
  })
  res.redirect('back');
}