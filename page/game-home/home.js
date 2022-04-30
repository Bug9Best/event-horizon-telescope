function mouseOver() {
  var sound = new Audio('/assets/effect/Select.wav')
  // var sound = new Audio('/assets/effect/click.wav')
  sound.volume = 0.1;
  sound.play();
}

function openDialog() {
  setTimeout(function () {
    Swal.fire({
      icon: 'question',
      title: 'ข้อเเนะนำ',
      text: 'เพื่ออรรถรสในการเล่นเกมส์ โปรดเพื่ออรรถรสในการเล่นเกมส์ โปรดเพื่ออรรถรสในการเล่นเกมส์ โปรดเพื่ออรรถรสในการเล่นเกมส์ โปรด',
      showConfirmButton: true,
      confirmButtonText: "ทราบเเล้วเปลี่ยน!",
      confirmButtonColor: " #356db8",
    })
  }, 500);
}