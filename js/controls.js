class Controls {
  constructor(weapon) {
    this.weapon = weapon;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyW":
          console.log("up");
          if (this.weapon.y + this.weapon.height < 900) {
            this.weapon.moveUp();
          }
          break;

        case "KeyS":
          console.log("down");
          if (this.weapon.y + this.weapon.height > 10) {
            this.weapon.moveDown();
          }
          break;

        case "KeyD":
          console.log("right");
          if (this.weapon.x + this.weapon.width > 10) {
            this.weapon.moveRigth();
          }
          break;

        case "KeyA":
          console.log("left");
          if (this.weapon.x + this.weapon.width < 600) {
            this.weapon.moveLeft();
          }
          break;
      }
    });
  }
}
