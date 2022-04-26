window.onload = () => {
  let game = null;
  document.getElementById("start-btn").onclick = () => {
    game = new Game();
    game.start();
    game.update();
  };
};
