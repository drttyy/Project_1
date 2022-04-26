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
    this.timeOutEnemies = null;
    this.frames = 0;
    this.enemies = [];
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
    this.timeOut = null;
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

  update() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
    this.frames++;
    this.drawCanvas();
    this.weapons.draw(this.weapons);
    this.createEnemies();
    this.enemies.forEach((square) => {
      square.drawEnemies();
    });
  }
  createEnemies() {
    if (this.frames % 100 === 0) {
      this.enemies = [];
      this.enemies.push(new Enemy(this));
    }
    /* this.timeOutEnemies = setTimeout(() => {
      this.enemies.drawEnemies();
    }); */
  }

  checkColision() {}
}
