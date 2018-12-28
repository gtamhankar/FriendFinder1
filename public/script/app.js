    var correctAnswers = 0;
    var RightAnswer = 0;
    var quizOver = false;
    //var ranNums = [];

    var TriaviaQuizz = [{
        subject: "Social Studies",
        question: "&nbsp&nbsp Q1.&nbsp&nbsp Your mind is always buzzing with unexplored ideas and plans. ",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 0
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q2.&nbsp&nbsp Generally speaking, you rely more on your experience than your imagination.",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 1    
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q3.&nbsp&nbsp You find it easy to stay relaxed and focused even when there is some pressure.",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 3        
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q4.&nbsp&nbsp You rarely do something just out of sheer curiosity. ",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 1        
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q5.&nbsp&nbsp People can rarely upset you.",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 2
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q6.&nbsp&nbsp It is often difficult for you to relate to other people’s feelings. ",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 0   
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q7.&nbsp&nbsp In a discussion, truth should be more important than people’s sensitivities.",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 3
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q8.&nbsp&nbsp You rarely get carried away by fantasies and ideas.  ",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 2
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q9.&nbsp&nbsp You think that everyone’s views should be respected regardless of whether they are supported by facts or not. ",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 1        
    }, {
        subject: "Social Studies",
        question:"&nbsp&nbsp Q10.&nbsp&nbsp You feel more energetic after spending time with a group of people.  ",
        choices: ["1 (Strongly Disagree)", "2", "3", "4", "5 (Strongly Agree)" ],
        validAnswer: 2
    }];


function LoadQuizz() {
    // this is page load - display questions here 

    for (cnt=0;cnt<TriaviaQuizz.length;cnt++)
    {
    
    var question = TriaviaQuizz[cnt].question;
    var questionClass = $(document).find(".QuizzForm > .question");
    var choiceList = $(document).find(".QuizzForm > .options");
    var numChoices = TriaviaQuizz[cnt].choices.length;
    // dynamically reading questiona nd creating card layout html and radio buttons for options
    var bigElement = $(
        `
        <div class="card Qclass">
            <div class="card-title question">${question}</div>
            <div class="card-body options">                
				<div class="form-group">				  
				  <select class="form-control" class="radio-inline" name="optradio${cnt}">
				    <option>Select an Option</option>
					<option>${TriaviaQuizz[cnt].choices[0]}</option>
					<option>${TriaviaQuizz[cnt].choices[1]}</option>
					<option>${TriaviaQuizz[cnt].choices[2]}</option>
					<option>${TriaviaQuizz[cnt].choices[3]}</option>
					<option>${TriaviaQuizz[cnt].choices[4]}</option>
				  </select>
				</div>								                               
            </div>              
        </div>
        `
        )
    $('#QuizzForm').append(bigElement);    
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    }
   // $('#QuizzForm').append('<div class="row subbutton"><br></div><button id="send" type="button" class="btn btn-primary">Submit </button><div class="row"><br></div>');
	  $('#QuizzForm').append('<div class="row text-center"><br><button type="submit" class="btn btn-primary submit">&nbsp&nbsp&nbspSubmit&nbsp&nbsp&nbsp</button><br></div>');
    $('#TimerDisplay').html("Time: " + timespan);
}


function verifyAnswers(){
    for (cnt=0;cnt<TriaviaQuizz.length;cnt++)
    {
    var i =  TriaviaQuizz[cnt];
        var validAnswer = TriaviaQuizz[i].validAnswer;
        var radioval = $(`input[name='optradio${i}']:checked`);
        var varAnswer = radioval.val();
        if (varAnswer == validAnswer)
        {
            RightAnswer++;
        }
    }
}

// once the game is over or timer is up - clear the display/view similar to reload page 
function resetQuizz() {
    RightAnswer = 0;
    correctAnswers = 0;
    $(".Qclass").empty();
    $("#QuizzForm").empty();
    LoadQuizz();
}

// display results
function ShowScore() {
    $(".ShowResults").addClass('glyphicon glyphicon-education');
    var nPercent = (100 * RightAnswer) / numofQuestions;
    if (nPercent < 80 )
    {
        $("#result").html(" Game Over! <br> Better Luck Next Time beating a 5th Grader! <br> You scored: " + RightAnswer + " out of: " + numofQuestions ); //+ "(" + nPercent + "%");
    }
    else
    {
        $("#result").html(" Game Over! <br> Wow! You are smarter than a 5th Grader! <br> You scored: " + RightAnswer + " out of: " + numofQuestions + " (" + nPercent + "%)");
    }
  
    $("#result").show();
    $("#send").attr("disabled", true);
    $("html, body").animate({ scrollTop: 0 }, "slow");
    //return false;
    resetQuizz();
}


// submit quizz - dynamically created button , needs .on method and triggered with document object. 
//$(document).on('click','#send',function(){
	$(".submit").on("click", function(event) {
    event.preventDefault();
    $("#send").attr("disabled", true);
    verifyAnswers();
	ShowScore();   
});


$(document).ready(function() {

$("#result").hide();
LoadQuizz();

});