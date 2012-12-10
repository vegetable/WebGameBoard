
/*
 * GET home page.
 */
exports.index = function(req, res){
	var modelo = {
		cache: false,
		nombre : "WebGameBoard", 
		title : "WebGameBoard - Inicio",
		menu: [{
			url: "/solitario",
			txt: "Probar un mazo"
		}]
	};
	res.render("index", modelo);
};

// exportamos todos los nuevos controladores en función de su nombre de fichero
// hay que ir añadiendo los ficheros a mano aquí para que puedan ser utilizados
// en "../app.js"

// TODO:  Cargar rutas de ficheros desde el directorio actual
var fs = require("fs");
var files = fs.readdirSync(__dirname);
var routes = files.filter(noEsIndex).map(sinExtension);

function sinExtension(el, idx) {
	return el.replace(".js", "");
}

function noEsIndex(el, idx) {
	var seIncluye = el !== "index.js" && el.indexOf(".js") >= 0;
	if (seIncluye) {
		return el.replace(".js", "");
	}
}
console.log("\n=============== CONTROLADORES ==================\n\nCargando " 
	+ routes.length + " controladores");
routes.forEach(function cargarRoute(el, idx, array) {
	console.log("Cargando controlador... " + el);
	var _this = require("./" + el);
	console.log(_this);
	exports[el] = _this;
});
console.log("\n--------------------\n");
