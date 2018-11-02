import Ship from './ship';

export default class SpaceShip {
	constructor() {
		this.canvas = document.getElementsByClassName('mycanvas')[0];
		this.context = this.canvas.getContext('2d');
		this.ship = new Ship(this.context);
		this.vr = 0;
		this.vx = 0;
		this.vy = 0;
		this.thrust = 0;
		this.resize();
		this.ship.x = this.canvas.width / 2;
		this.ship.y = this.canvas.height / 2;
		window.addEventListener(
			'keydown',
			(event) => {
				switch (event.keyCode) {
					case 37: //left
						this.vr = -3;
						break;
					case 39: //right
						this.vr = 3;
						break;
					case 38: //up
						this.thrust = 0.05;
						this.ship.showFlame = true;
						break;
					case 40: //down
						if (this.vx !== 0) this.vx *= 0.9;
						if (this.vy !== 0) this.vy *= 0.9;
						break;
				}
			},
			false
		);
		window.addEventListener(
			'keyup',
			() => {
				this.vr = 0;
				this.thrust = 0;
				this.ship.showFlame = false;
			},
			false
		);
		window.addEventListener('resize', () => this.resize(), false);
		this.animation();
	}
	animation = () => {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ship.rotation += this.vr * Math.PI / 180;
    let angle = this.ship.rotation; //in radians
    this.ax = Math.cos(angle) * this.thrust;
    this.ay = Math.sin(angle) * this.thrust;
    this.vx += this.ax;
    this.vy += this.ay;
    this.ship.x += this.vx;
    this.ship.y += this.vy;
		this.ship.draw();
		requestAnimationFrame(() => this.animation());
	};
	resize = () => {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.ship.x = this.canvas.width / 2;
		this.ship.y = this.canvas.height / 2;
	};
}
