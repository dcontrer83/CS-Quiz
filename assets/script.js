var startQuiz = document.querySelector(".main");
var firstQuestion = document.querySelector(".firstQ");
var secondQuestion = document.querySelector(".secondQ");
var thirdQuestion = document.querySelector(".thirdQ");
var fourthQuestion = document.querySelector(".fourthQ");
var fifthQuestion = document.querySelector(".fifthQ");
var highScore = document.querySelector(".highscore");
var main = document.querySelector("main");
var end = document.querySelector(".end");
var store = document.querySelector(".store");
var yourScore = document.querySelector(".yourScore")
var h1 = document.querySelector("h1");
var h4 = document.querySelector("h4");

var startButton = document.createElement("button");
var multipleChoiceButtonA1 = document.createElement("button");
var multipleChoiceButtonB1 = document.createElement("button");
var multipleChoiceButtonC1 = document.createElement("button");
var multipleChoiceButtonD1 = document.createElement("button");
var multipleChoiceButtonA2 = document.createElement("button");
var multipleChoiceButtonB2 = document.createElement("button");
var multipleChoiceButtonC2 = document.createElement("button");
var multipleChoiceButtonD2 = document.createElement("button");
var multipleChoiceButtonA3 = document.createElement("button");
var multipleChoiceButtonB3 = document.createElement("button");
var multipleChoiceButtonC3 = document.createElement("button");
var multipleChoiceButtonD3 = document.createElement("button");
var multipleChoiceButtonA4 = document.createElement("button");
var multipleChoiceButtonB4 = document.createElement("button");
var multipleChoiceButtonC4 = document.createElement("button");
var multipleChoiceButtonD4 = document.createElement("button");
var multipleChoiceButtonA5 = document.createElement("button");
var multipleChoiceButtonB5 = document.createElement("button");
var multipleChoiceButtonC5 = document.createElement("button");
var multipleChoiceButtonD5 = document.createElement("button");
var submit = document.createElement("button");
var userInput = document.createElement("input");
var p = document.createElement("p");

submit.setAttribute("id", "submitOnce");
userInput.setAttribute("id", "idInput");

const regex = /[0-9]/g;

var isCorrect = true;
var score = 0;
var secondsLeft = 100;
var userName;

highScore.textContent = "";

firstPage();

function firstPage() {


    p.setAttribute("id", "textStart");

    startButton.className = "startButton";

    startQuiz.appendChild(p);

    p.textContent = "You will be given 100 seconds to finish this quiz. Each time you get an answer wrong, you will lose 20 seconds. Each time you get an answer right you will gain 10 points. Good luck!!! Press start to begin.";

    p.appendChild(startButton);

    startButton.textContent = "Start";

}

startButton.addEventListener("click", function() {
    setTime();
    startQuiz.textContent = "";
    firstQuestionFunction();

});

function firstQuestionFunction() {
    
    h1.textContent = "";

    p.textContent = "What does HTML stand for in programming?";

    firstQuestion.appendChild(p);

    p.setAttribute("id", "pFirstQ");

    p.appendChild(multipleChoiceButtonA1);
    p.appendChild(multipleChoiceButtonB1);
    p.appendChild(multipleChoiceButtonC1);
    p.appendChild(multipleChoiceButtonD1);

    multipleChoiceButtonA1.setAttribute("class", "buttonFirst");
    multipleChoiceButtonB1.setAttribute("class", "buttonFirst");
    multipleChoiceButtonC1.setAttribute("class", "buttonFirst");
    multipleChoiceButtonD1.setAttribute("class", "buttonFirst");

    multipleChoiceButtonA1.textContent = "A) Hamburgers that Melts Loneliness";
    multipleChoiceButtonB1.textContent = "B) Hopeful Thankful Markup Language";
    multipleChoiceButtonC1.textContent = "C) HyperText Markup Language";
    multipleChoiceButtonD1.textContent = "D) High Texture Markup Language";

    multipleChoiceButtonA1.addEventListener("click", function(event) {
        firstQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        secondQuestionFunction();
        return;
    })
    multipleChoiceButtonB1.addEventListener("click", function(event) {
        firstQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        secondQuestionFunction();
        return;
    })
    multipleChoiceButtonC1.addEventListener("click", function(event) {
        firstQuestion.textContent = "";
        isCorrect = true;
        score = score + 10;
        p.textContent = "";
        secondQuestionFunction();
        return;
    })
    multipleChoiceButtonD1.addEventListener("click", function(event) {
        firstQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        secondQuestionFunction();
        return;
    })
    return;
};

function secondQuestionFunction() {

    p.setAttribute("id", "pSecondQ");

    secondQuestion.appendChild(p);
       
    p.textContent = "What does CSS stand for in programming?";

    p.appendChild(multipleChoiceButtonA2);
    p.appendChild(multipleChoiceButtonB2);
    p.appendChild(multipleChoiceButtonC2);
    p.appendChild(multipleChoiceButtonD2);

    multipleChoiceButtonA2.setAttribute("class", "buttonSecond");
    multipleChoiceButtonB2.setAttribute("class", "buttonSecond");
    multipleChoiceButtonC2.setAttribute("class", "buttonSecond");
    multipleChoiceButtonD2.setAttribute("class", "buttonSecond");

    multipleChoiceButtonA2.textContent = "A) Colorful Style Sheets";
    multipleChoiceButtonB2.textContent = "B) Coding Stylish Sheets";
    multipleChoiceButtonC2.textContent = "C) Chocolate Sprinkles Strawberries";
    multipleChoiceButtonD2.textContent = "D) Cascading Style Sheets";

    if (isCorrect ) {
        end.textContent = "Correct";
    }
    else {
        end.textContent = "Incorrect";
    }

    setTimeout(isCorrectFunction, 1000);

multipleChoiceButtonA2.addEventListener("click", function(event) {
    secondQuestion.textContent = "";
    isCorrect = false;
    secondsLeft = secondsLeft - 20;
    p.textContent = "";
    thirdQuestionFunction();
    return;
})
multipleChoiceButtonB2.addEventListener("click", function(event) {
    secondQuestion.textContent = "";
    isCorrect = false;
    secondsLeft = secondsLeft - 20;
    p.textContent = "";
    thirdQuestionFunction();
    return;
})
multipleChoiceButtonC2.addEventListener("click", function(event) {
    secondQuestion.textContent = "";
    isCorrect = false;
    secondsLeft = secondsLeft - 20;
    p.textContent = "";
    thirdQuestionFunction();
    return;
})
multipleChoiceButtonD2.addEventListener("click", function(event) {
    secondQuestion.textContent = "";
    isCorrect = true;
    score = score + 10;
    p.textContent = "";
    thirdQuestionFunction();
    return;
})
    return;
};

function thirdQuestionFunction() {

    p.setAttribute("id", "pThirdQ");

    thirdQuestion.appendChild(p);

    p.textContent = "What does JS stand for in programming?";

    p.appendChild(multipleChoiceButtonA3);
    p.appendChild(multipleChoiceButtonB3);
    p.appendChild(multipleChoiceButtonC3);
    p.appendChild(multipleChoiceButtonD3);

    multipleChoiceButtonA3.setAttribute("class", "buttonThird");
    multipleChoiceButtonB3.setAttribute("class", "buttonThird");
    multipleChoiceButtonC3.setAttribute("class", "buttonThird");
    multipleChoiceButtonD3.setAttribute("class", "buttonThird");

    multipleChoiceButtonA3.textContent = "A) Jelly Sandwitch";
    multipleChoiceButtonB3.textContent = "B) JollyScript";
    multipleChoiceButtonC3.textContent = "C) Just Study";
    multipleChoiceButtonD3.textContent = "D) JavaScript";

    if (isCorrect ) {
        end.textContent = "Correct";
    }
    else {
        end.textContent = "Incorrect";
    }

    setTimeout(isCorrectFunction, 1000);

    multipleChoiceButtonA3.addEventListener("click", function(event) {
        thirdQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        fourthQuestionFunction();
        return;
    })
    multipleChoiceButtonB3.addEventListener("click", function(event) {
        thirdQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        fourthQuestionFunction();
        return;
    })
    multipleChoiceButtonC3.addEventListener("click", function(event) {
        thirdQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        fourthQuestionFunction();
        return;
    })
    multipleChoiceButtonD3.addEventListener("click", function(event) {
        thirdQuestion.textContent = "";
        isCorrect = true;
        score = score + 10;
        p.textContent = "";
        fourthQuestionFunction();
        return;
    })
}

function fourthQuestionFunction() {

    p.setAttribute("id", "pFourthQ");

    fourthQuestion.appendChild(p);

    p.textContent = "When was JavaScript invented?";

    p.appendChild(multipleChoiceButtonA4);
    p.appendChild(multipleChoiceButtonB4);
    p.appendChild(multipleChoiceButtonC4);
    p.appendChild(multipleChoiceButtonD4);

    multipleChoiceButtonA4.setAttribute("class", "buttonFourth");
    multipleChoiceButtonB4.setAttribute("class", "buttonFourth");
    multipleChoiceButtonC4.setAttribute("class", "buttonFourth");
    multipleChoiceButtonD4.setAttribute("class", "buttonFourth");

    multipleChoiceButtonA4.textContent = "A) 2022";
    multipleChoiceButtonB4.textContent = "B) 1995";
    multipleChoiceButtonC4.textContent = "C) 1983";
    multipleChoiceButtonD4.textContent = "D) 1938";

    if (isCorrect ) {
        end.textContent = "Correct";
    }
    else {
        end.textContent = "Incorrect";
    }

    setTimeout(isCorrectFunction, 1000);

    multipleChoiceButtonA4.addEventListener("click", function(event) {
        fourthQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        fifthQuestionFunction();
        return;
    })
    multipleChoiceButtonB4.addEventListener("click", function(event) {
        fourthQuestion.textContent = "";
        isCorrect = true;
        score = score + 10;
        p.textContent = "";
        fifthQuestionFunction();
        return;
    })
    multipleChoiceButtonC4.addEventListener("click", function(event) {
        fourthQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        fifthQuestionFunction();
        return;
    })
    multipleChoiceButtonD4.addEventListener("click", function(event) {
        fourthQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        fifthQuestionFunction();
        return;
    })
    
}

function fifthQuestionFunction() {

    p.setAttribute("id", "pFifthQ");

    fifthQuestion.appendChild(p);

    p.textContent = "What year was CSS invented?";

    p.appendChild(multipleChoiceButtonA5);
    p.appendChild(multipleChoiceButtonB5);
    p.appendChild(multipleChoiceButtonC5);
    p.appendChild(multipleChoiceButtonD5);

    multipleChoiceButtonA5.setAttribute("class", "buttonFifth");
    multipleChoiceButtonB5.setAttribute("class", "buttonFifth");
    multipleChoiceButtonC5.setAttribute("class", "buttonFifth");
    multipleChoiceButtonD5.setAttribute("class", "buttonFifth");

    multipleChoiceButtonA5.textContent = "A) 1996";
    multipleChoiceButtonB5.textContent = "B) 2003";
    multipleChoiceButtonC5.textContent = "C) 1993";
    multipleChoiceButtonD5.textContent = "D) 1995";

    if (isCorrect ) {
        end.textContent = "Correct";
    }
    else {
        end.textContent = "Incorrect";
    }

    setTimeout(isCorrectFunction, 1000);

    multipleChoiceButtonA5.addEventListener("click", function(event) {
        fifthQuestion.textContent = "";
        isCorrect = true;
        score = score + 10;
        p.textContent = "";
        highscoreFunction();
        return;
    })
    multipleChoiceButtonB5.addEventListener("click", function(event) {
        fifthQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        highscoreFunction();
        return;
    })
    multipleChoiceButtonC5.addEventListener("click", function(event) {
        fifthQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        highscoreFunction();
        return;
    })
    multipleChoiceButtonD5.addEventListener("click", function(event) {
        fifthQuestion.textContent = "";
        isCorrect = false;
        secondsLeft = secondsLeft - 20;
        p.textContent = "";
        highscoreFunction();
        return;
    })
}


function highscoreFunction() {
    if (secondsLeft !== 0) {
        clearInterval(timerInterval);
    }
    h4.textContent = "";

    
    init();

    highScore.appendChild(p);

    highScore.appendChild(h1);

    p.setAttribute("id", "pYourScore");

    h1.setAttribute("id", "titleHighscore")

    p.textContent = "Your Score: " + score;

    h1.textContent = "HIGHSCORES";

    highScore.appendChild(yourScore);

    highScore.appendChild(store);

    store.textContent = "Enter name/nickname (numbers are not allowed): ";

    store.appendChild(userInput);

    store.appendChild(submit);

    submit.textContent = "Submit";

    submit.addEventListener("click", function(event) {
        event.preventDefault();

        if (!userInput.value.match(regex)) {

        document.getElementById("submitOnce").disabled = true;

        var userText = userInput.value.trim();

        if(userText === "") {
            return;
        }

        arrayUser.push(userText + " " + score);

        addUserInputs();
        storeArrayUser();
        }
     else {
        end.textContent = "Invalid. Please type using only letters."
        
        setTimeout(invalidInput, 2000);
    }
    })


    if (isCorrect ) {
        end.textContent = "Correct";
    }
    else {
        end.textContent = "Incorrect";
    }

    setTimeout(isCorrectFunction, 1000);

}

function isCorrectFunction() {
    end.textContent = "";
}

var timerInterval;

function setTime() {
     timerInterval = setInterval(function() {
        secondsLeft--;
        h4.textContent = "Time Left: " + secondsLeft;

        if(secondsLeft <= 0) {
            clearInterval(timerInterval);

            firstQuestion.textContent = "";
            secondQuestion.textContent = "";
            thirdQuestion.textContent = "";
            fourthQuestion.textContent = "";
            fifthQuestion.textContent = "";

            highscoreFunction();
        }
    }, 1000)
} 
var arrayUser = [];
var arrayZero = [];
var arrayTen = [];
var arrayTwenty = [];
var arrayThirty = [];
var arrayFourty = [];
var arrayFifty = [];

function addUserInputs() {
    for (let i = 0; i < arrayUser.length; i++) {
        var user = arrayUser[i];

        if (arrayUser[i].indexOf(1) > -1) {
            arrayTen.push(user);
        }

        else if (arrayUser[i].indexOf(2) > -1) {
            arrayTwenty.push(user);
        }

        else if (arrayUser[i].indexOf(3) > -1) {
            arrayThirty.push(user);
        }

        else if (arrayUser[i].indexOf(4) > -1) {
            arrayFourty.push(user);
        }

        else if (arrayUser[i].indexOf(5) > -1) {
            arrayFifty.push(user);
        }
        else {
            arrayZero.push(user);
        }


    }
    if (arrayFifty !== null) {
        for (let i = 0; i < arrayFifty.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "pScores");
            p.textContent = arrayFifty[i];
            store.appendChild(p);
        }
    }
    if (arrayFourty !== null) {
        for (let i = 0; i < arrayFourty.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "pScores");
            p.textContent = arrayFourty[i];
            store.appendChild(p);
        }
    }
    if (arrayThirty !== null) {
        for (let i = 0; i < arrayThirty.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "pScores");
            p.textContent = arrayThirty[i];
            store.appendChild(p);
        }
    }
    if (arrayTwenty !== null) {
        for (let i = 0; i < arrayTwenty.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "pScores");
            p.textContent = arrayTwenty[i];
            store.appendChild(p);
        }
    }
    if (arrayTen !== null) {
    for (let i = 0; i < arrayTen.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "pScores");
            p.textContent = arrayTen[i];
            store.appendChild(p);
        }
    }
    if (arrayZero !== null) {
        for (let i = 0; i < arrayZero.length; i++) {
            var p = document.createElement("p");
            p.setAttribute("class", "pScores");
            p.textContent = arrayZero[i];
            store.appendChild(p);
        }
    }
}

function init() {
    var storedUserInputs = JSON.parse(localStorage.getItem("arrayUser"));

    if (storedUserInputs !== null) {
        arrayUser = storedUserInputs;
    }
}

function storeArrayUser() {
    localStorage.setItem("arrayUser", JSON.stringify(arrayUser));
}

function invalidInput() {
    end.textContent = "";
}
