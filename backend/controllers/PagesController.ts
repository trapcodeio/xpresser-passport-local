import {Http} from "xpresser/types/http";
import User from "../models/User";

/**
 * PagesController
 */
export = {
    // Controller Name
    name: "PagesController",

    // Controller Default Error Handler.
    e: (http: Http, error: any) => http.send({error}),


    /**
     * Index Action.
     * @param {Http} http - Current Http Instance
     * @returns {*}
     */
    index(http: Http): Http.Response {
        const user = http.req.user as User;

        return http.view('home', {user: user?.data});
    },


    profile(http: Http): Http.Response {
        const user = http.req.user as User;
        return http.view('profile', {user: user.data});
    }

};