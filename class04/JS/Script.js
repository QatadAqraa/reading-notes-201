'use strict'
function yourName() {
    var yourname = prompt('what is your name?');
    alert('Hello ' + yourname);
}

function quest1() {
    var grade = 0;
    var name = prompt('is my name Qatad? (yes/no)');
    if (name.toLowerCase() === "yes") {
        alert('correct answer');
        grade++;
    } else {
        alert('wrong answer');
    }
}

function quest2() {
    var age = prompt('is my name age 28? (yes/no)');
    if (age.toLowerCase() === "no") {
        alert('correct answer');
        grade++;
    } else {
        alert('wrong answer');
    }
}
function quest3() {
    var team = prompt('is my favourite football team machester united? (yes/no)');
    if (team.toLowerCase() === "yes") {
        alert('correct answer');
        grade++;
    } else {
        alert('wrong answer');
    }
}

function quest4() {
    var born = prompt('was I born in nablus? (yes/no)');
    if (born.toLowerCase() === "yes") {
        alert('correct answer');
        grade++;
    } else {
        alert('wrong answer');
    }
}

function quest5() {
    var university = prompt('is my universiety zarqa university ? (yes/no)');
    if (university.toLowerCase() === "yes") {
        alert('correct answer');
        grade++;
    } else {
        alert('wrong answer');
    }
}

function mark() {
    alert("your score " + grade + " /5 ");
}

yourName();

quest1();

quest2();

quest3();

quest4();

quest5();

mark();



