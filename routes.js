const routes = require('next-routes')(); //requires a function and executes it with the second ()

routes
    .add('/campaigns/:address','/campaigns/details')
    .add('/campaigns/:address/requests','/campaigns/requests/index')
    .add('/campaigns/:address/requests/new','/campaigns/requests/new')

module.exports = routes;