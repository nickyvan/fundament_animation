export default class Arrow {
  constructor(context) {
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.color = '#ffff00';
    this.rotation = 0;
  }
  draw = () => {
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.rotation);
    this.context.lineWidth = 1;
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.moveTo(-10, -10);
    this.context.lineTo(-10, 10);
    this.context.lineTo(20, 0);
    this.context.closePath();
    this.context.fill();
    this.context.stroke();
    this.context.restore();
  };
}
