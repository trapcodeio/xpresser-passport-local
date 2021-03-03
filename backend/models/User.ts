import {is} from 'xpress-mongo';
import {DBCollection} from '@xpresser/xpress-mongo';

// Model Interface (optional)
export interface UserDataType {
    _id?: Object,
    emails: ({ value: string })[],
    displayName: string,
    username: string,
    password: string,
}

/**
 * @class User
 * @extends XMongoModel
 */
class User extends DBCollection('users') {

    // Set Model Schema
    static schema = {
        emails: is.Array().required(),
        displayName: is.String().required(),
        username: is.String().required(),
        password: is.String().required(),
        createdAt: is.Date().required()
    };

    // Set Model data type (optional)
    public data!: UserDataType;
}

export default User;
