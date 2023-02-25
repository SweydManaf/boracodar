let prevButton_1 = document.querySelectorAll(".prev")[0];
let playButton_1 = document.querySelectorAll(".pause")[0];
let nextButton_1 = document.querySelectorAll(".next")[0];
let progressBar_1 = document.querySelectorAll(".tracking")[0];
let totalTime_1 = document.querySelectorAll(".total-time")[0];
let lasTime_1 = document.querySelectorAll(".last-time")[0];

const audio = new Audio("assets/tems.mp3");
audio.controls = "controls";

playButton_1.addEventListener("click", playMusic);
audio.addEventListener("timeupdate", updateProgressBar);

function playMusic() {
  if (playButton_1.className == "play") {
    audio.pause();
    playButton_1.className = "pause";
  } else {
    audio.play();
    playButton_1.className = "play";
  }
}

function updateProgressBar() {
  var currentTime = new Date(audio.currentTime * 1000)
  var duration = new Date(audio.duration * 1000)

  lasTime_1.innerHTML = duration.toISOString().slice(14, 19)
  totalTime_1.innerHTML = currentTime.toISOString().slice(14, 19);

  progressBar_1.style.width = (currentTime / duration) * 100 + '%'

}
