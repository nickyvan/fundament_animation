import Arrow from './arrow';

export default class moveWithSine {
  constructor() {
    this.canvas = document.getElementsByClassName('mycanvas')[0];
    this.context = this.canvas.getContext('2d');
    this.arrow = new Arrow(this.context);
    
    this.resize();
    this.arrow.x = this.canvas.width/2;
    this.arrow.y = this.canvas.height / 2;
    this.centerY = this.canvas.height/2;
    this.vx = 5;
    this.rotY = 0;
    this.range = 50;
    this.old = 0;
    window.addEventListener('resize', () => this.resize(), false);
    this.animation();
  }
  animation = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.vy = Math.sin(this.rotY)*this.range;
    let dy = this.vy - this.old;
    // this.arrow.x += this.vx;
    this.arrow.y = this.centerY + this.vy;
    this.arrow.rotation = Math.atan2(dy,this.vx); // tăng vx thì sẽ bớt nhấp nhô
    this.old = this.vy;
    this.rotY += 0.05;
    if(this.arrow.x>this.canvas.width) this.arrow.x = 0;
    this.arrow.draw();
    requestAnimationFrame(() => this.animation());
  };
  resize = () => {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.arrow.x = this.canvas.width / 2;
    this.arrow.y = this.canvas.height / 2;
  };
}
