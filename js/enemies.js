class Enemy {
  constructor(game) {
    this.game = game;
    this.x =
      this.game.board[Math.floor(Math.random() * this.game.board.length)].x;
    this.y =
      this.game.board[Math.floor(Math.random() * this.game.board.length)].y;
    this.height = 100;
    this.width = 100;
  }

  drawEnemies() {
    this.game.ctx.fillStyle = "red";
    this.game.ctx.fillRect(this.x, this.y, this.height, this.width);
  }
}
