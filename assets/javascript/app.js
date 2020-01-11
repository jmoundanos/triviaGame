$(document).ready(function(){
var gameQuestions = [
    {
        question: "Which country owns Antarctica?",
        answers: [
            "United States",
            "Mexico",
            "China",
            "None"
    ],
        correctAnswer: "None"
    },
    {
        question: "What is the third largest continent?",
        answers: [
            "North America",
            "Europe",
            "Asia",
            "Africa"
        ],
        correctAnswer: "North America"
    },
    {
        question: "What is the longest river in India?",
        answers: [
            "Brahmaputra",
            "Yamuna",
            "Ganges",
            "Sahibi"
        ],
        correctAnswer: "Ganges"
    },
    {
        question: "What is the longest continental mountain range?",
        answers: [
            "Himilayas",
            "Andes",
            "Alps",
            "Rockies"
        ],
        correctAnswer: "Andes"
    },
    {
        question: "What is the largest non-polar desert?",
        answers: [
            "Mojave",
            "Gobi",
            "Sahara",
            "Arabian"
        ],
        correctAnswer: "Sahara"
    },
    {
        question: "Which city is located in two continents?",
        answers: [
            "Istanbul",
            "Paris",
            "Tokyo",
            "New York City"
        ],
        correctAnswer: "Istanbul"
    },
    {
        question: "Which African nation has the most pyramids?",
        answers: [
            "Egypt",
            "Morocco",
            "Algeria",
            "Sudan"
        ],
        correctAnswer: "Sudan"
    },
    {
        question: "What country has the most natural lakes?",
        answers: [
            "Canada",
            "Brazil",
            "England",
            "India"
        ],
        correctAnswer: "Canada"
    },
    {
        question: "Which city is the most populous?",
        answers: [
            "Shanghai",
            "Mumbai",
            "Tokyo",
            "Karachi"
        ],
        correctAnswer: "Tokyo"
    },
    {
        question: "Where is the world's tallest mountain?",
        answers: [
            "Hawaii",
            "Japan",
            "Switzerland",
            "Nepal"
        ],
        correctAnswer: "Nepal"
    }
];
var correct = 0;
var incorrect = 0;
var questionCounter = 0;
var num = 15;
var holdInterval;

$("#hide").hide();
function startGame(){
    $("#start").click(function(){
        $("#hide").show();
        $(this).hide();
        showQuestion();
    })
}
function showQuestion(){     
        if(questionCounter < gameQuestions.length){
            $("#question").text(gameQuestions[questionCounter].question);
        }else{
            $("#message").text("Game Over"); 
            if(correct > gameQuestions.length/2){
                $("#message").text("Game Over. Congratulations! You won the game!");
                $("#question").text("");
                setTimeout(playAgain, 7000);
            }else{
                $("#message").text("Game Over. Better luck next time!");
                $("#question").text("");
                setTimeout(playAgain, 7000);
            }
         }
        for(var j = 0; j < gameQuestions[questionCounter].answers.length; j++){
            console.log(gameQuestions[questionCounter].answers[j]);
            $("#answer").append('<p class="choice">' + gameQuestions[questionCounter].answers[j] + '</p>');
        }
        var choices = document.getElementsByClassName('choice');
        for(var i = 0; i < choices.length; i++){
            choices[i].addEventListener("click", checkAnswer);
        }
        $("#answer").prepend('<p id="timer">' +num+ " seconds"+"</p>");
        setTimer();
    }
function checkAnswer(e){
    var element = e.target || e.srcElement;
    if(element.innerHTML === gameQuestions[questionCounter].correctAnswer){
        $("#message").text("Correct!");
        correct++;
        $("#correct").text("Correct: " + correct);
        nextQuestion();
    }else{ 
        $("#message").text("Incorrect. The correct answer is " + gameQuestions[questionCounter].correctAnswer);
       incorrect++;
        $("#incorrect").text("Incorrect: " + incorrect);
        nextQuestion();
    }
    }
    
function nextQuestion(){
    $("#answer").empty();
    stopTimer();
    setTimer();
    questionCounter++;
    showQuestion();
}
function setTimer(){
    clearInterval(holdInterval);
    holdInterval = setInterval(runTimer, 1000);
    num = 15;
}
function runTimer(){
    num--;
    $("#timer").text(num+ " seconds");
    if(num === 0){
        clearInterval(holdInterval);
        $("#message").text("Sorry, you have run out of time. The correct answer is " + gameQuestions[questionCounter].correctAnswer);
        nextQuestion();
        incorrect++;
        $("#incorrect").text("Incorrect: " + incorrect);
       
    }
}
function stopTimer(){
    clearInterval(holdInterval);
}
function playAgain(){
    questionCounter = 0;
    correct = 0;
    incorrect = 0;
    $("#hide").hide();
    $("#start").show();
    $("#start").click(function(){
        $(this).hide();
        $("#correct").text("Correct: ");
        $("#incorrect").text("Incorrect: "); 
        $("#answer").empty();
        $("#question").empty();
        $("#message").empty();
        showQuestion();
})
}
startGame();
});