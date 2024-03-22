// used for global declaration
// reassign to another value allowed
var name1 = "aaa";
name1 = "ddd";
console.log(name1);

// used for local declaration like inside loops
// reassign to another value allowed
let name2 = "bbb";
name2 = "eee";
console.log(name2);
for (let i = 0; i < 4; i++) {
    console.log("Number=" + (i + 1));
}

// used when we know the exact values for making it constant
// reassign to another value not allowed
const name3 = "ccc";
console.log(name3);

// setTimeOut executes the function once after a particular time
function timeOut() {
    var tom = new Audio("./tom-1.mp3");
    setTimeout(() => {
        tom.play();
    }, 3000);
}

// setInterval helps in continously executing at equal intervals of time
var aud = new Audio("./aud.mp3");
setInterval(() => {
    aud.play();
}, 2000);

var inc = 0;
setInterval(() => {
    inc = inc + 1;
    document.getElementById("sec").innerHTML = inc;
}, 1000);

function startTime() {
    var txt = document.getElementById("cmd");
    if (txt.innerText === "Start timer :") {
        txt.innerText = "Stop timer :";
        timer();
    } else {
        txt.innerText = "Start timer:";
        document.getElementById("time").innerHTML = 0;
    }
}
function timer() {
    var time = 0;
    setInterval(() => {
        document.getElementById("time").innerHTML = ++time;
    }, 1000);
}
