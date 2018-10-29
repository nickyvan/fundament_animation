import Arrow from './arrow';

export default class dirToMouse {
  constructor() {
    this.canvas = document.getElementsByClassName('mycanvas')[0];
    this.context = this.canvas.getContext('2d');
    this.arrow = new Arrow(this.context);
    
    this.resize();
    this.arrow.x = this.canvas.width / 2;
    this.arrow.y = this.canvas.height / 2;
    this.mouse = { x: 0, y: 0 };
    this.canvas.addEventListener(
      'mousemove',
      (e) => {
        
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      },
      false
    );
    window.addEventListener('resize', () => this.resize(), false);
    this.animation();
  }
  animation = () => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let dx =  this.mouse.x - this.arrow.x ;
    let dy = this.mouse.y - this.arrow.y;
    this.arrow.rotation = Math.atan2(dy,dx);
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
