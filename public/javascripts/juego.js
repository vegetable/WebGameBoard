var tablero, $tablero;
var C = {
	FONDO: '#12520F',
	LINEA_SEPARADOR: {
		FONDO: '#10174F',
		BORDE: '#fff'
	}
};
$(function() {
	// var assetsLoader = $.Deferred();
	// assetsLoader.cont = 0;
	// var assets = {
		// 'cartaBack': '/images/juego/mtgBack.png',
		// 'wallpaper': '/images/wallpapers/wallpaper1.jpg'
	// };
	// $(assets).each(function(key, value) {
		// assetsLoader.cont++;
		// var img = new Image();
		// assets[key].img = img;
		// img.onload = function() {
			// assetsLoader.cont--;
			// if (assetsLoader.cont == 0) {
				
			// }
		// };
		// img.src = value.url;
		
	// });
	
	// var imgFondo;
	// (function() {
		// var img = new Image();
	// img.src = '/images/juego/mtgBack.png';
			
			
	function limpiar() {
		function continuar() {	
			// divisor zonas juego
			g.lineWidth = 0.5;
			g.fillStyle = C.LINEA_SEPARADOR.FONDO;
			g.fillRect(10, tablero.altoMitad, tablero.ancho - 20, 5);
			g.strokeStyle = C.LINEA_SEPARADOR.BORDE;
			g.strokeRect(10, tablero.altoMitad, tablero.ancho - 20, 5);
			
			// linea mano oponente
			g.fillStyle = C.LINEA_SEPARADOR.FONDO;
			g.fillRect(10, 35, tablero.ancho - 20, 5);
			g.strokeStyle = C.LINEA_SEPARADOR.BORDE;
			g.strokeRect(10, 35, tablero.ancho - 20, 5);
			
			// for (var i = 0; i < 4; i++) {
				// img.onload = function () {
					// var proporcion = this.width / this.height;
					// g.drawImage(this, tablero.anchoMitad - (4 * 75 + 75 * i * 10), tablero.alto - 220, 75, 75 / proporcion);
				// };
				
			// }
			
			// zona mano jugador
			g.fillStyle = C.LINEA_SEPARADOR.FONDO;
			g.fillRect(10, tablero.alto - 100, tablero.ancho - 20, 5);
			g.strokeStyle = C.LINEA_SEPARADOR.BORDE;
			g.strokeRect(10, tablero.alto - 100, tablero.ancho - 20, 5);
			
			// biblioteca jugador
			var img = new Image();
			img.onload = function () {
				var proporcion = this.width / this.height;
				g.drawImage(this, 15, tablero.alto - 220, 75, 75 / proporcion);
				// g.drawImage(this, 15, 0, 0, 75, 75 / proporcion);
			};
			img.src = '/images/juego/mtgBack.png';
			
			// g.moveTo(10, tablero.altoMitad);
			// g.lineTo(tablero.ancho - 10, tablero.altoMitad);
			// g.stroke();
		}
		
		// limpiamos
		g.clearRect(0, 0, tablero.ancho, tablero.alto);
		
		var urlFondo = '/images/wallpapers/wallpaper1.jpg';
		// urlFondo = '';
		if (urlFondo) {
			var img = new Image();
			img.src = urlFondo;
			img.onload = function() {
				g.drawImage(img, 0, 0, tablero.ancho, tablero.alto);
				continuar();
			};
		} else {
			// ponemos el fondo por defecto
			g.fillStyle = C.FONDO;
			g.fillRect(0, 0, $tablero.width(), $tablero.height());
			continuar();
		}
	}
	
	$tablero = $('#tablero');
	tablero = $tablero.get(0);
	tablero.ancho = $tablero.width();
	tablero.alto = $tablero.height();
	tablero.anchoMitad = Math.round(tablero.ancho / 2);
	tablero.altoMitad = Math.round(tablero.alto / 2);
	var g = tablero.getContext('2d');
	limpiar();
});