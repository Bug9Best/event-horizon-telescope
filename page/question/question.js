// real real hard code
let bananaPnt = document.getElementById("banana-p");
let starPnt = document.getElementById("star-p");
let bPoint = 3;
let sPoint = 0;
let hintText = "เอากล้วยมา 5 ลูก แล้วฉันจะบอกคำใบ้นาย";
let count = 1;
let listHint = ["อย่าลืมนะว่าในอวกาศก็มีฝุ่น", "รู้ไหมว่าถ้าตามทฤษฏีต้องใช้เลนใหญ่เท่าโลกเลยนะ", "รู้ไหมว่าการเลือกสถานที่ตั้งกล้องควรเลือกสถานที่ที่มีสิ่งรบกวนน้อยที่สุด", "เป็นล้านเลยหรอพี่!! ข้อมูลมันเยอะมากเลยนะ!", "ความไกลและขนาดของหลุมดำก็มีผลต่อการถ่ายภาพนะ"]
let stateHint = true;

function backHome() {
  window.location.href = '/index.html'
}

function adddispay1t() {
  var element1 = document.getElementById("q1");
  var element2 = document.getElementById("true-q1");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana1()
}
function adddispay1f() {
  var element1 = document.getElementById("q1");
  var element2 = document.getElementById("false-q1");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana2()
}
function adddispay2q() {
  var element1 = document.getElementById("true-q1");
  var element2 = document.getElementById("false-q1");
  var element3 = document.getElementById("q2");
  var element4 = document.getElementById("banana-p2");
  var element5 = document.getElementById("star-p2");
  element4.innerText = bPoint
  element5.innerText = sPoint
  element1.classList.remove("dispay");
  element2.classList.remove("dispay");
  element3.classList.add("dispay");
  stateHint = true;
}
function adddispay2t() {
  var element1 = document.getElementById("q2");
  var element2 = document.getElementById("true-q2");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana1()
}
function adddispay2f() {
  var element1 = document.getElementById("q2");
  var element2 = document.getElementById("false-q2");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana2()
}
function adddispay3q() {
  var element1 = document.getElementById("true-q2");
  var element2 = document.getElementById("false-q2");
  var element3 = document.getElementById("q3");
  var element4 = document.getElementById("banana-p3");
  var element5 = document.getElementById("star-p3");
  element4.innerText = bPoint
  element5.innerText = sPoint
  element1.classList.remove("dispay");
  element2.classList.remove("dispay");
  element3.classList.add("dispay");
  stateHint = true;
}
function adddispay3t() {
  var element1 = document.getElementById("q3");
  var element2 = document.getElementById("true-q3");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana1()
}
function adddispay3f() {
  var element1 = document.getElementById("q3");
  var element2 = document.getElementById("false-q3");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana2()
}
function adddispay4q() {
  var element1 = document.getElementById("true-q3");
  var element2 = document.getElementById("false-q3");
  var element3 = document.getElementById("q4");
  var element4 = document.getElementById("banana-p4");
  var element5 = document.getElementById("star-p4");
  element4.innerText = bPoint
  element5.innerText = sPoint
  element1.classList.remove("dispay");
  element2.classList.remove("dispay");
  element3.classList.add("dispay");
  stateHint = true;
}
function adddispay4t() {
  var element1 = document.getElementById("q4");
  var element2 = document.getElementById("true-q4");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana1()
}
function adddispay4f() {
  var element1 = document.getElementById("q4");
  var element2 = document.getElementById("false-q4");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana2()
}
function adddispay5q() {
  var element1 = document.getElementById("true-q4");
  var element2 = document.getElementById("false-q4");
  var element3 = document.getElementById("q5");
  var element4 = document.getElementById("banana-p5");
  var element5 = document.getElementById("star-p5");
  element4.innerText = bPoint
  element5.innerText = sPoint
  element1.classList.remove("dispay");
  element2.classList.remove("dispay");
  element3.classList.add("dispay");
  stateHint = true;
}
function adddispay5t() {
  var element1 = document.getElementById("q5");
  var element2 = document.getElementById("true-q5");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana1()
}
function adddispay5f() {
  var element1 = document.getElementById("q5");
  var element2 = document.getElementById("false-q5");
  element1.classList.remove("dispay");
  element2.classList.add("dispay");
  count++;
  addbanana2()
}
console.log(bPoint);
function addbanana1() {
  bPoint = bPoint + 3;
  sPoint = sPoint + 1
  starPnt.innerText = sPoint
  bananaPnt.innerText = bPoint
}
function addbanana2() {
  bPoint = bPoint + 2
  bananaPnt.innerText = bPoint
}
function checkbanana() {
  let element1 = document.getElementById("hint" + count);
  let element2 = document.getElementById("banana-p" + count)
  if (bPoint < 5) {
    element1.innerText = "ไม่สนิทอย่าติดตลก ไปหากล้วยมาใหม่!!!"
    element1.style.color = "red"
    setTimeout(() => {
      element1.innerText = hintText
      element1.style.color = "black"
    }, 2000);

  } else {
    if (stateHint == true) {
      bPoint = bPoint - 5
      stateHint = false;
    }
    element2.innerText = bPoint
    element1.innerText = listHint[count - 1]
    element1.style.color = "green"


  }
}