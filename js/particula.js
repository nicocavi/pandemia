class Particula{

	constructor(speed){
		this.state = 0;
		this.x = Math.random() * document.querySelector("#canvas").clientWidth;
		this.y = Math.random() * document.querySelector("#canvas").clientHeight;
		this.speed = speed;
		this.radio = 3;
	}

	draw(){
		let canvas = document.querySelector("#canvas");
		var ctx = canvas.getContext("2d");

		ctx.beginPath();

		//Dibuja particula
		ctx.arc( this.x, this.y, this.radio, 0, Math.PI*2, true);

		//Rellena la particula
		ctx.fill();
	}

	move(){

	}

}