// Content Part--------------------------------------------------------------------------------------------
let thVer = [
  "หน้าหลัก",
  "หลุมดำ",
  "วัตถุที่มีความโน้มถ่วงเป็นอนันต์ ดูดกลืนทุกสรรพสิ่งแม้แต่ตัวของมันเองลงไปในหลุมลึกที่ดำมืด",
  "ที่แม้แต่แสงก็ไม่สามารถที่หลุดลอดออกมาได้",
  "หลุมดำมวลยิ่งยวด",
  "หลุมดำมวลยิ่งยวด หรือ Supermassive black hole คือ หลุมดำขนาดยักษ์ที่มีมวลเท่ากับดวงอาทิตย์ 20,000 ล้านดวง ทำให้เกิดแสงสว่างเจิดจ้าต่างกับหลุมดำทั่วไปที่ไม่มีแม้แต่แสงเล็ดลอดออกมา จนจัดได้ว่าเป็น เควซาร์ หรือ วัตถุส่องสว่างพลังงานสูงที่มักพบในห้วงอวกาศลึก โดยเฉพาะอย่างยิ่งในส่วนแกนกลางของกาแลกซี่ ทำให้ EHT เลือกที่จะถ่ายหลุมดำมวลยิ่งยวดนั่นเอง",
  "เราสามารถถ่ายเห็นหลุมดำได้อย่างไร ?",
  "ในการถ่ายหลุมดำเป็นเรื่องที่ยากเนื่องจากหลุมดำเป็นวัตถุที่ไม่เปล่งแสง เราจึงจำเป็นต้องปรับคลื่นความถี่ ของกล้องให้ตรงกับการถ่ายภาพรังสีของหลุมดำเพื่อถ่ายมันออกมา ซึ่งการถ่ายมันก็ยากเข้าไปอีกเนื่องจาก หลุมดำนั้นอยู่ไกลโลกเรามากๆ ทำให้เราจำเป็นจะต้องทำให้ขนาดของเลนส์กล้องมีขนาดใหญ่เท่าโลก ซึ่งมันก็เป็นไปไม่ได้ เราเลยจำเป็นจะต้องถ่ายภาพจากกล้องหลายๆตัวตั้งไว้ในส่วนต่างๆของโลกแล้วจึงนำภาพที่ได้นั้นมาประมวลผลกันเป็นภาพหลุมดำ",
  "โดยกล้องแต่ละตัวมักจะตั้งอยู่บนที่ราบสูง ห่างไกลผู้คน เพื่อป้องกันสิ่งรบกวนต่างๆ ซึ่งรูปหลุมดำที่ถ่ายคือของกาแล็คซี่ M87 แต่ก็มีหลุมดำที่อยู่ใกล้เรามากกว่านั้นก็คือ A0620-00 ชื่อ Sagittarius A ห่างจากโลก 26,540 ปีแสง แต่เนื่องจากมันมีขนาดเล็กเกินไปทำให้ยากต่อการถ่ายเลยไปเลือกถ่าย หลุมดำมวลยิ่งยวดของกาแล็คซี่ M87 แทน",
  "ทำไมกล้องโทรทรรศน์ธรรมดาถึงถ่ายภาพหลุมดำไม่ได้ ?",
  "เพราะมีบรรยากาศที่ห่อหุ้มโลกเป็นอุปสรรค รวมทั้งฝุ่นต่างที่อยู่ในอวกาศขวางกั้น ทำให้คลื่นแม่เหล็กไฟฟ้าบางความยาวคลื่นไม่สามารถแผ่ลงมาถึงพื้นโลก ทำให้ไม่สามารถจะถ่ายภาพได้ แต่กล้องโทรทรรศน์วิทยุนั้นสามารถถ่ายภาพได้เนื่องจากสามารถถ่ายภาพในช่วงคลื่นวิทยุความถี่สูงได้",
  "แล้วเราใช้อะไรถ่ายหลุมดำ ? เดี๋ยวเรามาทำความรู้จักกับ VLBI กันเลย !",
  "Very Long Baseline Interferometer คือเทคนิคที่ใช่ในการถ่ายภาพหลุมดำ โดยใช้ความถี่กล้องมารวมกันเป็นกล้องโทรทรรศน์วิทยุเสมือนกล้องขนาดใหญ่เท่าโลก แล้วถ่ายภาพในเวลาเดียวกัน ในความถี่ 230 GHz ทำให้ได้ภาพความละเอียดสูง แล้วนำภาพหลายๆภาพขนาดประมาณ 5 ล้าน GB มาประมวลผล โดยใช้เวลา 2 ปีเพื่อได้ภาพหลุมดำ",
  "VLBI ทำงานโดยการใช้กล้องโทรทรรศน์ที่ติดตั้งในตำแหน่งต่าง ๆ ที่แตกต่างกันบนโลก สังเกตวัตถุทางดาราศาสตร์วัตถุเดียวกันเป็นเวลาหลายชั่วโมงพร้อม ๆ กันและเปลี่ยนกันสังเกตุการณ์เมื่อโลกหมุนรอบตัวเอง ซึ่งข้อมูลพวกนี้จะถูกลงเวลาด้วยนาฬิกา Atomic ที่มีความแม่นยำสูงเพื่อใช้ในการวิเคราะห์หลังจากการสำรวจ",
  "มวลยิ่งยวดใจกลางทางช้างเผือก Sagittarius A*",
  "หลังจากที่ทีมนักดาราศาสตร์ และ เครือข่ายกล้องโทรทรรศน์วิทยุ Event Horizon Telescope ได้ถ่ายภาพหลุมดำ M87 ไปแล้วก่อนหน้านี้ และเมื่อวันที่ 12 พฤษภษคม 2565 ที่ผ่านมาเราก็สามารถถ่ายภาพ หลุมดำ Sagittarius A* ได้แล้ว ซึ่งถือเป็นหลุมดำแรกของใจกลางกาแล็กซีทางช้างเผือก",
  "เรามาทำความรู้จักกับ Saguttarius A* กันเถอะ",
  "Saguttarius A* หรือชื่อย่อ Sgr A* (เครื่องหมาย * อ่านว่า star) ตั้งอยู่ที่ใจกลางกาแล็คซีทางช้างเผือก (หรือ Milky Way galaxy) ซึ่งมีมวลมากกว่าดวงอาทิตย์ของเราประมาณ 4.15 ล้านเท่า และ อยู่ห่างจากโลกประมาณ 26,600 ปีแสง [ปีแสง – ใช้บอกระยะของวัตถุในอวกาศ 1ปีแสง จะประมาณ 9.5 ล้านล้าน กิโลเมตร] และ มีเส้นผ่านศูนย์กลางของขอบฟ้าเหตุการณ์ กว้าง 20 ล้านกิโลเมตร  สำหรับตัวหลุมดำแน่นอนว่าเราไม่อาจมองเห็นได้ เนื่องจากแรงโน้มถ่วงที่มีมากมายจะดึงดูดทุกสิ่งทุกอย่าง โชคดีที่รอบหลุมดำยักษ์เหล่านี้จะมี ‘จานสะสมมวล’ (Accretion Disk)",
  "แล้วจานสะสมมวลคืออะไรกันนะ ?",
  "จานสะสมมวล ประกอบด้วยกลุ่มฝุ่นและก๊าซจำนวนมากหมุนวนไปรอบหลุมดำด้วยความเร็วเกือบเท่าความเร็วแสง จนอนุภาคในจานสะสมมวลกลายเป็นพลาสมาที่มีอุณหภูมิสูงถึง 10,000 ล้านเคลวิน เปล่งแสงสว่างและคลื่นแม่เหล็กไฟฟ้าในย่านรังสีเอ็กซ์ออกมาจนเราสังเกตเห็นได้",
]
let enVer = [
  "Home",
  "Black hole",
  "A cosmic body of extremely intense gravity",
  "from which even light cannot escape.",
  "Supermassive Black Hole: SMBH",
  "Supermassive Black Hole or 'SMBH' is a gigantic black hole with a mass equal to 20 billion suns produces a bright light, unlike a normal black hole that doesn't even emit light. Until it can be classified as a quasar, or high-energy luminous object often found in deep space. Especially in the core of the galaxy, EHT has chosen to photograph the supermassive black hole itself.",
  "How can we see a black hole ?",
  "It is difficult to photograph a black hole because a black hole is a non-emitting object. So we need to adjust the frequency of the camera to match the radiography of the black hole to shoot it out, which was difficult to swallow because black holes are very far from our planet. We need to make the size of the camera lens as large as the world, which is impossible. So we need to take pictures from multiple cameras set up in different parts of the world and then process those images into black hole images.",
  "Each camera is usually located on a plateau, far away from people to prevent any disturbances. The black hole photographed is in the galaxy M87, but there is a black hole closer to us called A0620-00 Sagittarius A, which 26,540 light-years far from Earth. So I chose to take a photo of the supermassive black hole in the galaxy M87 instead.",
  "Why can't conventional telescopes photograph black holes ?",
  "Because there is an atmosphere that envelops the world as an obstacle, including the dust in space blocking causing some wavelengths of electromagnetic waves to not reach the earth, making it impossible to take pictures. But radio telescopes are capable of imaging because they can take images in the high-frequency range.",
  "So what do we use to photograph black holes ? Let's get to know VLBI now !",
  "The Very Long Baseline Interferometer is the technique used for photographing black holes. Using the camera frequencies together to form a radio telescope like a camera as big as the world and shooting at the same time at the 230 GHz frequency results in high resolution images. Then take several images of about 5 GB in size and process them. It takes 2 years to get a picture of a black hole.",
  "VLBI works by using telescopes installed in different locations on Earth. Observe the same astronomical object for hours at a time and change observations as the Earth revolves around itself. The data is timed with a highly accurate atomic clock for analysis after the survey.",
  "The black hole at the center of the Milky Way galaxy 'Sagittarius A*'",
  "The Event Horizon Telescope has previously imaged the black hole M87 with a team of astronomers and a network of radio telescopes. And on May 12, 2022, we were able to photograph Sagittarius A*, the first black hole at the center of the Milky Way galaxy.",
  "Let's get to know Saguttarius A*",
  "Saguttarius A* or initials Sgr A*   (symbol * It's star) It's located at the center of the Milky Way galaxy.Â (Milky Way galaxy) Which is about 4.15 million times more massive than our sun. It is about 26,600 light years from Earth. [A light-year is used to tell the distance of an object in space. 1 light-year is approximately 9.5 trillion kilometers.] The diameter of the event horizon is 20 million kilometers wide. Of course, we can't see a black hole. Because the abundance of gravity attracts everything. Fortunately, around these giant black holes there is an 'Accretion Disk'.",
  "So what is an accretion disk ?",
  "The accretion disk, containing large amounts of dust and gas, revolves around the black hole at nearly the speed of light. The particles in the accretion disk turned into a plasma, reaching temperatures of up to 10 billion kelvin, emitting so much light and electromagnetic waves that we could see them in the X-ray zone.",
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
let homeButton = document.getElementById("homeButton");
let title2 = document.getElementById("title2");
let subtitle2 = document.getElementById("subtitle");
let title3 = document.getElementById("sec2-title");
let subtitle3 = document.getElementById("sec2-subtitle");
let title4 = document.getElementById("sec3-title");
let subtitle4Top = document.getElementById("sec3-subtitle1");
let subtitle4Bottom = document.getElementById("sec3-subtitle2");
let title5 = document.getElementById("sec4-title");
let subtitle5 = document.getElementById("sec4-subtitle");
let title7 = document.getElementById("sec5-title");
let subtitle7 = document.getElementById("sec5-subtitle");
let title8 = document.getElementById("sec7-title");
let subtitle8 = document.getElementById("sec7-subtitle");
let title9 = document.getElementById("sec8-title");
let subtitle9 = document.getElementById("sec8-subtitle");
let title10 = document.getElementById("sec9-title");
let subtitle10 = document.getElementById("sec9-subtitle");

function thaiVer() {
  homeButton.innerHTML = thVer[0] + `<div class="homeIcon"></div>`
  title2.innerText = thVer[1]
  subtitle2.innerHTML = thVer[2] + `<br>` + thVer[3]
  title3.innerText = thVer[4]
  subtitle3.innerText = thVer[5]
  title4.innerText = thVer[6]
  subtitle4Top.innerText = thVer[7]
  subtitle4Bottom.innerText = thVer[8]
  title5.innerText = thVer[9]
  subtitle5.innerText = thVer[10]
  title7.innerText = thVer[11]
  subtitle7.innerText = thVer[12] + `<br>` + thVer[13]
  title8.innerText = thVer[14]
  subtitle8.innerText = thVer[15]
  title9.innerText = thVer[16]
  subtitle9.innerText = thVer[17]
  title10.innerText = thVer[18]
  subtitle10.innerText = thVer[19]
}

function engVer() {
  homeButton.innerHTML = enVer[0] + `<div class="homeIcon"></div>`
  title2.innerText = enVer[1]
  subtitle2.innerHTML = enVer[2] + `<br>` + enVer[3]
  title3.innerText = enVer[4]
  subtitle3.innerText = enVer[5]
  title4.innerText = enVer[6]
  subtitle4Top.innerText = enVer[7]
  subtitle4Bottom.innerText = enVer[8]
  title5.innerText = enVer[9]
  subtitle5.innerText = enVer[10]
  title7.innerText = enVer[11]
  subtitle7.innerText = enVer[12] + `<br>` + enVer[13]
  title8.innerText = enVer[14]
  subtitle8.innerText = enVer[15]
  title9.innerText = enVer[16]
  subtitle9.innerText = enVer[17]
  title10.innerText = enVer[18]
  subtitle10.innerText = enVer[19]
}

// Map Part--------------------------------------------------------------------------------------------
function jcmt() {
  Swal.fire({
    title: 'James Clerk Maxwell Telescope',
    html: '<div style = "color: #5A5F72" style = "color: #5A5F72">สถานที่ตั้ง: ภูเขาไฟโมนาเคอา รัฐฮาวาย USA</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 1987</div>',
    imageUrl: '/assets/Image/JCMT.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'JCMT',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function sma() {
  Swal.fire({
    title: 'The Submillimeter Array',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: ด้านบนสุดของ Mauna Kea ในฮาวาย</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2003</div>',
    imageUrl: '/assets/Image/SMA.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'SMA',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function spt() {
  Swal.fire({
    title: 'South Pole Telescope',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: สถานี Amundsen–Scott South Pole <br>ในทวีปแอนตาร์กติกา</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2007</div>',
    imageUrl: '/assets/Image/SPT.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'SPT',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function alma() {
  Swal.fire({
    title: 'Atacama Large Millimeter/Submillimeter Array',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: ทะเลทราย Atacama ทางตอนเหนือของชิลี</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2013</div>',
    imageUrl: '/assets/Image/ALMA.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'ALMA',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function iram() {
  Swal.fire({
    title: 'IRAM 30 meter Telescope',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: เซียร์ราเนวาดา ประเทศสเปน <br>ใกล้ยอดเขา Pico Veleta</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 1984</div>',
    imageUrl: '/assets/Image/IRAM.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'IRAM',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function lmt() {
  Swal.fire({
    title: 'The Large Millimeter Telescope',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: บนยอดเขาเซียร์ราเนกรา เม็กซิโก </div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2010</div>',
    imageUrl: '/assets/Image/LMT.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'LMT',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function smt() {
  Swal.fire({
    title: 'Arizona Radio Observatory/Submillimeter-wave Astronomy',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: ภูเขา Graham รัฐ Arizona USA </div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 1993</div>',
    imageUrl: '/assets/Image/SMT.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'SMT',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function apex() {
  Swal.fire({
    title: 'Atacama Pathfinder EXperiment',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: หอดูดาว Llano de Chajnantor ตอนเหนือของประเทศชิลี</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2005</div>',
    imageUrl: '/assets/Image/APEX.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'APEX',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function green() {
  Swal.fire({
    title: 'Greenland Telescope',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: Thule Air Base ตอนเหนือของ Greenland </div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2017</div>',
    imageUrl: '/assets/Image/Greenland.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Greenland telescope',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function kpno() {
  Swal.fire({
    title: 'Kitt Peak National Observatory',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: Kitt Peak, Arizona, US </div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 1958</div>',
    imageUrl: '/assets/Image/KPNO.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'KPNO',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}

function noema() {
  Swal.fire({
    title: 'Kitt Peak National Observatory',
    html: '<div style = "color: #5A5F72">สถานที่ตั้ง: Plateau de Bure ฝรั่งเศส</div>' + '<div style = "color: gray">ก่อสร้างเสร็จ: 2014</div>',
    imageUrl: '/assets/Image/JCMT.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'NOEMA',
    confirmButtonColor: "#FAB400",
    confirmButtonText: "ปิดหน้าต่าง",
  })
}
