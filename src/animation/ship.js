export default class Arrow {
	constructor(context) {
		this.context = context;
		this.x = 0;
		this.y = 0;
		this.width = 25;
		this.height = 20;
		this.rotation = 0;
		this.showFlame = false;
		this.color = '#abc';
		this.flame = '#fb2';
	}
	draw = () => {
		this.context.save();
		this.context.translate(this.x, this.y);
		this.context.rotate(this.rotation);
		this.context.lineWidth = 1;
		this.context.fillStyle = this.color;
		this.context.beginPath();
		this.context.moveTo(10, 0);
		this.context.lineTo(-10, 10);
		this.context.lineTo(-5, 0);
		this.context.lineTo(-10, -10);
    this.context.lineTo(10, 0);
    this.context.fill();
		this.context.stroke();
		if (this.showFlame) {
			this.context.beginPath();
			this.context.moveTo(-7.5, -5);
			this.context.lineTo(-15, 0);
      this.context.lineTo(-7.5, 5);
      this.context.fillStyle = this.flame;
      this.context.fill();
			this.context.stroke();
		}
		this.context.restore();
	};
}
