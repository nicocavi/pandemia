var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext("2d");

var admin = new Admin();

//Creamos partiuclas iniciales
admin.generarParticulas(1000);

//loop principal
function loop(){

	//Limpiamos el canvas
	ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);	

	//Mostramos las particulas
	admin.mostrarParticulas();
}

setTimeout(loop(), 33);
