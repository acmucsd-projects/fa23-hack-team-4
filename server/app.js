const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const passport = require('passport')
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true,
    saveUninitialized: true,
    hd: 'ucsd.edu'
  },
  async function(request, accessToken, refreshToken, profile, done) {
    const userInfo = profile._json;
    const name = userInfo.name;
    const email = userInfo.email;
    const indexOfSplit = email.indexOf('@');
    const username = email.substring(0, indexOfSplit);
    
    if(userInfo.hd !== 'ucsd.edu') done(new Error("Email must come from the domain: ucsd.edu"))
    else {
      const user = await User.findOne({ username }, (err, user) => done(err, user));
      const newUser = User({name, username, email, is_verified: true});
      newUser.save((err) => {
          if(err) return err;
          return done(err, user);
      });
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user)
});

passport.deserializeUser((user, done) => {
  done(null, user);
})

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const hubRouter = require('./routes/hub');
const authRouter = require('./routes/auth');
const User = require('./models/user');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const isLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
}
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnintialized: true,
  cookie: {secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/hub', hubRouter);
app.use('/auth', authRouter);

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
