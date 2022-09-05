const routes = require('next-routes')(); //requires a function and executes it with the second ()

routes.add('/campaigns/:address','/campaigns/details');

module.exports = routes;