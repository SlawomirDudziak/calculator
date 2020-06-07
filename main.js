var LCD='';
var firstNumber;
var secondNumber=0;
var score=0;
var operation='none';

function select(digit)
{
	LCD=digit;
	//document.getElementById("LCD").innerHTML+= digit;
	document.getElementById("LCD").value+=LCD;
	return LCD;
}
function clearScreen()
{
	document.getElementById("LCD").value='';
	//console.log('2');
}
function addition()
{
	firstNumber=document.getElementById("LCD").value;
	var firstNumber = parseInt(firstNumber);
	//firstNumber=String(firstNumber);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	//console.trace()
	score += firstNumber;
	operation='add';
}
function subtraction()
{
	firstNumber=document.getElementById("LCD").value;
	var firstNumber = parseInt(firstNumber);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='subtract';
}
function multiplication()
{
	firstNumber=document.getElementById("LCD").value;
	var firstNumber = parseInt(firstNumber);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='multiply';
}
function division()
{
	firstNumber=document.getElementById("LCD").value;
	var firstNumber = parseInt(firstNumber);
	console.log(firstNumber, typeof(firstNumber));
	clearScreen();
	score += firstNumber;
	operation='divide';
}
function equals()
{
	console.log(score, 'score');
	secondNumber=parseInt(document.getElementById("LCD").value);
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
	document.getElementById("LCD").value=score;
	score=0;
	operation='none';
}