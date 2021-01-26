var LCD='';
var firstNumber;
var secondNumber=0;
var score=0;
var operation='none';


function select(digit)
{
	if(document.getElementById("LCD").textContent == 0)
	{
		document.getElementById("LCD").textContent = '';
	}
	
	document.getElementById("LCD").textContent += digit;
	return LCD;
}
function clearScreen()
{
	document.getElementById("LCD").textContent = 0;
}
function off()
{
	document.getElementById("LCD").textContent = '';
}
function addition()
{
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='add';
}
function subtraction()
{
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='subtract';
}
function multiplication()
{
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='multiply';
}
function division()
{
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='divide';
}
function root()
{
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	document.getElementById("LCD").textContent=Math.sqrt(firstNumber);
	console.log(Math.sqrt(firstNumber), 'sqrt');
}
function equals()
{
	console.log(score, 'score');
	secondNumber=parseFloat(document.getElementById("LCD").textContent);
	switch(operation)
	{
		case 'add':
			score+=secondNumber;
			break;
		case 'subtract':
			score-=secondNumber;
			break;
		case 'multiply':
			score*=secondNumber;
			break;
		case 'divide':
			score/=secondNumber;
			break;
		default:
			score=404;
			break;
	}
	
	console.log(score, 'score');
	document.getElementById("LCD").textContent = score;
	score=0;
	operation='none';
}