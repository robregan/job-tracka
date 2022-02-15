
const GithubStrategy = require("passport-github2").Strategy;

const passport = require("passport");
require('dotenv')





passport.use(
  new GithubStrategy(
    {
      clientID: "env",
      clientSecret: "env",
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
