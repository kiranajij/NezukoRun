class Obstacle {
	// constructor (x) {
	// 	this.height = 40;
	// 	this.x = x; 
	// 	this.width = 10
	// }

	render (vel) {

		fill(2, 134, 211);
		rect(this.x, 
			450-this.height, 
			this.width, 
			this.height);

		this.x -= vel;
	}

	offscreen(){
		// return true if the obstacle went offscreen
		return (this.x + this.width < 0);
	}
}