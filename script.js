//
// ────────────────────────────────────────────── I ──────────
//   :::::: D O M : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────
//

var pause = document.querySelector(".pause");
var start = document.querySelector(".start");
var reset = document.querySelector(".reset");
var display = document.querySelector(".watch-display-data");

var milliseconds = 0;
var sec = 0;
var intervalId;
//

// ────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: E V E N T   L I S T E N E R S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────
//

start.addEventListener("click", function () {
  start.style.pointerEvents = "none";
  start.style.opacity = ".3";
  pause.style.opacity = "1";
  intervalId = setInterval(() => {
    milliseconds++;

    if (milliseconds == 100) {
      milliseconds = 0;
      sec++;

      if (sec == 60) {
        return;
      }
    }

    display.innerHTML = `${sec} :  ${milliseconds}`;
    // here we are explicitly showing the result using template string form
  }, 10);
});

reset.addEventListener("click", function () {
  pause.style.opacity = ".3";
  clearInterval(intervalId);
  sec = 0;
  milliseconds = 0;
  display.innerHTML = "0 0 :  0 0";
  start.style.pointerEvents = "all";
  start.style.opacity = "1";
});

pause.addEventListener("click", function () {
  pause.style.opacity = ".3";
  clearInterval(intervalId);
  start.style.pointerEvents = "all";
  start.style.opacity = "1";
});
