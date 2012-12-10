var socketG = io.connect('http://localhost:3000/');
var socket = io.connect('http://localhost:3000/juego');
socket.emit('connect', function(err, ok) {
	if (error) {
		alert('Se produjo un error al conectar');
	} else {
		console.log('Conectado correctamente al servidor');
	}
});

socket.on('latido', function(data) {
	console.log('Conectado! ' + data.timestamp);
});
socketG.on('nuevo cliente', function(data) {
	// alert(navigator.userAgent  + '\nGLOBAL Nuevo cliente conectado!\nYa somos ' + data.clientes);
	$.jGrowl('<p>Nuevo cliente conectado!<p>Ya somos ' + data.clientes);
});
socketG.on('cliente de picnic', function(data) {
	$.jGrowl('<p>Vaya! Alguien nos ha dejado!<p>Ahora somos ' + data.clientes);
});