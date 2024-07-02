let countPlayer = 1;
let countPC = 1;
var countPlayer2 = 1;
var countpc2 = 1;
let finalCount = 30;
let closePopup = document.getElementById("popup");

// my code for the game logic//


function rollAnimation() {
    const dice = document.getElementById("dice-img");
    dice.style.animation = "roll 1s";
    dice.addEventListener("animationend", () => {
        dice.style.animation = ""; // Reset animation property
    });
}

function userRoll() {
    let userRoll = Math.floor((Math.random() * 6) + 1);
    let rollCount = document.getElementById("counts");

    //lets user know their own count.

    rollCount.textContent = `You Got ${userRoll}`
    countPlayer += userRoll;
    let countPlayer2;
    countPlayer2 += countPlayer - userRoll;

    playerCounter();
    removePawn()

}
function aiRoll() {
    let computerRoll = Math.floor((Math.random() * 6) + 1);
    let compCount = document.getElementById("computer-counts")

    //lets user know the count the AI(NPC) got.


    compCount.textContent = `Comp Got ${computerRoll}`
    countPC += computerRoll;
    let countPc2;
    countPc2 = countPC - computerRoll;

    pcCounter();
    removePawn()

}

function pcCounter() {

    //pc game logic(or the computer players logic.)

    if (countPC === 2) {
        document.getElementById("box2").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 3) {
        document.getElementById("box3").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 4) {
        document.getElementById("box4").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 5) {
        document.getElementById("box5").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 6) {
        document.getElementById("box6").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 7) {
        document.getElementById("box7").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 8) {
        document.getElementById("box8").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 9) {
        document.getElementById("box9").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 10) {
        document.getElementById("box10").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 11) {
        document.getElementById("box11").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 12) {
        document.getElementById("box12").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 13) {
        document.getElementById("box13").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 14) {
        document.getElementById("box14").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
    }
    else if (countPC === 15) {
        document.getElementById("box15").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 16) {
        document.getElementById("box16").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 17) {
        document.getElementById("box17").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 18) {
        document.getElementById("box18").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 19) {
        document.getElementById("box19").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 20) {
        document.getElementById("box20").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 21) {
        document.getElementById("box21").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 22) {
        document.getElementById("box22").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 23) {
        document.getElementById("box23").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 24) {
        document.getElementById("box24").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 25) {
        document.getElementById("box25").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 26) {
        document.getElementById("box26").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 27) {
        document.getElementById("box27").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }

    else if (countPC === 28) {
        document.getElementById("box28").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 29) {
        document.getElementById("box29").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn()
    }
    else if (countPC === 30) {
        document.getElementById("box30").querySelector(".pawn").children[0].style.display = "block";
        document.getElementById(`box${countpc2}`).querySelector(".pawn").children[0].style.display = "none";
        removePawn();
    }
    else if (countPC >= finalCount && countPlayer < finalCount) {
        document.getElementById("popup").style.display = "flex"
        document.getElementById("announce").textContent = "Computer Wins"
        document.getElementById("RESTART").style.display = "flex"
    }
}
//main player game logic

function playerCounter() {

    if (countPlayer === 2) {
        document.getElementById("box2").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 3) {
        document.getElementById("box3").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 4) {
        document.getElementById("box4").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 5) {
        document.getElementById("box5").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 6) {
        document.getElementById("box6").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 7) {
        document.getElementById("box7").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 8) {
        document.getElementById("box8").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 9) {
        document.getElementById("box9").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 10) {
        document.getElementById("box10").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 11) {
        document.getElementById("box11").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 12) {
        document.getElementById("box12").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 13) {
        document.getElementById("box13").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 14) {
        document.getElementById("box14").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 15) {
        document.getElementById("box15").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 16) {
        document.getElementById("box16").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 17) {
        document.getElementById("box17").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 18) {
        document.getElementById("box18").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 19) {
        document.getElementById("box19").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 20) {
        document.getElementById("box20").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 21) {
        document.getElementById("box21").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 22) {
        document.getElementById("box22").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 23) {
        document.getElementById("box23").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 24) {
        document.getElementById("box24").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 25) {
        document.getElementById("box25").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 26) {
        document.getElementById("box26").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 27) {
        document.getElementById("box27").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 28) {
        document.getElementById("box28").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 29) {
        document.getElementById("box29").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer === 30) {
        document.getElementById("box30").querySelector(".pawn").children[1].style.display = "block";
        document.getElementById(`box${countPlayer2}`).querySelector(".pawn").children[1].style.display = "none";
    }
    else if (countPlayer >= finalCount) {
        document.getElementById("popup").style.display = "flex"
        document.getElementById("announce").textContent = "You win"
        document.getElementById("RESTART").style.display = "flex"

    }
}

function closePopup1() {
    if (closePopup.style.display = "flex") {
        closePopup.style.display = "none"
    }
}
document.getElementById("roll-dice").addEventListener("click", () => {
    userRoll();
    aiRoll();
    pcCounter();
    playerCounter();
    rollAnimation();
});
function reStart() {
    for (let i = 2; i <= finalCount; i++) {
        document.getElementById(`box${i}`).querySelector(".pawn").children[0].style.display = "none";
        document.getElementById(`box${i}`).querySelector(".pawn").children[1].style.display = "none";
    }
    countPlayer = 1;
    countPC = 1;
    countPlayer2 = 1;
    countpc2 = 1;
    document.getElementById("popup").style.display = "none";
    document.getElementById("RESTART").style.display = "none";
}
function removePawn() {

    for (let i = 30; i <= finalCount; i++) {

        if (document.getElementById(`box${i}`).querySelector(".pawn").children[0].style.display = "block") {
            document.getElementById(`box${i}`).querySelector(".pawn").children[0].style.display = "none";
        }

        else if (document.getElementById(`box${i}`).querySelector(".pawn").children[1].style.display = "block") {
            document.getElementById(`box${i}`).querySelector(".pawn").children[1].style.display = "none";
        }
    }
}
