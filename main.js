var LCD='';
var firstNumber;
var secondNumber=0;
var score=0;

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
}
function equals()
{
	console.log(score, 'score');
	secondNumber=parseInt(document.getElementById("LCD").value);
	score+=secondNumber;
	console.log(score, 'score');
	document.getElementById("LCD").value=score;
	score=0;
}