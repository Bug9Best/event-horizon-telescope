// Question Part ----------------------------------------------------------------------------------
let question = [
  "คำถามที่ 1 : ลิงเลือกซื้อกล้องโทรทรรศน์ใน Solar Shopping Mall ต้องใช้แบบไหนดี",
  "คำถามที่ 2 : เลือกรูปแบบตำแหน่งการวางของกล้อง",
  "คำถามที่ 3 : สถานที่ตั้งกล้องควรเป็นที่ใดระหว่าง กลางทะเลหรือ เขตที่ราบสูง",
  "คำถาม 4 : ลิงได้ข้อมูลจากกล้องกว่า 5 ล้านกิกะไบต์เราต้องส่งให้สถานีวิจัยให้เร็วที่สุดยังไงดีนะ?",
  "คำถาม 5 : ในที่สุดลิงก็ได้ถ่ายภาพหลุมดำซักที ว่าแต่หัวหน้าสั่งให้ เราถ่ายหลุมดำจากกาแลกซี่ไหนนะ ?",
  "คำถาม 6 : เรากำลังมองหาหลุมดำแบบไหนนะ?"]

let listHint = [
  "อย่าลืมนะว่าในอวกาศก็มีฝุ่น",
  "รู้ไหมว่าถ้าตามทฤษฏีต้องใช้เลนใหญ่เท่าโลกเลยนะ",
  "รู้ไหมว่าการเลือกสถานที่ตั้งกล้องควรเลือกสถานที่ที่มีสิ่งรบกวนน้อยที่สุด",
  "เป็นล้านเลยหรอพี่!! ข้อมูลมันเยอะมากเลยนะ!",
  "ข่าวพึ่งออกไป ตอบอะไรดีน้า",
  "หลุมดำดูดกลืนทุกอย่างแม้แต่แสงก็จริง แต่ถ้ามีมวลมากพอก็จะทำให้เกิดจานสะสมมวลหมุนรอบๆทำให้เราสังเกตเห็นได้ล่ะ"]

let choice1 = [
  "กล้องโทรทรรศน์วิทยุ",
  "ใช้กล้องโทรทรรศน์อันเดียวใหญ่ๆไปเลย",
  "กลางทะเลที่นิ่งสงบ",
  "ส่งผ่านทางสายเคเบิ้ลใต้ทะเล",
  "กาแล็กซี่เมซีเย 87 อันไกลโพ้น",
  "หลุมดำมวลยิ่งยวด"]

let choice2 = [
  "กล้องโทรทรรศน์แบบสะท้อนแสง",
  "ใช้หลายๆตัวกระจายอยู่ทั่วโลก",
  "ที่ราบสูงห่างไกลผู้คน",
  "นำข้อมูลใส่ฮาร์ดดิสก์ไดร์ฟแล้วส่งขึ้นเครื่องบิน",
  "กาแล็กซี่ทางช้างเผือกของเราเอง",
  "หลุมดำจากดาวฤกษ์"]

let pathImg1 = [
  "/assets/image/choice1.1.jpg",
  "/assets/image/choice2.1.png",
  "/assets/image/choice3.1.png",
  "/assets/image/choice4.1.png",
  "/assets/image/choice5.1.png",
  "/assets/image/choice6.1.jpg"]

let pathImg2 = [
  "/assets/image/choice1.2.jpg",
  "/assets/image/choice2.2.png",
  "/assets/image/choice3.2.png",
  "/assets/image/choice4.2.png",
  "/assets/image/choice5.2.png",
  "/assets/image/choice6.2.jpg"]

let ansCorrect = [
  "ใช้ได้! กล้องโทรทรรศน์วิทยุใช้การวัดสัญญาณคลื่นวิทยุจากวัตถุท้องฟ้าและสามารถทะลุผ่านเมฆหมอกในบรรยากาศของโลกและผ่านฝุ่นผงในที่ว่างระหว่างดวงดาวได้ด้วย รับกล้วยไป",
  "EHT เป็นโครงการศึกษาเกี่ยวกับหลุมดำโดยใช้กล้องโทรทัศน์ทำงานร่วมกัน เราสามารถจำลองกล้องโทรทรรศน์ที่ใหญ่เท่าโลกได้ด้วยเทคนิคที่เรียกว่า VLBI หรือ Very-long-baseline Interferometry",
  "ยอดเยี่ยมไปเลย สามารถรับสัญญาณสำหรับการถ่ายภาพหลุมดำได้แล้ว!",
  "ฉลาดมาก! เพราะข้อมูลมีมากเกินกว่าจะส่งผ่านอินเทอร์เน็ตได้ ทำให้ต้องส่งผ่านเครื่องบินเจ็ทเร็วแรงแทนเพราะดอมกล่าวไว้ว่าครอบครัว",
  "ถูกต้อง! ในที่สุดพวกเราก็สามารถถ่ายภาพหลุมดำมวลที่ยิ่งยวดของกาแล็กซี่ Messier 87 ( เมอซิเย่ ) เป็นครั้งแรกของโลก ในวันที่ 10 เมษายน 2019 ทำได้ดีมากทุกคน!",
  "ใช่แล้ว เพราะหลุมดำมวลยิ่งยวดมีมวลมากมายมหาศาลจนทำให้จานสะสม(Accretion Disk) มวลเกิดแสงสว่างจ้า ทำให้เราสังเกตเห็นนั่นเอง",]

let pathAns1 = [
  "/assets/Image/q1-correct-fix.png",
  "/assets/Image/q2correct-fix.png",
  "/assets/Image/q3-correct-fix.png",
  "/assets/Image/q4-correct-fix.png",
  "/assets/Image/q5-fix.png",
  "/assets/Image/q6.png",]

let ansFalse = [
  "ถ่ายไม่เห็นอะไรเลย! เพราะนอกจากจะมีชั้นบรรยากาศห่อหุ้มโลกเป็นอุปสรรคแล้ว ยังมีฝุ่นต่างที่อยู่ในอวกาศขวางกั้นอีก เอาไปขายทิ้งซะนะ",
  "โลกแตก เพราะการใช้กล้องโทรทรรศน์ตัวเดียวต้องมีขนาดใหญ่เท่าโลกถึง จะถ่ายภาพหลุมดำได้ (และจะเอาเงินที่ไหนไปสร้าง!)",
  "ยอดแย่ คลื่นลมทะเลนั้นรุนแรงเสียจนการจับสัญญาณทำได้ยาก",
  "โดนจับแล้ว!! คาดเกิดจากการทำเครือข่ายอินเทอร์เน็ตทั่วโลกล่มทันทีหลังส่ง ข้อมูลกว่า 5 ล้านกิกะไบต์ ศาลตัดสินให้จำคุกไม่มีประกันตัว",
  "ถูกต้อง! สุดท้ายลิงก็ได้ถ่ายหลุมดำมวลยิ่งยวดของกาแล็กทางช้างเผือก ชื่อว่า Saguttarius A* เป็นครั้งที่สองของโลก ในวันที่ 12 พฤษภษคม 2022 ที่ผ่านมานี้เอง โดยหลุมดำแรกที่ถ่ายได้ก็คือ M87 เมื่อปี 2019 นั่นเอง",
  "หลุมดำที่เกิดจากการระเบิดของดวงดาวเป็น Supernova นั้นมีมวลมากก็จริง แต่ยังไม่มากพอที่จะทำให้เกิดจานสะสมมวล (Accretion Disk) ที่ทำให้เราสังเกตได้",]

let pathAns2 = [
  "/assets/Image/q1-false-fix.png",
  "/assets/Image/q2-false-fix.png",
  "/assets/Image/q3-false-fix.png",
  "/assets/Image/q4-false-fix.png",
  "/assets/Image/q5-sgra.png",
  "/assets/Image/q6.png",]
let sizeImg1 = [650, 650, 450, 450, 400, 575,]
let sizeImg2 = [650, 650, 450, 375, 425, 575,]

var hintText = "เอากล้วยมา 5 ลูก แล้วฉันจะบอกคำใบ้นาย";
var stateHint = true;
let questionContainer = document.querySelector(".container");
let answerContainer = document.querySelector(".answer");

let questionA = document.querySelector(".question");
let hint = document.querySelector(".hint");
let btnA = document.getElementById("btn1");
let btnB = document.getElementById("btn2");
let nextBtn = document.getElementById("nextButton");
let picA = document.getElementById("pic1");
let picB = document.getElementById("pic2");
let banana = document.getElementById("banana");
let star = document.getElementById("star");
let count = 0;
let bPoint = 3;
let sPoint = 0;

function trueNomalSound() {
  var soundTrack = new Audio('/assets/effect/Correct.wav')
  soundTrack.volume = 0.5;
  soundTrack.play();
}

function falseNomalSound() {
  var soundTrack = new Audio('/assets/effect/Wrong 2.wav')
  soundTrack.volume = 0.5;
  soundTrack.play();
}

function trueAddBanana() {
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
}

function falseAddBanana() {
  count = count + 1;
  bPoint = bPoint + 1;
}

function showQuestion() {
  var soundTrack = new Audio('/assets/sound/Space.mp3')
  soundTrack.volume = 0.1
  soundTrack.loop = true;
  soundTrack.play();
  question1();
}

function question1() {
  stateHint = true;
  questionContainer.setAttribute("style", "visibility: visible;")
  answerContainer.setAttribute("style", "visibility: hidden;")
  questionA.innerHTML = question[0];
  hint.innerHTML = hintText;
  hint.style.color = "#333"
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[0]);
  picB.setAttribute("src", pathImg2[0]);
  btnA.innerHTML = choice1[0]
  btnB.innerHTML = choice2[0]
  btnA.setAttribute();
  btnB.setAttribute();
}

function question2() {
  stateHint = true;
  questionContainer.setAttribute("style", "visibility: visible;")
  answerContainer.setAttribute("style", "visibility: hidden;")
  questionA.innerHTML = question[1];
  hint.innerHTML = hintText;
  hint.style.color = "#333"
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[1]);
  picB.setAttribute("src", pathImg2[1]);
  btnA.innerHTML = choice1[1]
  btnB.innerHTML = choice2[1]
  btnA.addEventListener("click", function () {
    falseAnswer2(count, bPoint, sPoint);
  });
  btnB.addEventListener("click", function () {
    trueAnswer2(count, bPoint, sPoint);
  });
}

function question3() {
  stateHint = true;
  questionContainer.setAttribute("style", "visibility: visible;")
  answerContainer.setAttribute("style", "visibility: hidden;")
  questionA.innerHTML = question[2];
  hint.innerHTML = hintText;
  hint.style.color = "#333"
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[2]);
  picB.setAttribute("src", pathImg2[2]);
  btnA.innerHTML = choice1[2]
  btnB.innerHTML = choice2[2]
  btnA.addEventListener("click", function () {
    falseAnswer3(count, bPoint, sPoint);
  });
  btnB.addEventListener("click", function () {
    trueAnswer3(count, bPoint, sPoint);
  });
}

function question4() {
  stateHint = true;
  questionContainer.setAttribute("style", "visibility: visible;")
  answerContainer.setAttribute("style", "visibility: hidden;")
  questionA.innerHTML = question[3];
  hint.innerHTML = hintText;
  hint.style.color = "#333"
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[3]);
  picB.setAttribute("src", pathImg2[3]);
  btnA.innerHTML = choice1[3]
  btnB.innerHTML = choice2[3]
  btnA.addEventListener("click", function () {
    falseAnswer4(count, bPoint, sPoint);
  });
  btnB.addEventListener("click", function () {
    trueAnswer4(count, bPoint, sPoint);
  });
}

function question5() {
  stateHint = true;
  questionContainer.setAttribute("style", "visibility: visible;")
  answerContainer.setAttribute("style", "visibility: hidden;")
  questionA.innerHTML = question[4];
  hint.innerHTML = hintText;
  hint.style.color = "#333"
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[4]);
  picB.setAttribute("src", pathImg2[4]);
  btnA.innerHTML = choice1[4]
  btnB.innerHTML = choice2[4]
  btnA.addEventListener("click", function () {
    trueAnswer5(count, bPoint, sPoint);
  });
  btnB.addEventListener("click", function () {
    trueAnswer5(count, bPoint, sPoint);
  });
}

function question6() {
  stateHint = true;
  questionContainer.setAttribute("style", "visibility: visible;")
  answerContainer.setAttribute("style", "visibility: hidden;")
  questionA.innerHTML = question[5];
  hint.innerHTML = hintText;
  hint.style.color = "#333"
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[5]);
  picB.setAttribute("src", pathImg2[5]);
  btnA.innerHTML = choice1[5]
  btnB.innerHTML = choice2[5]
  btnA.addEventListener("click", function () {
    trueAnswer6(count, bPoint, sPoint);
  });
  btnB.addEventListener("click", function () {
    falseAnswer6(count, bPoint, sPoint);
  });
}

// Answer Part --------------------------------------------------------------------------------------
var answer = document.querySelector(".textAnswer");
var picAnswer = document.querySelector("#imgAnswer");

function trueAnswer1(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansCorrect[0]
  picAnswer.setAttribute("src", pathAns1[0])
  picAnswer.setAttribute("width", sizeImg1[0] + "px")
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
  nextBtn.addEventListener("click", function () {
    question2(count, bPoint, sPoint);
  });
}

function falseAnswer1(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansFalse[0]
  picAnswer.setAttribute("src", pathAns2[0])
  picAnswer.setAttribute("width", sizeImg2[0] + "px")
  count = count + 1;
  bPoint = bPoint + 2;
  nextBtn.addEventListener("click", function () {
    question2(count, bPoint, sPoint);
  });
}

function trueAnswer2(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansCorrect[1]
  picAnswer.setAttribute("src", pathAns1[1])
  picAnswer.setAttribute("width", sizeImg1[1] + "px")
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
  nextBtn.addEventListener("click", function () {
    question3(count, bPoint, sPoint);
  });
}

function falseAnswer2() {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansFalse[1]
  picAnswer.setAttribute("src", pathAns2[1])
  picAnswer.setAttribute("width", sizeImg2[1] + "px")
  count = count + 1;
  bPoint = bPoint + 2;
  nextBtn.addEventListener("click", function () {
    question3(count, bPoint, sPoint);
  });
}

function trueAnswer3(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansCorrect[2]
  picAnswer.setAttribute("src", pathAns1[2])
  picAnswer.setAttribute("width", sizeImg1[2] + "px")
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
  nextBtn.addEventListener("click", function () {
    question4(count, bPoint, sPoint);
  });
}

function falseAnswer3(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansFalse[2]
  picAnswer.setAttribute("src", pathAns2[2])
  picAnswer.setAttribute("width", sizeImg2[2] + "px")
  count = count + 1;
  bPoint = bPoint + 2;
  nextBtn.addEventListener("click", function () {
    question4(count, bPoint, sPoint);
  });
}

function trueAnswer4(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansCorrect[3]
  picAnswer.setAttribute("src", pathAns1[3])
  picAnswer.setAttribute("width", sizeImg1[3] + "px")
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
  nextBtn.addEventListener("click", function () {
    question5(count, bPoint, sPoint);
  });
}

function falseAnswer4(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansFalse[3]
  picAnswer.setAttribute("src", pathAns2[3])
  picAnswer.setAttribute("width", sizeImg2[3] + "px")
  count = count + 1;
  bPoint = bPoint + 2;
  nextBtn.addEventListener("click", function () {
    question5(count, bPoint, sPoint);
  });
}

function trueAnswer5(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansCorrect[4]
  picAnswer.setAttribute("src", pathAns1[4])
  picAnswer.setAttribute("width", sizeImg1[4] + "px")
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
  nextBtn.addEventListener("click", function () {
    question6(count, bPoint, sPoint);
  });
}

function falseAnswer5(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansFalse[4]
  picAnswer.setAttribute("src", pathAns2[4])
  picAnswer.setAttribute("width", sizeImg2[4] + "px")
  count = count + 1;
  bPoint = bPoint + 2;
  nextBtn.addEventListener("click", function () {
    question6(count, bPoint, sPoint);
  });
}

function trueAnswer6(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansCorrect[5]
  picAnswer.setAttribute("src", pathAns1[5])
  picAnswer.setAttribute("width", sizeImg1[5] + "px")
  count = count + 1;
  sPoint = sPoint + 1;
  bPoint = bPoint + 3;
  nextBtn.addEventListener("click", function () {
    result(count, bPoint, sPoint);
  });
}

function falseAnswer6(count, bPoint, sPoint) {
  questionContainer.setAttribute("style", "visibility: hidden;")
  answerContainer.setAttribute("style", "visibility: visible;")
  answer.innerHTML = ansFalse[5]
  picAnswer.setAttribute("src", pathAns2[5])
  picAnswer.setAttribute("width", sizeImg2[5] + "px")
  count = count + 1;
  bPoint = bPoint + 2;
  nextBtn.addEventListener("click", function () {
    result(count, bPoint, sPoint);
  });
}
// Result --------------------------------------------------------------------------------------
function result(count, bPoint, sPoint) {
  if (sPoint >= 4) {
    window.location.href = '/page/pass/pass.html'
  }
  else {
    window.location.href = '/page/fail/fail.html'
  }
}


function retreat() {
  Swal.fire({
    template: '#retreats',
    icon: 'warning',
    width: '40vw',
    title: 'อะไรกัน เจ้าจะยอมเเพ้เเล้วอย่างนั้นรึ?',
    showConfirmButton: false,
    focusConfirm: false,
    allowOutsideClick: false,
    backdrop: false,
  });
}

function playAgain() {
  window.location.href = '/page/question/question.html'
}
function home() {
  window.location.href = '/index.html'
}
function cancle() {
  Swal.close({})
}

function mouseOver() {
  var mouseSound = new Audio('/assets/effect/Click 4.wav')
  mouseSound.volume = 0.2;
  mouseSound.play();
}

function checkbanana(count, bPoint, sPoint) {
  if (bPoint < 5 && stateHint == true) {
    var errorEffect = new Audio('/assets/effect/Wrong 2.wav')
    errorEffect.volume = 0.25
    errorEffect.play();
    setTimeout(() => {
      errorEffect.pause();
    }, 500);

    hint.innerText = "ไม่สนิทอย่าติดตลก ไปหากล้วยมาใหม่!!!"
    hint.style.color = "red"
    setTimeout(() => {
      hint.innerText = hintText
      hint.style.color = "black"
    }, 2000);

  } else {
    if (stateHint == true) {
      bPoint = bPoint - 5
      stateHint = false;
      var correctEffect = new Audio('/assets/effect/Click 3.wav')
      correctEffect.volume = 0.75
      correctEffect.play();
      setTimeout(() => {
        correctEffect.pause();
      }, 200);
    }
    banana.innerText = bPoint
    hint.innerText = listHint[count]
    hint.style.color = "green"
  }
}