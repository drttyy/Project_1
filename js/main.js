window.onload = () => {
  const game = new Game();
  document.getElementById("start-btn").onclick = () => {
    startGame();
  };

  function startGame() {
    game.drawCanvas();
  }
};
