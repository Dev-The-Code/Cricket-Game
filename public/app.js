var selectedTeam;
var radios = document.getElementsByName('rbtn');
function validateRadios() {

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedTeam = radios[i].value;
            // alert(selectedTeam);
            break;
        }
        // else if (radios[i].unchecked) {

        // }


        // if (radios[0].checked) {
        //     selectedTeam = radios[i].value;
        //     alert(selectedTeam);

        // }
        // else if (radios[1].checked) {
        //     selectedTeam = radios[i].value;
        //     alert(selectedTeam);
        // }
        // return false;

    }
}

function toss(tossEl) {
    var tossNum = Math.ceil(Math.random() * 2);

    if (tossNum === 1) {
        chose.innerHTML = "You won the toss";
        // console.log("You won the toss");

        var nodeToAddForSelect = document.createElement("h3");
        nodeToAddForSelect.setAttribute("id", "heading");
        var heading = document.createTextNode("Please Select Bat Or Ball");
        nodeToAddForSelect.appendChild(heading);
        heading1.appendChild(nodeToAddForSelect);


        var nodeToAddForBat = document.createElement("img");
        nodeToAddForBat.setAttribute("id", "regular1");
        nodeToAddForBat.setAttribute("src", "images/battss.png");
        nodeToAddForBat.setAttribute("height", "80px")
        nodeToAddForBat.setAttribute("width", "80px")

        nodeToAddForBat.setAttribute("onClick", "forBat();");
        var bat = document.createTextNode("Bat!");
        nodeToAddForBat.appendChild(bat);
        fieldEl.appendChild(nodeToAddForBat);
        nodeToAddForBat.onclick = function () {
            var img = document.getElementById('fieldEl');
            img.style.visibility = 'hidden';
            seletField.innerHTML = " Elected To Bat First";
            // console.log("Bat")


        };

        var nodeToAddForBall = document.createElement("img");
        nodeToAddForBall.setAttribute("id", "regular2");
        nodeToAddForBall.setAttribute("src", "images/ball.png");
        nodeToAddForBall.setAttribute("height", "80px")
        nodeToAddForBall.setAttribute("width", "80px")

        nodeToAddForBall.setAttribute("onClick", "forBall();");
        var ball = document.createTextNode("Ball!");
        nodeToAddForBall.appendChild(ball);
        fieldEl.appendChild(nodeToAddForBall);
        nodeToAddForBall.onclick = function () {
            var img = document.getElementById('fieldEl');
            img.style.visibility = 'hidden';
            seletField.innerHTML = " Elected To Ball First";

            // console.log("Ball");
        };
    }

    else if (tossNum === 2) {
        chose.innerHTML = "You loss the toss";
        // console.log("You loss the toss");




        var nodeToAddForSelect = document.createElement("h3");
        nodeToAddForSelect.setAttribute("id", "heading");
        var heading = document.createTextNode("Please Select Bat Or Ball");
        nodeToAddForSelect.appendChild(heading);
        heading1.appendChild(nodeToAddForSelect);



        var nodeToAddForBat = document.createElement("img");
        nodeToAddForBat.setAttribute("id", "regular1");
        nodeToAddForBat.setAttribute("src", "images/battss.png");
        nodeToAddForBat.setAttribute("height", "80px")
        nodeToAddForBat.setAttribute("width", "80px")

        nodeToAddForBat.setAttribute("onClick", "forBat();");
        var bat = document.createTextNode("Bat!");
        nodeToAddForBat.appendChild(bat);
        fieldEl.appendChild(nodeToAddForBat);
        nodeToAddForBat.onclick = function () {
            var img = document.getElementById('fieldEl');
            img.style.visibility = 'hidden';
            seletField.innerHTML = " Elected To Bat First";

        };

        var nodeToAddForBall = document.createElement("img");
        nodeToAddForBall.setAttribute("id", "regular2");
        nodeToAddForBall.setAttribute("src", "images/ball.png");
        nodeToAddForBall.setAttribute("height", "80px")
        nodeToAddForBall.setAttribute("width", "80px")
        nodeToAddForBall.setAttribute("onClick", "forBall();");
        var ball = document.createTextNode("Ball!");
        nodeToAddForBall.appendChild(ball);
        fieldEl.appendChild(nodeToAddForBall);
        nodeToAddForBall.onclick = function () {
            var img = document.getElementById('fieldEl');
            img.style.visibility = 'hidden';
            seletField.innerHTML = " Elected To Ball First";

            // console.log("Ball");
        };
    }
}






var teamAScoreEl = document.getElementById('teamAScore');
var teamBScoreEl = document.getElementById('teamBScore');
var outOf1stInning = document.getElementById('outOf1stInning');
var outOf2ndInningEl = document.getElementById('outOf2ndInning');
var overEl = document.getElementById('over');
var ballsEl = document.getElementById('balls');
var targetEl = document.getElementById('target');
var display = document.getElementById('runs');


var scoreTeam1 = 0;
var scoreTeam2 = 0;
var ballsTeam1 = 0;
var ballsTeam2 = 0;
var oversTeam1 = 0;
var oversTeam2 = 0;
var wicketsTeam1 = 0;
var wicketsTeam2 = 0;
var matchFlagTeam1 = false;
var matchFlagTeam2 = false;

function bowling() {
    if (matchFlagTeam1 === false) {

        ballsTeam1 += 1;

        var runs = Math.ceil(Math.random() * 6);

        if (runs === 0) {

            var out1 = Math.ceil(Math.random() * 3);

            if (out1 === 1) {

                display.innerHTML = 'RUN OUT';

            }
            else if (out1 === 2) {
                display.innerHTML = 'CATCH';
            }
            else {
                display.innerHTML = 'BOLD'
            }

            wicketsTeam1 += 1;

            outOf1stInning.innerHTML = wicketsTeam1;
        }
        else if (runs === 1) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 2) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 3) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 4) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 5) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 6) {

            display.innerHTML = runs + " Runs";
        }
        scoreTeam1 = scoreTeam1 + runs
        teamAScoreEl.innerHTML = scoreTeam1;
        outOf1stInning.innerHTML = wicketsTeam1;
        ballsEl.innerHTML = ballsTeam1;
        if (ballsTeam1 === 6) {
            oversTeam1 += 1;
            overEl.innerHTML = oversTeam1;
            ballsTeam1 = 0;
            ballsEl.innerHTML = ballsTeam1;
        }
    }

    if (oversTeam1 === 2 || wicketsTeam1 === 2) {
        matchFlagTeam1 = true;
        var target = scoreTeam1 + 1;
        targetEl.innerHTML = target;
    }

    if (matchFlagTeam2 === false && matchFlagTeam1 === true) {

        overEl.innerHTML = oversTeam2;
        ballsEl.innerHTML = ballsTeam1;
        display.innerHTML = "Start the 2nd Inning";



        ballsTeam2 += 1;

        var runs = Math.ceil(Math.random() * 6);

        if (runs === 0) {

            var out1 = Math.ceil(Math.random() * 3);

            if (out1 === 1) {

                display.innerHTML = 'RUN OUT';

            }
            else if (out1 === 2) {
                display.innerHTML = 'CATCH';
            }
            else {
                display.innerHTML = 'BOLD'
            }

            wicketsTeam2 += 1;
            outOf2ndInningEl.innerHTML = wicketsTeam2;
        }
        else if (runs === 1) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 2) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 3) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 4) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 5) {

            display.innerHTML = runs + " Runs";
        }
        else if (runs === 6) {

            display.innerHTML = runs + " Runs";
        }
        scoreTeam2 = scoreTeam2 + runs
        teamBScoreEl.innerHTML = scoreTeam2;
        outOf2ndInningEl.innerHTML = wicketsTeam2;
        ballsEl.innerHTML = ballsTeam2;
        if (ballsTeam2 === 6) {
            oversTeam2 += 1;
            overEl.innerHTML = oversTeam2;
            ballsTeam2 = 0;
            ballsEl.innerHTML = ballsTeam2;
        }
    }
    if (oversTeam2 === 2 || wicketsTeam2 === 2 || scoreTeam2 > scoreTeam1) {
        matchFlagTeam2 = true;
        if (scoreTeam1 > scoreTeam2) {
            display.innerHTML = "Team A Won The Match";

        }
        else if (scoreTeam1 < scoreTeam2) {
            display.innerHTML = "Team B Won The Match";
        }
        else if (scoreTeam1 === scoreTeam2) {
            display.innerHTML = "Match Tie";
        }
    }
}


