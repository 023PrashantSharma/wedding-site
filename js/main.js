function typingText(word, id, colors) {
    if (colors === undefined) {
        colors = ["#fff"]
    }
    var visible = true
    var consoleFirst = document.getElementById("console-first")
    var consoleSecond = document.getElementById("console-second")
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    // target.setAttribute("style", "color:" + colors[0])
    window.setInterval(() => {
        if (letterCount == 0 && waiting == false) {
            waiting = true
            target.innerHTML = word[0].substring(0, letterCount);
            window.setTimeout(() => {
                // var usedColor = colors.shift();
                // colors.push(usedColor)
                var usedWords = word.shift()
                word.push(usedWords)
                x = 1
                // target.setAttribute('style', "color:" + colors[0])
                letterCount += x;
                waiting = false
            }, 1000);
        }
        else if (letterCount == word[0].length + 1 && waiting == false) {
            waiting = true
            window.setTimeout(() => {
                // x = -1;
                letterCount += x
                waiting = false
            }, 1000);
        }
        else if (waiting == false) {
            target.innerHTML = word[0].substring(0, letterCount)
            letterCount += x
        }
    }, 150);
    // window.setInterval(() => {
    if (visible == true) {
        consoleFirst.className = "console-underscore hidden"
        // consoleSecond.className = "console-underscore hidden"
        visible = false
    } else {
        consoleFirst.className = "console-underscore"
        // consoleSecond.className = "console-underscore"
        visible = true
    }
    // }, 500);
}
typingText(["वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥"], "text", ["tomato", "lightblue", "blue", "orange", "yellow"])
const curtainLeftTop = document.querySelector('#curtain-left-top');
const curtainRightTop = document.querySelector('#curtain-right-top');
const curtainLeftBottom = document.querySelector('#curtain-left-bottom');
const curtainRightBottom = document.querySelector('#curtain-right-bottom');
const middleLogo = document.querySelector('#invitation-logo');
window.setTimeout(() => {
    curtainLeftTop.classList.remove('show-left');
    curtainRightTop.classList.remove('show-top');
    curtainLeftBottom.classList.remove('show-bottom');
    curtainRightBottom.classList.remove('show-right');
    window.setTimeout(() => {
        middleLogo.style.opacity = 0;
    }, 500)
}, 2000);