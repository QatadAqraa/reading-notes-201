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

var guessyear = 17;
var numCount = 1;
alert("guess which year i graduted from university number between 10 and 20, you have only 4 attempts to guess it");
do {
    var gradeguess = prompt("Attempt " + numCount);
    numCount++;
    // console.log("user's guess "+ gradeguess);
    // console.log("the counter "+numCount);
    if (gradeguess == guessyear) {
        grade++;
        break;
    } else if (gradeguess > guessyear) {
        alert("no before this year");
    } else {
        alert("no after this year");
    }

} while (numCount < 5);

// console.log("user guess "+gradeguess);
// console.log("the num "+ guessyear);

if (gradeguess == guessyear) {
    grade++;
    alert("yes in this year graduted");
} else {
    alert("wrong :(, I am graduted in 2017");
}

var palcity = ["jerusalem", "nablus", "akka", "gaza", "alkhalil", "beitlahm", "jenin", "jerico", "safd", "bessan"];
var attempt2 = 0;
var i = 0;
do {
    if (attempt2 == 0) {
        var cityname = prompt("Write down one name of palestine citis, you have six attempts to write one correct answer.");
    } else {
        cityname = prompt("not this , try again");
    }
    for (var citynum = 0; citynum < 10; citynum++) {
        switch (cityname.toLowerCase()) {
            case palcity[citynum]:
                grade++;
                alert("right !");
                console.log(cityname);
                i++;
                break;
        }
    }
    attempt2++;
    console.log(attempt2);
} while ((attempt2 < palcity.length) && (i !== 1));
alert("your answer was " + cityname + " the correct answers are " + palcity);
alert("your score " + grade + " / 7 ");