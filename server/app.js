const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const passport = require('passport')
const session = require('express-session');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const cors = require('cors')

const User = require('./models/user');

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:" + process.env.PORT + "/auth/google/callback",
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
    
    if(userInfo.hd !== 'ucsd.edu') return done(new Error("Email must come from the domain: ucsd.edu"))
    else {
      const user = await User.findOne({ username }, (err, user) => {if(user) return done(err, user)});
      if(!user) {
        const newUser = User({name, username, email, is_verified: true});
        newUser.save((err) => {
            return done(err, newUser);
        });
      }
    }
}));

passport.serializeUser((user, done) => {
  done(null, user)
});

passport.deserializeUser((user, done) => {
  done(null, user);
})

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const offersRouter = require('./routes/offers');
const productsRouter = require('./routes/products');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUnintialized: true,
  cookie: {secure: false}
}));

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: 'http://localhost:3000',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true 
}

app.use(cors(corsOptions));

const unprotectedUrls = ['auth'];
app.use((req, res, next) => {
  const urlBase = req.url.split('/')[1];
  if(unprotectedUrls.includes(urlBase) || req.user) next();
  else res.sendStatus(401);
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/offers', offersRouter);
app.use('/products', productsRouter);
app.use('/uploads', express.static('uploads'));

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true }).then(() => {
  console.log('Connected to MongoDB database');
});

module.exports = app;
