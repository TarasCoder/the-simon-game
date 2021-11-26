let gamePattern = [];
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  selectButton(randomChosenColour);
  playSound(randomChosenColour);
}
nextSequence();

function selectButton(element){
  $("." + element).fadeOut(100).fadeIn(100);
}

function playSound(el){
  let audio = new Audio('./sounds/' + el + '.mp3');
  audio.play();
}