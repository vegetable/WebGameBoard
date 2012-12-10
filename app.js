
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , mySockets = require('./mySockets')
  , http = require('http')
  , path = require('path')
  , io = require('socket.io');

var app = express();
var httpServer = http.createServer(app);

process.env.NODE_ENV = 'development';

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.set('view cache', false);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var numConectados = 0;

// socket server
var socketServer = io.listen(httpServer);

// express http server
httpServer.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});


// conexión de clientes a la aplicación
socketServer.on('connection', function(socket) {
	console.log('Cliente conectado a la interfaz de juegos, total: ' + ++numConectados);
	
	socket.broadcast.emit('nuevo cliente', { clientes : numConectados });
	
	// desconexión de clientes de la aplicación
	socket.on('disconnect', function() {
		console.log('Cliente desconectado a la interfaz de juegos, total: ' + --numConectados);
		socket.broadcast.emit('cliente de picnic', { clientes : numConectados });
	});
});


/*
// Ejemplo de notificación a los clientes
setInterval(function() {
	socketServer.of('/juego').emit('latido', {timestamp: new Date()});
}, 1000);
*/

app.get('/', routes.index);
app.get('/solitario', routes.solitario.index);
