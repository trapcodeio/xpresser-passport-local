import passport = require("passport");
import {Strategy} from "passport-local";
import User from "../models/User";

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
    async (username: string, password: string, cb: any) => {
        const user = await User.findOne({username});

        // User not found
        if (!user)
            return cb(null, false);

        // Password does not match
        if (user.data.password != password)
            return cb(null, false);

        // User found and password match.
        return cb(null, user);
    }));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser((user: any, cb: any) => {
    cb(null, user.id());
});

passport.deserializeUser(async (id: any, cb: any) => {
    const user = await User.findById(id);
    cb(null, user)
});


export = passport;