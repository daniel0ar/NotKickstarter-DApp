
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

const {createServer} = require('http')
app.prepare().then(() => {
  createServer(handler).listen(3000, (err) =>{
    if (err) throw err;
    console.log('Ready on http://localhost:3000')
  })
})