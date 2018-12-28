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
    // dynamically reading questiona nd creating card layout html and radio buttons for options
    var bigElement = $(
        `
        <div class="card Qclass">
            <div class="card-title question">${question}</div>
            <div class="card-body options">                
				<div class="form-group">				  
				  <select class="form-control" class="radio-inline" id="optList${cnt}">
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
    $(questionClass).text(question);
    }

}


// once the game is over or timer is up - clear the display/view similar to reload page 
function resetQuizz() {
		$("#txtName").val("");
        $("#txtFilePath").val("");
		$("#optList0").val("");
		$("#optList1").val("");
		$("#optList2").val("");
		$("#optList3").val("");
		$("#optList4").val("");
		$("#optList5").val("");
		$("#optList6").val("");
		$("#optList7").val("");
		$("#optList8").val("");
		$("#optList9").val("");
}


function validateForm()
{
	var validateForm = true;
	var name = $("#txtName");	
	var filepath = $("#txtFilePath");
	
	if (name.val().trim().length === 0 ) 
	{
		$("lblError").text("Please enter name.");
		return false;
	}
	if (filepath.val().trim().length === 0 ) 
	{
		$("lblError").text("Please enter photo File path.");
		return false;
	}
	if (($("#optList0").val().trim().length === 0 ) || ($("#optList1").val().trim().length === 0 ) || 
		($("#optList2").val().trim().length === 0 ) || ($("#optList3").val().trim().length === 0 ) || 
		($("#optList4").val().trim().length === 0 ) || ($("#optList5").val().trim().length === 0 ) || 
		($("#optList6").val().trim().length === 0 ) || ($("#optList7").val().trim().length === 0 ) || 
		($("#optList8").val().trim().length === 0 ) || ($("#optList9").val().trim().length === 0 ) )
	{
		$("lblError").text("Please answer all the questions.");		
		return false;
	}
	return validateForm;
	// place holder to check rest of the dropdowns
}


// submit form
$(".submit").on("click", function(event) {
    event.preventDefault();
    
	if (validateForm())
	{
		var newFriend = {
                    fName: $("#txtName").val().trim(),
                    fPhotoLink:  $("#txtFilePath").val().trim(),
                    Scores: [parseInt($("#optList0").val()),
							 parseInt($("#optList1").val()), parseInt($("#optList2").val()), parseInt($("#optList3").val()),
							 parseInt($("#optList4").val()), parseInt($("#optList5").val()), parseInt($("#optList6").val()),
							 parseInt($("#optList7").val()), parseInt($("#optList8").val()), parseInt($("#optList9").val())							 
							 ]
                };
		console.log(newFriend);
		
		$.post("/api/friends", newFriend).then(function (data) {

			if (data) {
				
					alert("Your profile is successfully submitted.");
					
					$("#matchName").text(data.fName);					
					$("#matchImage").attr("src", data.fPhotoLink);   				    
					modal.style.display = "block";				
			}     
			else {
			  alert("Sorry! something went wrong! Pls retry ");
			}  
			resetQuizz();			 		
      });		
	}
	  $("html, body").animate({ scrollTop: 0 }, "slow");
  });
		
	
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
  // modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


$(document).ready(function() {

LoadQuizz();
/*
// checking to see largest width element that may be genrating horizontal scroll bar 
$.each( $('*'), function() { 
    if( $(this).width() > $('body').width()) {
        console.log("Wide Element: ", $(this), "Width: ", $(this).width()); 
    } 
});
*/
});