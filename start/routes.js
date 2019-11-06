'use strict';

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

const Helpers = use('Helpers');

Route.group(() => {
  Route.get('/getMenu', 'ApiController.getMenu')
  Route.post('/createMenuItem', 'ApiController.createMenuItem').middleware('jwtAuth')
  Route.post('/deleteMenuItem', 'ApiController.deleteMenuItem').middleware('jwtAuth')
  Route.post('/updateMenuItem', 'ApiController.updateMenuItem').middleware('jwtAuth')
}).prefix('api/');

Route.group(() => {
  Route.get('/test', 'AuthController.test')
  Route.post('/login', 'AuthController.login')
  Route.post('/logout', 'AuthController.logout')
  Route.get('/isLoggedIn', 'AuthController.isLoggedIn').middleware('jwtAuth')
}).prefix('auth/');

Route.any('*', ({ response }) => {
  response.download(Helpers.publicPath('react/app.html'));
});
