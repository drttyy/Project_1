class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = 900;
    this.heigth = 600;
    this.controls = null;
    this.weapons = null;
    this.color = "";
    this.intervalId = null;
    this.timeOutEnemies = null;
    this.frames = 0;
    this.enemies = [];
    this.grandma = [];
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
    this.lifes = 3;
    this.score = 0;
    this.img = new Image();
    this.background = new Image();
  }

  drawCanvas() {
    this.board.forEach((square) => {
      /* this.background.src = "./docs/assets/images/background-predio.webp"; */
      /* this.ctx.fillRect(square.x, square.y, 100, 100);
      this.ctx.fillStyle = "white"; */
      this.img.src = "./docs/assets/images/janela.png";
      this.ctx.drawImage(this.img, square.x - 25, square.y - 25, 150, 150);
    });
  }

  start() {
    this.weapons = new Weapons(this);
    this.controls = new Controls(this.weapons, this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
    this.drawBackground();
    this.frames++;
    this.enemies.forEach((square) => {
      square.drawEnemies();
    });
    this.grandma.forEach((square) => {
      square.drawEnemies();
    });
    this.drawCanvas();
    this.weapons.draw(this.weapons);
    this.createEnemies();
    this.drawScores();
    this.drawLifes();
    this.checkGameWin(this.game);
    this.checkGameOver(this.game);
  }
  createEnemies() {
    if (this.frames % 110 === 0) {
      this.enemies = [];
      this.enemies.push(new Enemy(this, "/docs/assets/images/enemies.png"));
    }
    if (this.frames % 110 === 0) {
      this.grandma = [];
      this.grandma.push(new Enemy(this, "/docs/assets/images/avozinha.png"));
    }
  }

  checkColision() {
    let hitGrandma = null;

    this.grandma.some((grandM) => {
      if (this.weapons.crashWith(grandM)) {
        this.lifes--;
        hitGrandma = true;
      }
      this.grandma.splice(0, 1);
    });
    this.enemies.some((enemy) => {
      if (this.weapons.crashWith(enemy)) {
        this.score++;
        this.enemies.splice(0, 1);
        hitGrandma = false;
      } else {
        if (!hitGrandma) {
          this.lifes--;
        }
      }
    });
  }

  checkGameWin() {
    if (this.score === 20) {
      this.stop();
    }
  }

  checkGameOver() {
    if (this.lifes === 0) {
      this.stop();
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }

  drawScores() {
    /* this.ctx.font = "32px serif";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Score: ${this.score}`, 200, 50); */
    let scoreP = document.getElementById("score");
    scoreP.innerHTML = `Score: ${this.score}`;
  }

  drawLifes() {
    /* this.ctx.font = "32px serif";
    this.ctx.fillStyle = "Red";
    this.ctx.fillText(`Lifes: ${this.lifes}`, 400, 50); */
    let lifesP = document.getElementById("lifes");
    lifesP.innerHTML = `Lifes: ${this.lifes}`;
  }
  drawBackground() {
    this.background.src = "./docs/assets/images/background-predio.webp";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.width,
      this.heigth
    );
  }
}
