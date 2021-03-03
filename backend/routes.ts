import {getInstanceRouter} from "xpresser";
/**
 * See https://xpresserjs.com/router/
 */
const Route = getInstanceRouter();

/**
 * Url: "/" points to AppController@index
 * The index method of the controller.
 */
Route.get('/', 'Pages@index');
Route.get('/login', 'Auth@getLogin');
Route.post('/login', 'Auth@postLogin');
Route.get('/logout', 'Auth@logout');

Route.get('/profile', 'Pages@profile');
