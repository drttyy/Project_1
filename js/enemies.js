class Enemy {
  constructor(game, src) {
    this.game = game;
    this.x =
      this.game.board[Math.floor(Math.random() * this.game.board.length)].x;
    this.y =
      this.game.board[Math.floor(Math.random() * this.game.board.length)].y;
    this.height = 100;
    this.width = 100;
    this.img = new Image();
    this.src = src;
  }

  drawEnemies() {
    this.img.src = this.src;
    this.game.ctx.drawImage(this.img, this.x, this.y, 100, 100);
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
