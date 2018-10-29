import Ball from './ball';

export default class dirToMouse {
  constructor() {
    this.canvas = document.getElementsByClassName('mycanvas')[0];
    this.context = this.canvas.getContext('2d');
    this.ball = new Ball(null,null,this.context);

    this.resize();
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
    this.range = 100;
    this.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    this.rotX = 0;
    this.rotY = 40;
    window.addEventListener('resize', () => this.resize(), false);
    this.animation();
  }
  animation = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ball.x = this.center.x + Math.sin(this.rotX) * this.range;
    this.ball.y = this.center.y + Math.cos(this.rotY) * this.range;
    this.rotX += 0.01;
    this.rotY += 0.1;
    this.ball.draw();
    requestAnimationFrame(() => this.animation());
  };
  resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
  };
}
