/*
 * Module dependencies.
 *  express is included within the node_modules folder.
 *  routes is a module coming from the routes folder.
 */
var express = require('express')
  , routes = require('./routes');

/*
 * Create an express server instance.
 */
var app = module.exports = express.createServer();

/*
 * Configuration.
 * Define the view engine (jade) and some other stuff. Check documentation.
 */
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

/*
 * Route the required path.
 */
app.get('/', routes.index);

/*
 * Bind a port on the server instance. Once the port is bound, the function
 * executes a callback displaying informations on the terminal.
 */
app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
