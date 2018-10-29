export default class Ball {
  constructor(radius, color, context) {
    this.radius = radius || 30;
    this.color = color || "#"+Math.floor(Math.random() * 16777215).toString(16);
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.lineWidth = 1;
  }
  draw = () => {
    this.context.save();
    this.context.translate(this.x, this.y);
    this.context.rotate(this.rotation);
    this.context.scale(this.scaleX, this.scaleY);
    this.context.lineWidth = this.lineWidth;
    this.context.fillStyle = this.color;
    this.context.beginPath();
    this.context.arc(0, 0, this.radius, 0, Math.PI * 2, true);
    this.context.closePath();
    this.context.fill();
    if (this.lineWidth > 0) {
      this.context.stroke();
    }
    this.context.restore();
  };
}
