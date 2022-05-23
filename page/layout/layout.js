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
  "ข่าวพึ่งออกไปตอบอะไรดีน้า",
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

var hintText = "เอากล้วยมา 5 ลูก แล้วฉันจะบอกคำใบ้นาย";
var stateHint = true;
var count = 5;
var bPoint = 3;
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

  questionA.innerHTML = question[0];
  hint.innerHTML = hintText;
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[0]);
  picB.setAttribute("src", pathImg2[0]);
  btnA.innerHTML = choice1[0]
  btnB.innerHTML = choice2[0]
}

function nextQuestion() {
  questionA.innerHTML = question[0 + count];
  hint.innerHTML = hintText;
  banana.innerHTML = bPoint;
  star.innerHTML = sPoint;
  picA.setAttribute("src", pathImg1[0 + count]);
  picB.setAttribute("src", pathImg2[0 + count]);
  btnA.innerHTML = choice1[0 + count]
  btnB.innerHTML = choice2[0 + count]
}

function mouseOver() {
  var mouseSound = new Audio('/assets/effect/Click 4.wav')
  mouseSound.volume = 0.2;
  mouseSound.play();
}
// Answer Part --------------------------------------------------------------------------------------