const passport = require('passport')

exports.google = passport.authenticate('google', { scope: ['email', 'profile']});

exports.google_success = (req, res) => {
  let link = req.header('Referer');
  if(!link) {
    try {
      let cookieStr = req.header('Cookie');
      let soughtString = 'next-auth.callback-url=';
      let startIndex = cookieStr.indexOf(soughtString);
      cookieStr = cookieStr.substring(startIndex + soughtString.length);
      let endIndex = cookieStr.indexOf(';');
      cookieStr = cookieStr.substring(0, endIndex);
      link = decodeURIComponent(cookieStr);
    }catch {
      link = '/';
    }
  }
  res.redirect(link);
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