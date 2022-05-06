var count = -1;
var id = null;
let word = ['ok จากการสัมภาษณ์ประเมินแล้ว ดูเหมือนว่านายไม่เหมาะสมที่จะทำ โปรเจคนี้นะ เสียใจด้วย พยายามต่อไปนะ', 'ครับผม ผมจะพยายามให้มากขึ้นครับ '];
function dialog(){
    var monkey = document.getElementById("monkey");
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
        bird.style = "opacity: 1;";
        frameLooper0();
        count++;
    }
    else if (count == 1){
        document.getElementById("monkey").src = "../assets/Image/monkey-sad-face.png"
        monkey.style = "opacity: 1;";
        bird.style = "opacity: .5;";
        document.getElementById("dialog0").style.opacity = 0;
        document.getElementById("dialog1").style.opacity = 1;
        frameLooper1();
        count++;
    }
}
let [selectedText0, selectedText1] = 
[word[0], word[1]];
var [array0, array1] = 
[selectedText0.split(""), selectedText1.split("")];

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