var count = -1;
var id = null;
var monkey = document.getElementById("monkey");
var bird = document.getElementById("bird");
var word = [
    'ok จากการสัมภาษณ์ประเมินแล้ว ดูเหมือนว่า นายมีสิทธิ์เข้าร่วมโครงการ EHT นะ สนใจจะเข้าไหม',
    'สนใจครับ',
    'งั้นก็เริ่มทำโปรเจ็คได้เลย โปรคเจคต่อไปคือการถ่าย Sagittarius A* ฝากด้วยนะ']
var [selectedText0, selectedText1, selectedText2] = [word[0], word[1], word[2]];
var [array0, array1, array2] =
    [selectedText0.split(""),
    selectedText1.split(""),
    selectedText2.split("")];


function main() {
    showDialog();
    state2();
    state3();
    state4();
    state5();
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
        bird.style = "opacity: 1;";
        frameLooper0();
        count++;
    }, 2500);
}

function state3() {
    setTimeout(() => {
        monkey.style = "opacity: 1;";
        bird.style = "opacity: .5;";
        document.getElementById("dialog0").style.opacity = 0;
        document.getElementById("dialog1").style.opacity = 1;
        frameLooper1();
        count++;
    }, 8000);
}

function state4() {
    setTimeout(() => {
        monkey.style = "opacity: .5;";
        bird.style = "opacity: 1;";
        document.getElementById("dialog1").style.opacity = 0;
        document.getElementById("dialog2").style.opacity = 1;
        frameLooper2();
        count++;
    }, 9500);
}

function state5() {
    setTimeout(() => {
        //  Blur Screen
    }, 15000);
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