export default class drawSine {
  constructor() {
    this.canvas = document.getElementsByClassName('mycanvas')[0];
    this.context = this.canvas.getContext('2d');
    this.angle = 0;
    this.range = 50;
    this.centerY = this.canvas.height / 2;
    this.xspeed = 0.5;
    this.yspeed = 0.05;
    this.xpos = 0;
    this.ypos = this.centerY;
    this.context.lineWidth = 2;
    this.resize();

    window.addEventListener('resize', () => this.resize(), false);
    this.animation();
  }
  animation = () => {
    this.context.beginPath();
    this.context.moveTo(this.xpos, this.ypos);
    
    this.xpos += this.xspeed;
    this.angle += this.yspeed;
    this.ypos = this.centerY + Math.sin(this.angle) * this.range;
    this.context.lineTo(this.xpos, this.ypos);
    this.context.stroke();
    requestAnimationFrame(() => this.animation());
  };
  resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  };
}
