var string = "เราได้รับบทเป็นลิง ที่ได้มาทำงานบนอวกาศ..";
var array = string.split("");
var timer;
var runner = 0;

frameLooper();

function frameLooper() {
  if (runner == string.length) {
    setTimeout(function () {
      opening();
    }, 1000);
  }

  (array.length > 0) ? document.getElementById("text").innerHTML += array.shift() : clearTimeout(timer);
  runner++;
  setTimeout('frameLooper()', 80);
}

function opening() {
  const line = document.getElementById("line");
  let value = null;
  let interval = 0;
  let height = screen.height;
  clearInterval(value);
  setInterval(frame, 1);

  function frame() {
    if (interval < height) {
      interval++;
      line.style.height = interval + 'px';
    }
    else {
      // window.location.href = '../game-lab/lab.html'
    }
  }
}


