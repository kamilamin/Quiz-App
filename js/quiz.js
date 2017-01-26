var questions = [{
	"question": "The longest river of Asia is: ",
	"option1":"The Indus",
	"option2": "The Ganges",
	"option3": "The Yangtze or Chang Jiang",
	"option4": "None of the above",
	"answer": "3"
}, {
	"question": "Which boundary lines does exist between Pakistan and Afghanistan ?",
	"option1": "Machmohan Line",
	"option2": "Maginot Line",
	"option3": "Durand Line",
	"option4": "Curzon Line",
	"answer": "3"
}, {
	"question": "Which SAARC Country contains eight of world's ten highest peak?",
	"option1": "India",
	"option2": "Bhutan",
	"option3": "Nepal",
	"option4": "Pakistan",
	"answer" : "4"
}, {
	"question" : "Which is the second largest Country in Africa?",
	"option1" : "Sudan",
	"option2" : "Algeria",
	"option3" : "EGYPT",
	"option4" : "South Africa",
	"answer" : "2"
}, {
	"question" : "Which is the largest river of Uzbekistan?",
	"option1" : "River Amu",
	"option2" : "River Syr",
	"option3" : "River Zarafshon",
	"option4" : "Naryn",
	"answer" : "1"
}, {
	"question" : "Gobi desert is in: ",
	"option1" : "Mongolia and China",
	"option2" : "Iran and Iraq",
	"option3" : "Saudi Arabia and Yemen",
	"option4" : "Uzbekistan and Kazakhstan",
	"answer" : "1"
}, {
	"question" : "What is the name of the central part of the earth?",
	"option1" : "Mantle",
	"option2" : "core",
	"option3" : "Crust",
	"option4" : "None of the Above",
	"answer" : "2"
}, {
	"question" : "Bangladesh has a dispute over the construction of a dam on Naaf river with:",
	"option1" : "India",
	"option2" : "Myammar",
	"option3" : "Nepal",
	"option4" : "China",
	"answer" : "2"
}, {
	"question" : "Among these SAACR countries which is not land locked?",
	"option1" : "Bhutan",
	"option2" : "Nepal",
	"option3" : "Srilanka", 
	"option4" : "None of the above",
	"answer" : "2"
}, {
	"question" : "Water source beneath the earth flowing naturally is called: ",
	"option1" : "Stream",
	"option2" : "Fall",
	"option3" : "Spring", 
	"option4" : "Lake",
	"answer" : "3"
}];
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton =document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex){
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
}
function loadNextQuiz (){
	var selectedOption = document.querySelector('input[type = radio]:checked');
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		if(score >= 60){
			resultCont.innerHTML = 'Your Score: ' + score + '%' + '<br> <p style="color:green">CONGRATULATION You Have Passed</p>';
		}
		else{
			resultCont.innerHTML = 'Your Score ' + score + '%' + '<br> <p style="color:red">Sorry You Have Failed</p>';
		}
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);