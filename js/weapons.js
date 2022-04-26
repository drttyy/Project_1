class Weapons {
  constructor(game) {
    this.game = game;
    this.x = 450;
    this.y = 300;
    this.width = 75;
    this.height = 75;
    this.img = new Image();
    this.color = "";
  }

  draw() {
    this.game.ctx.fillRect(this.x, this.y, 75, 75);
  }

  moveLeft() {
    this.x -= 10;
  }

  moveRigth() {
    this.x += 10;
  }

  moveUp() {
    this.y -= 10;
  }

  moveDown() {
    this.y += 10;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.width;
  }
  up() {
    return this.y;
  }

  down() {
    return this.y + this.width;
  }
}
