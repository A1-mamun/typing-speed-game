function play() {
  //hide the home screen
  hideElementByI("home-screen");
  //show the playground
  showElementByI("play-ground");
  //start and continue game
  continueGame();
}

function continueGame() {
  const alpha = getRandomAlphabet();
  //   show random alphabet to screen
  document.getElementById("alphabet").innerText = alpha;
}
