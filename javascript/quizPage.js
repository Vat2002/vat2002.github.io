var score =0; //user's points, affected by tallyScore()
var seconds = 60; // Timer seconds, affected by tick()
var currentTime = 0; // User's time spent, so 60-seconds
var time; // variable for setInterval() and clearInterval()
var currentGame = false; //boolean. True if round is active, false if round is ended


function startQuiz(){ //Erases styles from previous rounds, sets currentGame to started, makes questions appear
	if (currentGame == true){
		return;
	} else {
		currentGame = true;
		timer(); //call timer
		score =0; //reset score
		document.getElementById("quizBody").classList.remove("quizBodyRed"); //reset all styles from previous rounds
		document.getElementById("quizBody").classList.remove("quizBodyGreen");
		document.getElementById("quizBody").classList.remove("quizBodyBlue");
		document.getElementById("quizImage").src = ("images/transparent.png"); //pseudo erase result image
		document.getElementById("quizImage").classList.remove("quizImage");
		document.getElementById("Questions").reset(); //reset radio arrays
		document.getElementById("mainQuizHeading").innerHTML=("Test Your Knowledge..."); //erase previous round text
		document.getElementById("quizPanelTitle").innerHTML=("Try Our Quiz and See How Well You Know Our Shows!")
		document.getElementById("quizBoard").innerHTML=(" 1 Minute.<br>10 Questions. <br>+2 Points for Every Correct Answer. <br>-1 Point for Every Wrong Answer. <br>Good Luck!");
		document.getElementById("quizStartButton").innerHTML=("Start Quiz!");
		document.getElementById("quizQuestionSection").classList.add("quizQuestionSectionActive"); //display questions
		
	for(let i=1; i<11; i++){
		document.getElementById(('QQ'+i)).classList.remove("quizCorrect"); //reset question box styles
		document.getElementById(('QQ'+i)).classList.remove("quizWrong");
		}
	}
}


function readScore(){ // checks value of "score" (and "currentTime") and displays results/styles based on outcome

	document.getElementById("quizPanelTitle").innerHTML=("You got "+score+"/20 points, and you took "+currentTime+" seconds!")
	document.getElementById("quizStartButton").innerHTML=("Restart!");
	if (score <= -7){

		document.getElementById("quizImage").src = ("images/result0.png");
		document.getElementById("quizBody").classList.add("quizBodyRed");
		document.getElementById("mainQuizHeading").innerHTML=("Are you even trying??");
		document.getElementById("quizBoard").innerHTML=("Learn more about our shows and then come back!<br><br>Your correct answers are marked in green.<br>Your incorrect answers are marked in red.<br><br>Press Restart to try the Quiz again!");
		document.getElementById("quizImage").classList.add("quizImage"); //makes image appear

	} else if (score <= 2){
	
		document.getElementById("quizImage").src = ("images/result1.png");
		document.getElementById("quizBody").classList.add("quizBodyRed");
		document.getElementById("mainQuizHeading").innerHTML=("That's a really bad score...");
		document.getElementById("quizBoard").innerHTML=("You still need to learn more about our shows!<br><br>Your correct answers are marked in green.<br>Your incorrect answers are marked in red.<br><br>Press Restart to try the Quiz again!");
		document.getElementById("quizImage").classList.add("quizImage");

	} else if (score <= 8){
	
		document.getElementById("quizImage").src = ("images/result2.png");
		document.getElementById("quizBody").classList.add("quizBodyBlue");
		document.getElementById("mainQuizHeading").innerHTML=("That's an average score...");
		document.getElementById("quizBoard").innerHTML=("Not the worst... but you should definitely try again after some studying!<br><br>Your correct answers are marked in green.<br>Your incorrect answers are marked in red.<br><br>Press Restart to try the Quiz again!");
		document.getElementById("quizImage").classList.add("quizImage");

	} else if (score <= 14){
	
		document.getElementById("quizImage").src = ("images/result3.png");
		document.getElementById("quizBody").classList.add("quizBodyBlue");
		document.getElementById("mainQuizHeading").innerHTML=("Pretty good! You can always do better though!");
		document.getElementById("quizBoard").innerHTML=("Give it another try after a bit more brushing up!<br><br>Your correct answers are marked in green.<br>Your incorrect answers are marked in red.<br><br>Press Restart to try the Quiz again!");
		document.getElementById("quizImage").classList.add("quizImage");

	} else if (score <= 17){
	
		document.getElementById("quizImage").src = ("images/result4.png");
		document.getElementById("quizBody").classList.add("quizBodyGreen");
		document.getElementById("mainQuizHeading").innerHTML=("Amazing! You only got one wrong!");
		document.getElementById("quizBoard").innerHTML=("Good work! Why not try to get that last one right too?<br><br>Your correct answers are marked in green.<br>Your incorrect answers are marked in red.<br><br>Press Restart to try the Quiz again!");
		document.getElementById("quizImage").classList.add("quizImage");
		
	} else {
	
		document.getElementById("quizImage").src = ("images/result5.png");
		document.getElementById("quizBody").classList.add("quizBodyGreen");
		document.getElementById("mainQuizHeading").innerHTML=("Perfect score! You're an expert!");
		document.getElementById("quizBoard").innerHTML=("You got everything right!<br>Why don't you challenge a friend to see if they're as good as you?<br><br>Your correct answers are marked in green.<br>Your incorrect answers are marked in red.<br><br>Press Restart to try the Quiz again!");
		document.getElementById("quizImage").classList.add("quizImage");

	}

}

function getRadioValue( radioArray ) { //getRadioValue standard function
   var i;
   for ( i = 0; i < radioArray.length; i++ ) {
	  if ( radioArray[ i ].checked ) { 
		 return radioArray[ i ].value;
	  }
   }
   return "";
}
				
function tallyScore(frmref){//stops and resets timer, sets currentGame to finished, checks all submitted answers and updates score
	window.clearInterval(time);
	second = 60;
	currentGame = false;

	for(let i=1; i<11; i++){
		document.getElementById(('QQ'+i)).classList.remove("quizQuestionEmpty"); // remove "empty" style from validate()
		var currRadio = "Q"+i;
		var x = getRadioValue(frmref[currRadio]);
		if (x == "c"){
			score = (score+2);
			document.getElementById(('QQ'+i)).classList.add("quizCorrect");//mark question in green
		} else {
			score = (score-1);
			document.getElementById(('QQ'+i)).classList.add("quizWrong");//mark question in red
		}
	}

	readScore();
	document.getElementById(("mainQuizHeading")).scrollIntoView(
											{behavior: 'smooth',
											block: 'center'});
}
					
function validate(frmref){ //validates that user has not skipped any questions, passes form to tallyScore() if succesful
	if (currentGame == false){
		alert("Press Restart if you would like to take the Quiz again!"); //Cannot press "submit" twice
			document.getElementById(("mainQuizHeading")).scrollIntoView(
											{behavior: 'smooth',
											block: 'center'});
		return;
	} else {
		for(let i=1; i<11; i++){
			document.getElementById(('QQ'+i)).classList.remove("quizQuestionEmpty"); 
			var currRadio = "Q"+i;
			var x = getRadioValue(frmref[currRadio]);
			if (x == ""){
				document.getElementById(('QQ'+i)).scrollIntoView(	//displays skipped question, if any	
												{behavior: 'smooth',
												block: 'center'});
				document.getElementById(('QQ'+i)).classList.add("quizQuestionEmpty"); //"empty" indicator style
				return;
			}
		}
		tallyScore(frmref);
	}
}
		
function timer() { // timer that counts from 60 down every second
	seconds = 60;
	time = window.setInterval(tick, 1000);
	
	function tick() { // is called every second, reduces 1 from "seconds", and calls tallyScore() at 0 
		document.getElementById("counter").innerHTML = "0"+":"+(seconds < 10 ? "0" : "")+String(seconds);//print timer, formatted
		if( seconds > 0 ) {
			currentTime = 60-seconds; //currentTime simply used to display time taken
			seconds--;
		} else {
			currentTime = 60-seconds;
			tallyScore(document.Questions);
		}

	}
	tick();
}