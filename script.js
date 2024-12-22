window.addEventListener("beforeunload", function (e) {
  // Cancel the event
  e.preventDefault();
});

// Disable right-click
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Right-click is disabled on this page.");
});

const rulesList = document.getElementById("RulesListID");
document.getElementById("rulesClick").addEventListener("click", () => {
  rulesList.classList.toggle("dispNone");
});

let timer=null;
const quesBox = document.getElementById("questionContainer");
const ques1 = document.getElementById("q1");
const ques2 = document.getElementById("q2");
const timeBox = document.getElementById("timer");
const setBox = document.getElementById("set-name");
let time = 0, timeLeftMin, timeLeftSec;

const firstSec = document.getElementById("first-sec");



function showQuestion(cardNumber) {
  firstSec.classList.add("dispNone");
  const Curcard = document.getElementById(`s${cardNumber}`);
  Curcard.classList.add("dispNone");
  quesBox.classList.remove("dispNone");
  startTimer(90); // 1 minute in seconds
  setBox.innerText = `Set-${cardNumber}`;
  ques1.innerText = `1) ${ques[cardNumber-1][0]}`;
  ques2.innerText = `2) ${ques[cardNumber-1][1]}`;
}

function startTimer(duration) {
  time = duration;
  timer = setInterval(updateTime, 1000);
}

function updateTime(){
  if(time > 0){
    time -= 1;
    timeLeftMin = Math.floor(time/60);
    timeLeftSec = time - timeLeftMin*60;
    let strTime = `${String(timeLeftMin).padStart(2, "0")}:${String(timeLeftSec).padStart(2, "0")}`;
    timeBox.innerText = strTime;
  }
  else{
    endQuiz();
  }
}

function endQuiz() {
  ques1.innerText = "";
  ques2.innerText = "";
  clearInterval(timer);
  quesBox.classList.add("dispNone");
  setTimeout(() => {
    alert("Time is up!");
    // Show the first section if needed
    firstSec.classList.remove("dispNone");
  }, 100);
}
