
// variables of the game // 

var startTime; 
var questionNumber = 0; 
var wins = 0; 
var losses = 0; 

var quiz = {
    questions: [
     "Q1: Which country discovered Brazil? " ,
     "Q2: Who discovered Brazil? ",
     "Q3: What is the capital of Brazil?",
     "Q4: What's the name of the soccer player above?", 
     "Q5: What's Brazil's largest city?" , 
     "Q6: Which year was Brazil discovered?" , 
     "Q7: Which isn't a state in Brazil?" , 
     "Q8: Which Brazilian driver won multiple F1 championships?" , 
     "Q9: Which Brazilian supermodel is married to Tom Brady?" , 
     "Q10: Which country is directly south of Brazil?" , 
     
    ],
    answers: [
     ["Q1", "Portugal", "Australia", "USA", "Spain"], 
     ["Q2", "Christopher Columbus","Pedro Alvares Cabral","John Hamm","God"],
     ["Q3", "Brasilia","Argentina", "Porto Alegre","Iguazu Falls"], 
     ["Q4",  "Pele","Maradona","Neymar", "Ronaldo"],
     ["Q5",  "Sao Paulo","Rio de Janeiro","Porto Alegre", "Manaus"],
     ["Q6",  "1500","1550","1492", "1889"],
     ["Q7",  "Acre","Amapa","Ceara", "Bolivia"],
     ["Q8",  "Ayrton Senna","Nelson Piquet","Rubens Barichello", "Alan Prost"],
     ["Q9",  "Adriana Lima","Alessandra Ambrosio", "Naomi Campbell", "Gisele Bundchen"],
     ["Q10",  "Equador","Uruguay","Paraguay", "USA"],

    ],

   images:["assets/images/test.jpg", "assets/images/pedro.png", "assets/images/brasilia.jpg", "assets/images/neymar.jpeg", "assets/images/sampa.jpeg", "assets/images/disc.jpeg", "assets/images/amapa.jpeg", "assets/images/senna.jpeg", "assets/images/tb12.jpeg", "assets/images/uruguay.jpeg", ],

    correct:[1, 2, 1, 3, 1, 1, 4, 1, 4, 2]
};


function startGame(){
  questionNumber=0; 
  changeQuestion(); 
  startTime = setInterval(timeUp, 1000 * 60)
}
startGame(); 

// document ready function - not sure if needed... 

// on-click functions - we then capture the id of the click and evaluate the answer

    $("button").on("click", function () {
      // var response = $(this).attr("id"); // this ended up not being needed; 
      var listItem = 1+ ($( "button" ).index(this));
      var response = quiz.answers[questionNumber][quiz.correct[questionNumber]];
      // console.log("this is the quiz asnwer key",quiz.correct[questionNumber])
      evaluateanswer(listItem, response); 
    })

      // Time functions below to time the game and restart if loss; 

    function timeUp() {
      clearInterval(startTime);
    // console.log("time is up", questionNumber, losses);
    // questionNumber changes and the player loses
    questionNumber++; 
    losses ++; 
    changeQuestion(); 
    }

    function resetGame(){
      clearInterval(startTime)
      questionNumber = 0; 
      wins = 0; 
      losses =0;
      startGame();
}

    function evaluateanswer (UserInput, answer){
        
      
      if ((UserInput) === quiz.correct[questionNumber]&&questionNumber<10){

        $("#correct-answer").text("The correct answer is: " +answer); 
        wins++; 
        console.log(questionNumber); 
        questionNumber++; 
        clearInterval(startTime);
        changeQuestion(); 
      }
      else {
        
        $("#correct-answer").text("The correct answer is: " +answer); 
        questionNumber++;
        losses++;
        changeQuestion()
          }
        }
  


    function changeQuestion() {
      if (questionNumber < quiz.answers.length) {
        
      console.log("this is the changeq q number",questionNumber); 
      clearInterval(startTime);
      setInterval(timeUp, 1000 * 60); 
      
    $("#question").text(quiz.questions[questionNumber]);
    $("#image-div").html("<img src=" + quiz.images[questionNumber] + " width='400px'>")
// console.log(quiz.images[questionNumber])
    $("#altA").text("A: " + quiz.answers[questionNumber][1]);
    $("#altB").text("B: " + quiz.answers[questionNumber][2]);
    $("#altC").text("C: " + quiz.answers[questionNumber][3]);
    $("#altD").text("D: " + quiz.answers[questionNumber][4]);
    $("#wins").text("Wins "+ wins)
    $("#losses").text("Losses "+ losses)

  }
      else{
        resetGame() ; 
      }

    // Step 1: Log the question using console.log
    // console.log(quiz.questions.Q4[questionNumber]); 
    // // Step 2: Log the answers using console.log
    // console.log(quiz.answers.Q1[questionNumber]); 
    // // Step 2: Log the answers using console.log
    // console.log(quiz.answers.Q2[questionNumber]); 
    // // console.log(quiz.answers.altC[i])===quiz.answers.altC[i]))
    // // Step 3: Log the correct below using console.log
    // console.log(quiz.answers.Q3[questionNumber]); 

    }
