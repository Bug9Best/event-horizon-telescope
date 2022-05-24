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
  "/assets/image/q1-correct-fix.png",
  "/assets/image/q2correct-fix.png",
  "/assets/image/q3-correct-fix.png",
  "/assets/image/q4-correct-fix.png",
  "/assets/image/q5-fix.png",
  "/assets/image/q6.png",]

let ansFalse = [
  "ถ่ายไม่เห็นอะไรเลย! เพราะนอกจากจะมีชั้นบรรยากาศห่อหุ้มโลกเป็นอุปสรรคแล้ว ยังมีฝุ่นต่างที่อยู่ในอวกาศขวางกั้นอีก เอาไปขายทิ้งซะนะ",
  "โลกแตก เพราะการใช้กล้องโทรทรรศน์ตัวเดียวต้องมีขนาดใหญ่เท่าโลกถึง จะถ่ายภาพหลุมดำได้ (และจะเอาเงินที่ไหนไปสร้าง!)",
  "ยอดแย่ คลื่นลมทะเลนั้นรุนแรงเสียจนการจับสัญญาณทำได้ยาก",
  "โดนจับแล้ว!! คาดเกิดจากการทำเครือข่ายอินเทอร์เน็ตทั่วโลกล่มทันทีหลังส่ง ข้อมูลกว่า 5 ล้านกิกะไบต์ ศาลตัดสินให้จำคุกไม่มีประกันตัว",
  "ถูกต้อง! สุดท้ายลิงก็ได้ถ่ายหลุมดำมวลยิ่งยวดของกาแล็กทางช้างเผือก ชื่อว่า Saguttarius A* เป็นครั้งที่สองของโลก ในวันที่ 12 พฤษภษคม 2022 ที่ผ่านมานี้เอง โดยหลุมดำแรกที่ถ่ายได้ก็คือ M87 เมื่อปี 2019 นั่นเอง",
  "หลุมดำที่เกิดจากการระเบิดของดวงดาวเป็น Supernova นั้นมีมวลมากก็จริง แต่ยังไม่มากพอที่จะทำให้เกิดจานสะสมมวล (Accretion Disk) ที่ทำให้เราสังเกตได้",]

let pathAns2 = [
  "/assets/image/q1-false-fix.png",
  "/assets/image/q2-false-fix.png",
  "/assets/image/q3-false-fix.png",
  "/assets/image/q4-false-fix.png",
  "/assets/image/q5-sgra.png",
  "/assets/image/q6.png",]

var hintText = "เอากล้วยมา 5 ลูก แล้วฉันจะบอกคำใบ้นาย";
var stateHint = true;
var count = 1;
var bPoint = 5;
var sPoint = 0;

var questionA = document.querySelector(".question");
var hint = document.querySelector(".hint");
var btnA = document.getElementById("btn1");
var btnB = document.getElementById("btn2");
var picA = document.getElementById("pic1");
var picB = document.getElementById("pic2");
var banana = document.getElementById("banana");
var star = document.getElementById("star");

function showQuestion() {
  var soundTrack = new Audio('/assets/sound/Space.mp3')
  soundTrack.volume = 0.1
  soundTrack.loop = true;
  soundTrack.play();
  nextQuestion();
}

function nextQuestion() {
  questionA.innerHTML = question[count];
  hint.innerHTML = hintText;
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[count]);
  picB.setAttribute("src", pathImg2[count]);
  btnA.innerHTML = choice1[count]
  btnB.innerHTML = choice2[count]
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

function checkbanana() {
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
// Answer Part --------------------------------------------------------------------------------------
var answerA = document.querySelector(".textAnswer");
var picAnswerA = document.querySelector("#imgAnswer");
// var answer = document.querySelector(".boxAnswer");
// var answer = document.querySelector(".boxAnswer");

function trueAnswer() {
  answerA.innerHTML = ansCorrect[count]
  picAnswerA.setAttribute("src",pathAns1[count])
  picAnswerA.setAttribute("width")
}

// Result --------------------------------------------------------------------------------------
function result() {
  if (sPoint >= 4) {
    window.location.href = '/page/pass/pass.html'
  }
  else {
    window.location.href = '/page/fail/fail.html'
  }
}