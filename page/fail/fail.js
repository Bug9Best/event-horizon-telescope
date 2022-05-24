var count = -1;
var id = null;
var monkey = document.getElementById("monkey");
var bird = document.getElementById("bird");
let word = [
    'ok จากการสัมภาษณ์ประเมินแล้ว ดูเหมือนว่านายไม่เหมาะสมที่จะทำ โปรเจกต์นี้นะ เสียใจด้วย พยายามต่อไปนะ',
    'ครับผม ผมจะพยายามให้มากขึ้นครับ '];
let [selectedText0, selectedText1] = [word[0], word[1]];
var [array0, array1] = [selectedText0.split(""), selectedText1.split("")];

function main() {
    var soundTrack = new Audio('/assets/sound/Space.mp3')
    soundTrack.volume = 0.15
    soundTrack.play();

    showDialog();
    state2();
    state3();
    state4();
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
        document.getElementById("monkey").src = "/assets/Image/monkey-sad-face.png"
        monkey.style = "opacity: 1;";
        bird.style = "opacity: .5;";
        document.getElementById("dialog0").style.opacity = 0;
        document.getElementById("dialog1").style.opacity = 1;
        frameLooper1();
        count++;
    }, 8500);
}

function state4() {
    setTimeout(() => {
        fail();
    }, 12000);
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

function fail() {
    Swal.fire({
        template: '#fail',
        icon: 'error',
        title: 'เสียใจด้วย คุณไม่ผ่านการทดสอบ ไว้คราวหน้ามาใหม่นะ',
        width: '750px',
        showConfirmButton: false,
        allowOutsideClick: false
    });
    var sound = new Audio('/assets/effect/negative.wav')
    sound.volume = 0.2
    sound.play();
}

function playAgain() {
    localStorage.clear();
    window.location.href = '/page/question/question.html'
}

function landing() {
    window.location.href = '/page//knowledge/knowledge.html'
}