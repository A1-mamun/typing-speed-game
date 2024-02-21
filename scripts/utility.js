// function for show an element
function hideElementByI(fieldId) {
  document.getElementById(fieldId).classList.add("hidden");
}

// function for show an element
function showElementByI(fieldId) {
  document.getElementById(fieldId).classList.remove("hidden");
}

// function for generate random alphabet
function getRandomAlphabet() {
  // create an alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  alphabetString.split(" ");

  //   get a random index number 0 to 25
  const randomIndex = Math.round(Math.random() * 25);
  return alphabetString[randomIndex];
}
