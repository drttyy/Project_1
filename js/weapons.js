class Weapons {
  constructor(game) {
    this.game = game;
    this.x = 450;
    this.y = 300;
    this.width = 0;
    this.height = 0;
    this.img = new Image();
    this.color = "";
  }

  draw() {
    this.game.ctx.fillRect(this.x, this.y, 75, 75);
  }

  moveLeft() {
    this.x -= 25;
  }

  moveRigth() {
    this.x += 25;
  }

  moveUp() {
    this.y -= 25;
  }

  moveDown() {
    this.y += 25;
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
