var LCD='';
var firstNumber;
var secondNumber=0;
var score=0;
var operation='none';

function select(digit)
{
	if(document.getElementById("LCD").value==0)
	{
		document.getElementById("LCD").value='';
	}
	
	//LCD=digit;
	//document.getElementById("LCD").innerHTML+= digit;
	document.getElementById("LCD").value+=digit;
	return LCD;
}
function clearScreen()
{
	document.getElementById("LCD").value=0;
	//console.log('2');
}
function off()
{
	document.getElementById("LCD").value='';
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
function root()
{
	firstNumber=document.getElementById("LCD").value;
	var firstNumber = parseInt(firstNumber);
	document.getElementById("LCD").value=Math.sqrt(firstNumber);
	console.log(Math.sqrt(firstNumber), 'sqrt');
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