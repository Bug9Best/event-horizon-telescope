var sound = new Audio('effect/typingFast.mp3')
var string = "เราได้รับบทเป็นลิง ที่ได้มาทำงานบนอวกาศ..";
var array = string.split("");
var timer;


function start() {
  setTimeout(function () {
    sound.play()
    frameLooper();
  }, 500);

  setTimeout(function () {
    sound.pause()
  }, 3500);
}


function frameLooper() {
  let timer = setTimeout('frameLooper()', 70);
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  }
  else {
    clearTimeout(timer);
    setTimeout(function () {
      opening();
    }, 2000);
  }
}

function opening() {
  const line = document.getElementById("line");
  let value = null;
  let interval = 0;
  let height = screen.height;
  clearInterval(value);
  value = setInterval(frame, 2);

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