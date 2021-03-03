import {DollarSign} from "xpresser/types";

export =  (next: any, $: DollarSign) => {

    /**
     * Initialize Passport on express Init
     */
    $.on.expressInit(n => {
        const passport = require('./PassportLocal');

        $.app!.use(passport.initialize());
        $.app!.use(passport.session());

        return n()
    });

    return next();
}