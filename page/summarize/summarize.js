let thVer = [
  "หน้าหลัก",
  "หลุมดำ",
  "วัตถุที่มีความโน้มถ่วงเป็นอนันต์ ดูดกลืนทุกสรรพสิ่งแม้แต่ตัวของมันเองลงไปในหลุมลึกที่ดำมืด",
  "ที่แม้แต่แสงก็ไม่สามารถที่หลุดลอดออกมาได้",
  "เราสามารถถ่ายเห็นหลุมดำได้อย่างไร ?",
  "ในการถ่ายหลุมดำเป็นเรื่องที่ยากเนื่องจากหลุมดำเป็นวัตถุที่ไม่เปล่งแสง เราจึงจำเป็นต้องปรับคลื่นความถี่ของกล้องให้ตรงกับการถ่ายภาพรังสีของหลุมดำเพื่อถ่ายมันออกมา ซึ่งการถ่ายมันก็ยากเข้าไปอีกเนื่องจากหลุมดำนั้นอยู่ไกลโลกเรามากๆ ทำให้เราจำเป็นจะต้องทำให้ขนาดของเลนกล้องมีขนาดใหญ่เท่าโลก ซึ่งมันก็เป็นไปไม่ได้ เราเลยจำเป็นจะต้องถ่ายภาพจากกล้องทตั้งไว้ในส่วนต่างๆของโลกแล้วจึงนำภาพที่ได้นั้นมาประมวลผลกันเป็นภาพหลุมดำ ซึ่งรูปหลุมดำที่ถ่ายคือของกาแล็คซี่ M87 แต่ก็มีหลุมดำที่อยู่ใกล้เรามากกว่านั้นก็คือ A0620-00 ชื่อ Sagittarius A ห่างจากโลก 26,540 ปีแสง แต่เนื่องจากมันมีขนาดเล็กเกินไปทำให้ยากต่อการถ่ายเลยไปเลือกถ่ายหลุมดำของกาแล็คซี่ M87 แทน",
  "เทคนิค (Very Long Baseline Interferometry : VLBI)",
  "ใช้ความถี่กล้องมารวมกันเป็นกล้องโทรทรรศน์วิทยุเสมือนกล้องขนาดใหญ่เท่าโลก แล้วถ่ายภาพในเวลาเดียวกันในความถี่ 230 GHz ทำให้ได้ภาพความละเอียดสูง แล้วนำภาพหลายๆภาพขนาดประมาณ 5 ล้าน GB มาประมวลผล ใช้เวลา 2 ปีเพื่อได้ภาพหลุมดำ",
  "ถัดไป",
]
let enVer = [
  "Home",
  "Black hole",
  "A cosmic body of extremely intense gravity",
  "How can we see a black hole ?",
  "It is difficult to photograph a black hole since it is a non-emitting object. We need to adjust the frequency of the camera to match the radiography of the black hole to shoot it out. Black holes are very far from our planet; we need to make the size of the camera lens as large as the world, which is impossible. Therefore, we need to take pictures from cameras set up in different parts of the world and process them together to create an image of a black hole. The black hole photographed is the galaxy M87. There is another one closer to us, A0620-00 named Sagittarius A, which is 26,540 light-years from Earth. But since it is too small, which makes it difficult to photograph, we chose the galaxy M87 instead.",
  "Very Long Baseline Interferometry : VLBI",
  "Using multiple camera frequencies to become a radio telescope as a camera as big as the world. Shoot at the same time at 230 GHz, resulting in high resolution images. Then take several images, about 5 million GB, and process them. It took 2 years to get a picture of the black hole.",
  "next",
  "from which even light cannot escape.",
]
function sound() {
  var sound = new Audio('/assets/sound/OpenaBreach.mp3')
  sound.volume = 0.2;
  sound.loop = true;
  sound.play();
}

window.addEventListener('scroll', () => {
  document.querySelector('img').style.clipPath = `circle(${window.scrollY + 100}px at center)`;
})

window.addEventListener('scroll', reveal);
function reveal() {
  var reveals = document.querySelectorAll('.reveal');
  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}

function thaiVer() {
  let homeButton = document.getElementById("homeButton");
  let nextButton = document.getElementById("nextButton");
  let title2 = document.getElementById("title2");
  let subtitle2 = document.getElementById("subtitle");
  let title3 = document.getElementById("sec2-title");
  let subtitle3 = document.getElementById("sec2-subtitle");
  let title4 = document.getElementById("sec3-title");
  let subtitle4 = document.getElementById("sec3-subtitle");

  homeButton.innerHTML = thVer[0] + `<div class="homeIcon"></div>`
  title2.innerText = thVer[1]
  subtitle2.innerHTML = thVer[2] + `<br>` + thVer[3]
  title3.innerText = thVer[4]
  subtitle3.innerText = thVer[5]
  title4.innerText = thVer[6]
  subtitle4.innerText = thVer[7]
  nextButton.innerText = thVer[8]
}

function engVer() {
  let homeButton = document.getElementById("homeButton");
  let nextButton = document.getElementById("nextButton");
  let title2 = document.getElementById("title2");
  let subtitle2 = document.getElementById("subtitle");
  let title3 = document.getElementById("sec2-title");
  let subtitle3 = document.getElementById("sec2-subtitle");
  let title4 = document.getElementById("sec3-title");
  let subtitle4 = document.getElementById("sec3-subtitle");

  homeButton.innerHTML = enVer[0] + `<div class="homeIcon"></div>`
  title2.innerText = enVer[1]
  subtitle2.innerHTML = enVer[2] + `<br>` + enVer[8]
  title3.innerText = enVer[3]
  subtitle3.innerText = enVer[4]
  title4.innerText = enVer[5]
  subtitle4.innerText = enVer[6]
  nextButton.innerText = enVer[7]
}