// function for show an element
function hideElementById(fieldId) {
  document.getElementById(fieldId).classList.add("hidden");
}

// function for show an element
function showElementById(fieldId) {
  document.getElementById(fieldId).classList.remove("hidden");
}

// add background color
function setBgColor(fieldId) {
  document.getElementById(fieldId).classList.add("bg-orange-400");
}

// remove bg color
function removeBgColor(fieldId) {
  document.getElementById(fieldId).classList.remove("bg-orange-400");
}

// increment score
function incScore() {
  const currentScore = getTextElementValueById("score");
  const updatedScore = currentScore + 1;
  return updatedScore;
}

// get text element by id
function getTextElementValueById(fieldId) {
  const element = document.getElementById(fieldId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

// set text element by id
function setTextElementValueById(fieldId, value) {
  const element = document.getElementById(fieldId);
  element.innerText = value;
}

function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

// function for generate random alphabet
function getRandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  //   get a random index number 0 to 25
  const randomIndex = Math.round(Math.random() * 25);
  return alphabets[randomIndex];
}

// decrement life
function decLife() {
  const currentLife = getTextElementValueById("life");
  const updatedLife = currentLife - 1;
  return updatedLife;
}
