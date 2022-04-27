class Controls {
  constructor(weapon, game, enemies) {
    this.weapon = weapon;
    this.game = game;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyW":
        case "ArrowUp":
          console.log("up");
          if (this.weapon.y > 10) {
            this.weapon.moveUp();
          }
          break;

        case "KeyS":
        case "ArrowDown":
          console.log("down");
          if (this.weapon.y + this.weapon.height < 600) {
            this.weapon.moveDown();
          }
          break;

        case "KeyD":
        case "ArrowRight":
          console.log("right");
          if (this.weapon.x + this.weapon.width < 900) {
            this.weapon.moveRigth();
          }
          break;

        case "KeyA":
        case "ArrowLeft":
          console.log("left");
          if (this.weapon.x > 10) {
            this.weapon.moveLeft();
          }
          break;
        case "Space":
          this.game.checkColision();
      }
    });
  }
}
