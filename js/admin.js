class Admin{

	constructor(){
		this.particulas = [];
	}


	generarParticulas(cantidad){
		console.log(this.particulas);
		for (var i = 0; i < cantidad; i++) {
			this.particulas.push( new Particula(4));
		}
	}

	mostrarParticulas(){
		for (var i = 0; i < this.particulas.length; i++) {
			this.particulas[i].draw();
		}
	}


}