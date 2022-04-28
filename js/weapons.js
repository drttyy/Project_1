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
    /* this.game.ctx.fillStyle = "Black";
    this.game.ctx.fillRect(this.x, this.y, this.width, this.height); */
    this.img.src = "./docs/assets/images/hammer.png";
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= 50;
  }

  moveRigth() {
    this.x += 50;
  }

  moveUp() {
    this.y -= 50;
  }

  moveDown() {
    this.y += 50;
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

  crashWith(square) {
    return !(
      this.down() < square.up() ||
      this.up() > square.down() ||
      this.right() < square.left() ||
      this.left() > square.right()
    );
  }
}
