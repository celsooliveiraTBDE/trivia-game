

// variables of the game // 


var counter = 0; 
var wins = 0; 
var losses = 0; 

var quiz = {
    questions: [
     "Q1: Which country discovered Brazil? " ,
     "Q2: Who discovered Brazil? ",
     "Q3: What is the capital of Brazil?", 
     "Q4: Which country is south of Brazil?" , 
    ],
    answers: [
     ["Q1", "Portugal", "Australia", "USA", "Spain"], 
     ["Q2", "Christopher Columbus","Pedro Alvares Cabral","John Hamm","God"],
     ["Q3", "Brasilia","Argentina", "Porto Alegre","Iguazu Falls"], 
     ["Q4",  "Equador","Uruguay","Paraguay", "USA"]
    ],

   images:["assets/images/test.jpg", "assets/images/test2.jpg", "assets/images/test3.jpg", "assets/images/test4.jpg"],

    correct:[1, 2, 1, 2],
};

// SAFE CODE ZONE
//
function startGame(){
  changeQuestion(); 
  var time = setInterval(timeUp, 1000 * 60)
  console.log("this is the time"+time);
}
startGame(); 
// document ready function - not sure if needed... 

// on-click functions - we then capture the id of the click and evaluate the answer

    $("button").on("click", function () {
      var response = $(this).attr("id");
      var listItem = $( "button" ).index(this) ;
      console.log("this is the counter of the button clicked",counter);
      console.log("this is the i of the button clicked",listItem);
      console.log("this is the correct answer key",quiz.answers[counter][listItem+1]);
      console.log("this is the quiz asnwer key",quiz.correct[counter])


      // console.log(quiz.answers.) 
      // console.log(response);

      // response = "Portugal"
      evaluateanswer(listItem); 
      
    })

      // Time functions below to time the game and restart if loss; 

    function timeUp() {

    console.log("time is up", counter, losses);
    // counter changes
    counter++; 
    losses ++; 

    changeQuestion(); 

    }
    function resetGame(){
      counter = 0; 
      changeQuestion(); 

}
    function evaluateanswer (UserInput){
      
      if ((UserInput+1) === quiz.correct[counter]){
        console.log("PORTUGAL THE MAN")
        wins++; 
        counter++; 
        changeQuestion(); 
      }
      else {
        counter++;
        losses++;
        changeQuestion()
          }
    }


    function changeQuestion() {
      if (counter < quiz.answers.length) {
        
      console.log(counter); 
      clearInterval(counter);
      setInterval(timeUp, 1000 * 60); 
      
    $("#question").text(quiz.questions[counter]);
    $("#altA").text("A: " + quiz.answers[counter][1]);
    $("#altB").text("B: " + quiz.answers[counter][2]);
    $("#altC").text("C: " + quiz.answers[counter][3]);
    $("#altD").text("D: " + quiz.answers[counter][4]);
      }
      else{
        resetGame() ; 
      }
    // Step 1: Log the question using console.log
    // console.log(quiz.questions.Q4[counter]); 
    // // Step 2: Log the answers using console.log
    // console.log(quiz.answers.Q1[counter]); 
    // // Step 2: Log the answers using console.log
    // console.log(quiz.answers.Q2[counter]); 
    // // console.log(quiz.answers.altC[i])===quiz.answers.altC[i]))
    // // Step 3: Log the correct below using console.log
    // console.log(quiz.answers.Q3[counter]); 

    }
