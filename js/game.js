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
    this.countdown = 120;
    this.isRunning = false;
  }

  drawCanvas() {
    this.board.forEach((square) => {
      this.img.src = "./docs/assets/images/janela.png";
      this.ctx.drawImage(this.img, square.x - 25, square.y - 25, 150, 150);
    });
  }

  start() {
    this.isRunning = true;
    this.weapons = new Weapons(this);
    this.controls = new Controls(this.weapons, this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60);

    /* this.isRunning = true;
    this.weapons = new Weapons(this);
    this.controls = new Controls(this.weapons, this);
    this.controls.keyboardEvents();
    this.intervalId = setInterval(() => {
      this.update();
    }, 1000 / 60); */
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.heigth);
    this.drawBackground();
    this.countdown = 120 - Math.floor(this.frames / 60);
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
    this.timer();
    this.checkGameWin();
    this.checkGameOver();
  }
  createEnemies() {
    if (this.frames % 120 === 0) {
      this.enemies = [];
      this.enemies.push(new Enemy(this, "./docs/assets/images/enemies.png"));
    }
    if (this.frames % 120 === 0) {
      this.grandma = [];
      this.grandma.push(new Enemy(this, "./docs/assets/images/avozinha.png"));
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
      /* this.showHighScores(); */
      this.isRunning = false;
    }
  }

  checkGameOver() {
    if (this.lifes === 0) {
      this.stop();
      this.isRunning = false;
      this.gameOver();
      /* this.showHighScores() */
    }
    if (this.timer() === 0) {
      this.stop();
      /* this.showHighScores(); */
      this.isRunning = false;
      this.gameOver();
    }
  }
  stop() {
    clearInterval(this.intervalId);
    /*  document.getElementById("reset-btn").classList.remove("hidden"); */
  }

  drawScores() {
    let scoreP = document.getElementById("score");
    scoreP.innerHTML = `Score: ${this.score}`;
  }

  drawLifes() {
    let lifesP = document.getElementById("lifes");
    lifesP.innerHTML = `Lifes: ${this.lifes}`;
  }
  drawBackground() {
    this.background.src = "./docs/assets/images/wallbackground2.jpg";
    this.ctx.drawImage(
      this.background,
      this.x,
      this.y,
      this.width,
      this.heigth
    );
  }

  timer() {
    this.ctx.font = "25px Patrick Hand";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`Time: ${this.countdown}`, 775, 25);
  }
  gameOver() {
    this.ctx.font = "50px Patrick Hand";
    this.ctx.fillText(`GAME OVER!!`, 350, 220);
    this.ctx.fillStyle = "white";
  }
}

/* checkHighScore() {
    this.numberHS = "highScores";
    const highScoreString = localStorage.getItem(this.numberHS);
    let lowestScore = 0;
    if (highScoreString) {
      this.numberHS = JSON.parse(highScoreString);
      lowestScore = this.numberHS[this.numberHS.length - 1].score;
    }
    if (this.score > lowestScore) {
      this.saveHighScore(this.score, highScores);
      this.showHighScores();
    }
  }

  saveHighScore(score, highScores) {
    prompt(`You got a highscore! Enter name:`);
    const newScore = { score };
    // 1. Add to list
    this.numberHs.push();
    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);
    // 3. Select new list
    highScores.splice(N);
    // 4. Save to local storage
    localStorage.setItem(this.numberHS, JSON.stringify(highScores));
  }
  showHighScores() {
    this.numberHS = "highScores";
    const highScores = JSON.parse(localStorage.getItem(this.numberHS));
    const highScoreList = document.getElementById("highScores");
    highScoreList.innerHTML = highScores
      .map((score) => `<li>${score.score} - ${score.name}`)
      .join("");
  }
} */
