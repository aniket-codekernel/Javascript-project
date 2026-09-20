let a = "Rock";
let b = "Paper";
let c = "Scissors";

let userscorr = 0;
let compscore = 0;

for (let i = 0; i < 6; i++) {
    let user = prompt("Lets play rock,paper,scissor")
    user = user.toUpperCase();

    if (user == "ROCK") {
        console.log("You give us Rock")
    }
    else if (user == "PAPER") {
        console.log("You give us Paper");
    }
    else if (user == "SCISSOR") {
        console.log("You give us Scissor")
    }
    else {
        console.log("You write something wrong restart again")
    }

    let num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {
        console.log("From my there is a :", a)
        if (user == "ROCK") {
            console.log("Your move is also:", user);
            userscorr = userscorr + 0;
            compscore = compscore + 0;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
        else if (user == "PAPER") {
            console.log("paper beats rock");
            userscorr = userscorr + 1;
            compscore = compscore + 0;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
        else if (user == "SCISSOR") {
            console.log("Rock beat scissor")
            userscorr = userscorr + 0;
            compscore = compscore + 1;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
    }
    
    if (num == 2) {
        console.log("From my there is a :", b)
        if (user == "PAPER") {
            console.log("Your move is also:", user);
            userscorr = userscorr + 0;
            compscore = compscore + 0;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
        else if (user == "ROCK") {
            console.log("paper beats rock");
            userscorr = userscorr + 0;
            compscore = compscore + 1;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
        else if (user == "SCISSOR") {
            console.log("scissor beat paper")
            userscorr = userscorr + 1;
            compscore = compscore + 0;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
    }
    
    if (num == 3) {
        console.log("From my there is a :", c)
        if (user == "SCISSOR") {
            console.log("Your move is also:", user);
            userscorr = userscorr + 0;
            compscore = compscore + 0;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
        else if (user == "ROCK") {
            console.log("rock beats scissor");
            userscorr = userscorr + 1;
            compscore = compscore + 0;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
        else if (user == "PAPER") {
            console.log("scissor beat paper")
            userscorr = userscorr + 0;
            compscore = compscore + 1;
            console.log("This is a your score:",userscorr);
            console.log("This is a my score:",compscore);
        }
    }
}

if (userscorr > compscore) {
    console.log("You won this game:", userscorr)
    console.log("This is your score:", userscorr);
    console.log("This is my score:", compscore);
}
else if (userscorr == compscore) {
    console.log("Ours score is same the match is TIE:")
    console.log("This is your score:", userscorr);
    console.log("This is my score:", compscore);
}
else {
    console.log("You loose this match:")
    console.log("This is your score:", userscorr);
    console.log("This is my score:", compscore);
}