const clockContent = document.querySelector("h2");
const dayContent = document.querySelector("h3");
const dataContent = document.querySelector("h4");
let progresS = document.querySelector(".progres-s");
let progresM = document.querySelector(".progres-m");
let progresH = document.querySelector(".progres-h");

let secondsView = document.getElementById("seconds");
let minutsView = document.getElementById("minuts");
let hoursView = document.getElementById("hours");

const arrDay = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

// ===============================================Functions==========================
function examination(e) {
  if (e < 10) {
    return (e = "0" + e);
  }
  return e;
}

function clock() {
  let data = new Date();
  let n = examination(data.getDate());
  let m = examination(data.getMonth() + 1);
  let y = data.getFullYear();
  dataContent.innerHTML = n + "." + m + "." + y;

  let day = arrDay[data.getDay()];
  dayContent.innerHTML = day;
  console.log(day);

  hoursView.innerHTML = examination(data.getHours()) + "ч";
  minutsView.innerHTML = examination(data.getMinutes()) + "м";
  secondsView.innerHTML = examination(data.getSeconds()) + "с";

  let mSec = examination(Math.trunc(data.getMilliseconds() / 10));

  clockContent.innerHTML = data.toLocaleTimeString() + ":" + mSec;

  let secon = (data.getSeconds() * 100) / 59;
  let minuts = (data.getMinutes() * 100) / 59;
  let hourse = (data.getHours() * 100) / 23;
  progresS.style.height = secon + "%";
  progresM.style.height = minuts + "%";
  progresH.style.height = hourse + "%";

  if (secon === 0 || secon === 100) {
    progresS.style.border = "none";
  } else progresS.style.border = null;
}
setInterval(() => {
  clock();
}, 100);
