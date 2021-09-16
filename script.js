// Get the modal
var modal = document.getElementById("loading");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var progb = document.getElementById("progb");

// When the user clicks on the button, open the modal
function startLoading() {
  modal.style.display = "block";
  setInterval(() => {
    progb.value += 1
  }, 50)
  setTimeout(() => {
    var audio = new Audio('pisq.mp3');
    audio.play();   
  }, 35000)
}