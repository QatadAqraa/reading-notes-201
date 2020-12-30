'use strict'

var yourname = prompt('what is your name?');
alert('Hello ' + yourname);

var grade = 0;
var name = prompt('is my name Qatad? (yes/no)');
if (name.toLowerCase() === "yes") {
    alert('correct answer');
    grade++;
} else {
    alert('wrong answer');
}

var age = prompt('is my name age 28? (yes/no)');
if (age.toLowerCase() === "no") {
    alert('correct answer');
    grade++;
} else {
    alert('wrong answer');
}

var team = prompt('is my favourite football team machester united? (yes/no)');
if (team.toLowerCase() === "yes") {
    alert('correct answer');
    grade++;
} else {
    alert('wrong answer');
}

var born = prompt('was I born in nablus? (yes/no)');
if (born.toLowerCase() === "yes") {
    alert('correct answer');
    grade++;
} else {
    alert('wrong answer');
}

var university = prompt('is my universiety zarqa university ? (yes/no)');
if (university.toLowerCase() === "yes") {
    alert('correct answer');
    grade++;
} else {
    alert('wrong answer');
}

alert("your score " + grade + " /5 ");