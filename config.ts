/**
 * Your Config File.
 * See https://xpresserjs.com/configuration/
 */
export = {
    // name of app
    name: 'XpressPassport',

    // app environment
    env: 'development',

    /**
     * By default xpresser sets this for you.
     */
    server: {
        domain: 'localhost',
        // Server Port
        port: 3777,
    },

    /**
     * Path settings.
     */
    paths: {
        /**
         * Base Folder
         * Where this app is called from.
         *
         * Best value for this is: __dirname
         */
        base: __dirname,

        /**
         * Point routes file to routes.ts
         */
        routesFile: "backend://routes.ts"
    },

    mongodb: {
        url: 'mongodb://127.0.0.1:27017',
        database: 'XpressPassport',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }
};
