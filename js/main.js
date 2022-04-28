window.onload = () => {
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };

  /* document.getElementById("reset-btn").onclick = () => {
    reset();
  }; */

  let game = null;

  function startGame() {
    if (!game) {
      game = new Game();
      game.start();
    }
  }

  /* function reset() {
    game = new Game();
    game.start();
  } */
};
