class Controls {
  constructor(weapon) {
    this.weapon = weapon;
  }

  keyboardEvents() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "KeyW":
          console.log("ola");
          if (this.weapon.y + this.weapon.height < 600) {
            this.weapon.moveUp();
          }
          break;

        case "KeyS":
          if (this.weapon.y + this.weapon.height > 10) {
            this.weapon.moveDown();
          }
          break;

        case "KeyD":
          if (this.weapon.x + this.weapon.width > 10) {
            this.weapon.moveRigth;
          }
          break;

        case "KeyA":
          if (this.weapon.x + this.weapon.width < 900) {
            this.weapon.moveLeft;
          }
          break;
      }
    });
  }
}
