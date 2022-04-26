class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 800;
    this.heigth = 600;
    this.controls = null;
    this.weapons = null;
    this.color = "";
    this.intervalId = null;
    this.board = [
      { x: 100, y: 50 },
      { x: 100, y: 250 },
      { x: 100, y: 450 },
      { x: 400, y: 50 },
      { x: 400, y: 250 },
      { x: 400, y: 450 },
      { x: 700, y: 50 },
      { x: 700, y: 250 },
      { x: 700, y: 450 },
    ];
  }

  drawCanvas() {
    this.board.forEach((square) => {
      this.ctx.strokeRect(square.x, square.y, 100, 100, "black");
    });
  }

  start() {
    this.weapons = new Weapons(this);
    this.controls = new Controls(this.weapons);
    this.controls.keyboardEvents();

    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }
  /* pickOne() {
    this.board().forEach((el) => {});
     pickOne() {
      Math.random(this.board){
        this.ctx.fillRect('red')
        this.ctx.clearRect()
      }
    }
  } */

  update() {
    this.drawCanvas();
    this.weapons.draw();
  }
}
