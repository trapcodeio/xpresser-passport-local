import JobHelper from "xpresser/src/Console/JobHelper";
import {getInstance} from "xpresser";
import User, {UserDataType} from "../models/User";

const $ = getInstance();
/**
 *  Job: Install
 */
export = {
    // Job Handler
    async handler(args: string[], job: JobHelper): Promise<any> {
        // Your Job Here
        $.log('Creating your test user.');

        // Delete all users first
        await User.native().deleteMany({});

        // Create new Users
        await User.new({
            username: 'jack',
            password: 'secret',
            displayName: 'Jack',
            emails: [{value: 'jack@example.com'}]
        });

        await User.new({
            username: 'jill',
            password: 'birthday',
            displayName: 'Jill',
            emails: [{value: 'jill@example.com'}],
        });

        $.logSuccess('Created your test user.')


        // End current job process.
        return job.end(true);
    }
};