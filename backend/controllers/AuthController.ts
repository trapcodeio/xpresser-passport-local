import {Http} from "xpresser/types/http";
import passport from "../libs/PassportLocal";

/**
 * AuthController
 */
export = {
    // Controller Name
    name: "AuthController",

    middlewares: {
        '@postLogin': passport.authenticate('local', {
            failureRedirect: '/login?failed=true'
        }),
    },

    // Controller Default Error Handler.
    e: (http: Http, error: any) => http.send({error}),


    /**
     * Example Action.
     * @param {Http} http - Current Http Instance
     * @returns {*}
     */
    getLogin(http: Http): Http.Response {
        return http.view('login');
    },

    postLogin(http: Http): Http.Response {
        return http.redirect('/')
    },

    logout(http: Http): Http.Response {
        http.req.logout();
        return http.redirect('/')
    }

};