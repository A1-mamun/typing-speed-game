function play() {
  //hide the home screen
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  setTextElementValueById("life", 5);
  setTextElementValueById("score", 0);
  //start and continue gam
  continueGame();
}

function continueGame() {
  const alpha = getRandomAlphabet();
  //   show random alphabet to screen
  document.getElementById("alphabet").innerText = alpha;
  setBgColor(alpha);
}

function handleKeyboardButtonPress(event) {
  // player pressed alphabet
  const playerPressed = event.key;

  if (playerPressed === "Escape") {
    gameOver();
  }
  // expected alphabet
  const expectedAlphabet = document.getElementById("alphabet").innerText;
  const currentAlphabet = expectedAlphabet.toLowerCase();

  // check matched or not
  if (playerPressed === currentAlphabet) {
    const newScore = incScore();
    setTextElementValueById("score", newScore);
    removeBgColor(currentAlphabet);
    continueGame();
  } else {
    // const currentLife = getTextElementValueById("life");
    // const updatedLife = currentLife - 1;
    const newLife = decLife();
    setTextElementValueById("life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}
// ditected key press from keyboard
document.addEventListener("keyup", handleKeyboardButtonPress);

// game over
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("score");
  setTextElementValueById("final-point", lastScore);

  const currentAlphabet = getElementTextById("alphabet");

  removeBgColor(currentAlphabet);
}
