function openDialog() {
  setTimeout(function () {
    Swal.fire({
      icon: 'warning',
      title: 'ข้อเเนะนำ',
      text: 'เพื่ออรรถรสในการเล่นเกมส์ โปรดเปิดเสียงเเละขยายหน้าต่างให้มากกว่า XXX พิกเซล',
      showConfirmButton: true,
      confirmButtonText: "ทราบเเล้วเปลี่ยน!",
      confirmButtonColor: "#FAB400",
      focusConfirm: false,
    })
  }, 500);
}

function mouseOver() {
  var sound = new Audio('/assets/effect/Select.wav')
  sound.volume = 0.1;
  sound.play();
}

var sound = new Audio('/assets/effect/typingFast.mp3')
var string = "เราได้รับบทเป็นลิง ที่ได้มาทำงานบนอวกาศ..";
var array = string.split("");
var timer;

function start() {
  document.getElementById("logo").style.display = "none";
  document.getElementById("button").style.display = "none";
  setTimeout(function () {
    sound.play()
    frameLooper();
  }, 500);

  setTimeout(function () {
    sound.pause()
  }, 3500);
}


function howPlay() {
  Swal.fire({
    template: '#howToPlay',
    width: '750px',
    customClass: 'swal-height',
    confirmButtonText: "ทราบเเล้วเปลี่ยน!",
    confirmButtonColor: "#FAB400",
    focusConfirm: false,
  })
}


function frameLooper() {
  let timer = setTimeout('frameLooper()', 70);
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  }
  else {
    clearTimeout(timer);
    setTimeout(function () {
      document.getElementById("text").style.display = "none";
    }, 3000);
    setTimeout(function () {
      opening();
    }, 4000);
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
      window.location.href = '/page/game-lab/lab.html'
    }
  }
} 