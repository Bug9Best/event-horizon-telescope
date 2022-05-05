var count = -1;
var id = null;
let word = ['อ่าวสวัสดีลิงน้อย... อืม... ดูทรงน่าจะได้นะสนใจมาลองเข้าร่วมโครงการ EHT ไหมล่ะ ?', 'สนใจครับแต่ผมพึ่งมาทำงานใหม่เองนะครับ', 'ไม่เกี่ยวหรอกขอแค่มีความรู้ด้านนี้ ก็เข้าร่วมได้แล้ว', 'งั้นก็ลองดูครับ', 
'งั้นเรื่องการสัมภาษณ์ความรู้เรื่องนี้เอาเป็นตอบคำถามเอาละกัน...ok ฝากนกแก้วเป็นผู้สอบสัมภาษณ์ละกัน', 'สวัสดีครับผมเป็นผู้ช่วยของ Dr. จะมาสอบสัมภาษณ์ครับ', 'ครับ', 'เริ่มเลยนะ']
function dialog(){
    var monkey = document.getElementById("monkey");
    var doc = document.getElementById("doctor");
    var bird = document.getElementById("bird");
    if (count == -1){
        var elem = document.getElementById("dialog0");
        var pos = -250;
        id = setInterval(frame, 7);
        function frame() {
            if (pos == 75) {
                clearInterval(id)
            } else {
                pos += 5; 
                elem.style.bottom = pos + 'px'; 
            }
        }
        count++;
    }
    else if (count == 0){
        monkey.style = "opacity: .5;";
        doc.style = "opacity: 1;";
        // document.getElementById("text").innerHTML = word[count]
        frameLooper0();
        count++;
    }
    else if (count == 1){
        monkey.style = "opacity: 1;";
        doc.style = "opacity: .5;";
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog0").style.opacity = 0;
        document.getElementById("dialog1").style.opacity = 1;
        frameLooper1();
        count++;
    }
    else if (count == 2){
        monkey.style = "opacity: .5;";
        doc.style = "opacity: 1;";
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog1").style.opacity = 0;
        document.getElementById("dialog2").style.opacity = 1;
        frameLooper2();
        count++;
    }
    else if (count == 3){
        monkey.style = "opacity: 1;";
        doc.style = "opacity: .5;";
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog2").style.opacity = 0;
        document.getElementById("dialog3").style.opacity = 1;
        frameLooper3();
        count++;
    }
    else if (count == 4){
        monkey.style = "opacity: .5;";
        doc.style = "opacity: 1;";
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog3").style.opacity = 0;
        document.getElementById("dialog4").style.opacity = 1;
        frameLooper4();
        count++;
    }
    else if (count == 5){
        monkey.style = "opacity: 1;";
        doc.style = "opacity: 0;";
        bird.style.opacity = 1;
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog4").style.opacity = 0;
        var elem = document.getElementById("bird");
        var pos = -470;
        var pas = 500;
        id = setInterval(frame, 7);
        function frame() {
            if (pos == 80){
                clearInterval(id);
            }
            else if (pas == -50){
                clearInterval(id);
            }
            else {
                pos += 5;
                pas -= 5; 
                elem.style.right = pos + 'px';
                elem.style.bottom = pas + 'px'; 
            }
        }
        count++;
    }
    else if (count == 6){
        monkey.style.opacity = .5
        bird.style.opacity = 1
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog5").style.opacity = 1;
        frameLooper5();
        count++;
    }
    else if (count == 7){
        monkey.style.opacity = 1
        bird.style.opacity = .5
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog5").style.opacity = 0;
        document.getElementById("dialog6").style.opacity = 1;
        frameLooper6();
        count++;
    }
    else if (count == 8){
        monkey.style.opacity = .5
        bird.style.opacity = 1
        // document.getElementById("text").innerHTML = "";
        document.getElementById("dialog6").style.opacity = 0;
        document.getElementById("dialog7").style.opacity = 1;
        frameLooper7();
        count++;
    }
}
// var count2 = 0;
// var selectedText = word[count2];
// var array = selectedText.split("");
// function frameLooper() {
//     let timer = setTimeout('frameLooper()', 70);
//     if (array0.length > 0) {
//         document.getElementById("text").innerHTML += array.shift();
//     }
//     else{
//         clearTimeout(timer);
//         document.getElementById("text").innerHTML = word[count2];
//         ++count2;
//         selectedText = word[count2];
//         array = selectedText.split("");
//     }
// }
// var i = 0;
// function frameLooper() {
//     let timer = setTimeout('frameLooper1()', 70);
//     if (i < selectedText.length) {
//         document.getElementById("text1").innerHTML += selectedText0.charAt(i);
//         i++;
//     }
//     else{
//         i = 0;
//         clearTimeout(timer);
//         document.getElementById("text1").innerHTML = selectedText;
//         ++count2;
//         selectedText = word[count2];
//     }
// }
let [selectedText0, selectedText1, selectedText2, selectedText3, selectedText4, selectedText5, selectedText6, selectedText7] = 
[word[0], word[1], word[2], word[3], word[4], word[5], word[6], word[7]];
var [array0, array1, array2, array3, array4, array5, array6, array7] = 
[selectedText0.split(""), selectedText1.split(""), 
selectedText2.split(""), selectedText3.split(""), 
selectedText4.split(""), selectedText5.split(""), 
selectedText6.split(""), selectedText7.split("")];

function frameLooper0() {
    let timer = setTimeout('frameLooper0()', 50);
    if (array0.length > 0) {
        document.getElementById("text0").innerHTML += array0.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text0").innerHTML = selectedText0;
    }
}
function frameLooper1() {
    let timer = setTimeout('frameLooper1()', 50);
    if (array1.length > 0) {
        document.getElementById("text1").innerHTML += array1.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text1").innerHTML = selectedText1;
    }
}
function frameLooper2() {
    let timer = setTimeout('frameLooper2()', 50);
    if (array2.length > 0) {
        document.getElementById("text2").innerHTML += array2.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text2").innerHTML = selectedText2;
    }
}
function frameLooper3() {
    let timer = setTimeout('frameLooper3()', 50);
    if (array3.length > 0) {
        document.getElementById("text3").innerHTML += array3.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text3").innerHTML = selectedText3;
    }
}
function frameLooper4() {
    let timer = setTimeout('frameLooper4()', 50);
    if (array4.length > 0) {
        document.getElementById("text4").innerHTML += array4.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text4").innerHTML = selectedText4;
    }
}
function frameLooper5() {
    let timer = setTimeout('frameLooper5()', 50);
    if (array5.length > 0) {
        document.getElementById("text5").innerHTML += array5.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text5").innerHTML = selectedText5;
    }
}
function frameLooper6() {
    let timer = setTimeout('frameLooper6()', 50);
    if (array6.length > 0) {
        document.getElementById("text6").innerHTML += array6.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text6").innerHTML = selectedText6;
    }
}
function frameLooper7() {
    let timer = setTimeout('frameLooper7()', 50);
    if (array7.length > 0) {
        document.getElementById("text7").innerHTML += array7.shift();
    }
    else{
        clearTimeout(timer);
        document.getElementById("text7").innerHTML = selectedText7;
    }
}