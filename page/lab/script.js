var count = -1;
var id = null;
var element = document.querySelector("body");
var monkey = document.getElementById("monkey");
var doc = document.getElementById("doctor");
var bird = document.getElementById("bird");
let word = [
    'อ่าวสวัสดีลิงน้อย... อืม... ดูทรงน่าจะได้นะ สนใจมาลองเข้าร่วมโปรเจกต์ EHT ไหมล่ะ ?',
    'สนใจครับ แต่ผมพึ่งมาทำงานใหม่เองนะครับ',
    'ไม่เกี่ยวหรอก ขอแค่มีความรู้ด้านนี้ ก็เข้าร่วมได้แล้ว',
    'งั้นก็ลองดูครับ',
    'งั้นเรื่องการสัมภาษณ์ความรู้เรื่องนี้เอาเป็นตอบคำถามเอาละกัน... ok ฝากนกแก้วเป็นผู้สอบสัมภาษณ์ละกัน',
    'สวัสดีครับผมเป็นผู้ช่วยของ Dr. จะมาสอบสัมภาษณ์ครับ',
    'ครับ ผมพร้อมเเล้วครับ',
    'โอเค เริ่มเลยนะ']
let [selectedText0, selectedText1, selectedText2, selectedText3, selectedText4, selectedText5, selectedText6, selectedText7] =
    [word[0], word[1], word[2], word[3], word[4], word[5], word[6], word[7]];
var [array0, array1, array2, array3, array4, array5, array6, array7] =
    [selectedText0.split(""), selectedText1.split(""),
    selectedText2.split(""), selectedText3.split(""),
    selectedText4.split(""), selectedText5.split(""),
    selectedText6.split(""), selectedText7.split("")];

element.addEventListener("mouseover", function () {
    main();
}, { once: true });

function main() {
    sound();
    showDialog();
    state2();
    state3();
    state4();
    state5();
    state6();
    state7();
    state8();
    state9();
    state10();
}

function sound() {
    var sound = new Audio('/assets/sound/Like_a_dream_come_true.mp3')
    sound.volume = 0.075;
    sound.loop = true;
    sound.play();
}

function showDialog() {
    setTimeout(() => {
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
    }, 1500);
}

function state2() {
    setTimeout(() => {
        monkey.style = "opacity: .5;";
        doc.style = "opacity: 1;";
        frameLooper0();
        count++;
    }, 2500);
}
function state3() {
    setTimeout(() => {
        monkey.style = "opacity: 1;";
        doc.style = "opacity: .5;";
        document.getElementById("dialog0").style.opacity = 0;
        document.getElementById("dialog1").style.opacity = 1;
        frameLooper1();
        count++;
    }, 8000);
}
function state4() {
    setTimeout(() => {
        monkey.style = "opacity: .5;";
        doc.style = "opacity: 1;";
        document.getElementById("dialog1").style.opacity = 0;
        document.getElementById("dialog2").style.opacity = 1;
        frameLooper2();
        count++;
    }, 11000);
}
function state5() {
    setTimeout(() => {
        monkey.style = "opacity: 1;";
        doc.style = "opacity: .5;";
        document.getElementById("dialog2").style.opacity = 0;
        document.getElementById("dialog3").style.opacity = 1;
        frameLooper3();
        count++;
    }, 15000);
}
function state6() {
    setTimeout(() => {
        monkey.style = "opacity: .5;";
        doc.style = "opacity: 1;";
        document.getElementById("dialog3").style.opacity = 0;
        document.getElementById("dialog4").style.opacity = 1;
        frameLooper4();
        count++;
    }, 17000);
}
function state7() {
    setTimeout(() => {
        monkey.style = "opacity: 1;";
        doc.style = "opacity: 0;";
        bird.style.opacity = 1;
        document.getElementById("dialog4").style.opacity = 0;
        var elem = document.getElementById("bird");
        var pos = -470;
        var pas = 500;
        id = setInterval(frame, 7);
        function frame() {
            if (pos == 80) {
                clearInterval(id);
            }
            else if (pas == -50) {
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
    }, 23000);
}
function state8() {
    setTimeout(() => {
        monkey.style.opacity = .5
        bird.style.opacity = 1
        document.getElementById("dialog5").style.opacity = 1;
        frameLooper5();
        count++;
    }, 25000);
}
function state9() {
    setTimeout(() => {
        monkey.style.opacity = 1
        bird.style.opacity = .5
        document.getElementById("dialog5").style.opacity = 0;
        document.getElementById("dialog6").style.opacity = 1;
        frameLooper6();
        count++;
    }, 29000);
}
function state10() {
    setTimeout(() => {
        monkey.style.opacity = .5
        bird.style.opacity = 1
        document.getElementById("dialog6").style.opacity = 0;
        document.getElementById("dialog7").style.opacity = 1;
        frameLooper7();
        count++;
    }, 31500);
}

function frameLooper0() {
    let timer = setTimeout('frameLooper0()', 50);
    if (array0.length > 0) {
        document.getElementById("text0").innerHTML += array0.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text0").innerHTML = selectedText0;
    }
}
function frameLooper1() {
    let timer = setTimeout('frameLooper1()', 50);
    if (array1.length > 0) {
        document.getElementById("text1").innerHTML += array1.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text1").innerHTML = selectedText1;
    }
}
function frameLooper2() {
    let timer = setTimeout('frameLooper2()', 50);
    if (array2.length > 0) {
        document.getElementById("text2").innerHTML += array2.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text2").innerHTML = selectedText2;
    }
}
function frameLooper3() {
    let timer = setTimeout('frameLooper3()', 50);
    if (array3.length > 0) {
        document.getElementById("text3").innerHTML += array3.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text3").innerHTML = selectedText3;
    }
}
function frameLooper4() {
    let timer = setTimeout('frameLooper4()', 50);
    if (array4.length > 0) {
        document.getElementById("text4").innerHTML += array4.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text4").innerHTML = selectedText4;
    }
}
function frameLooper5() {
    let timer = setTimeout('frameLooper5()', 50);
    if (array5.length > 0) {
        document.getElementById("text5").innerHTML += array5.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text5").innerHTML = selectedText5;
    }
}
function frameLooper6() {
    let timer = setTimeout('frameLooper6()', 50);
    if (array6.length > 0) {
        document.getElementById("text6").innerHTML += array6.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text6").innerHTML = selectedText6;
    }
}
function frameLooper7() {
    let timer = setTimeout('frameLooper7()', 50);
    if (array7.length > 0) {
        document.getElementById("text7").innerHTML += array7.shift();
    }
    else {
        clearTimeout(timer);
        document.getElementById("text7").innerHTML = selectedText7;
    }

    setTimeout(() => {
        window.location.href = '/page/question/question.html'
    }, 3000);
}