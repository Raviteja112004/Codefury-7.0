const passport= require('passport');
const GoogleStrategy = require('passport-google-oauth2');

passport.serializeUser((user, done)=>{
    done(null, user);
})

passport.deserializeUser(function(user,data){
    done(null,user);
})

passport.use(new GoogleStrategy({
    clientID:process.env
}))