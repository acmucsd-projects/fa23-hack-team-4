const passport = require('passport')

exports.google = passport.authenticate('google', { scope: ['email', 'profile']});

exports.google_success = (req, res) => {
  res.redirect('http://localhost:3000/dashboard');
};

exports.google_failure = (req, res) => {
  res.status(400).send("login unsuccessful");
};

exports.google_callback = passport.authenticate('google', { successRedirect: '/auth/google/success', failureRedirect: '/auth/google/failure'})

exports.logout = (req, res, next) => {
  req.logout((err) => {
    if(err) return next(err);
  })
  res.redirect('back');
}