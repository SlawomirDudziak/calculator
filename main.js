var LCD='';
var firstNumber;
var secondNumber=0;
var score=0;
var operation='none';
const numberButtons = document.querySelectorAll('[data-number]');
const addButton = document.querySelector('#add');
const subtractButton = document.querySelector('#subtract');
const multiplyButton = document.querySelector('#multiply');
const divideButton = document.querySelector('#divide');
const equalButton = document.querySelector('#equal');
const sqrtButton = document.querySelector('#sqrt');
const clearButton = document.querySelector('#clear');
const offButton = document.querySelector('#off');

numberButtons.forEach(button => {
	button.addEventListener('click', () => {
		select(button.innerText);
	});
});

addButton.addEventListener('click', () => {
	addition();
});

subtractButton.addEventListener('click', () => {
	subtraction();
});

multiplyButton.addEventListener('click', () => {
	multiplication();
});

divideButton.addEventListener('click', () => {
	division();
});

equalButton.addEventListener('click', () => {
	equals();
});

sqrtButton.addEventListener('click', () => {
	root();
});

offButton.addEventListener('click', () => {
	off();
});

clearButton.addEventListener('click', () => {
	clearScreen();
});

function select(digit)
{
	if (document.getElementById("LCD").textContent == 0) {
		document.getElementById("LCD").textContent = '';
	}
	
	document.getElementById("LCD").textContent += digit;
	return LCD;
}

function clearScreen() {
	document.getElementById("LCD").textContent = 0;
}

function off() {
	document.getElementById("LCD").textContent = '';
}

function addition() {
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	clearScreen();
	score += firstNumber;
	operation='add';
}

function subtraction() {
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	clearScreen();
	score += firstNumber;
	operation='subtract';
}

function multiplication() {
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	clearScreen();
	score += firstNumber;
	operation='multiply';
}

function division() {
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	clearScreen();
	score += firstNumber;
	operation='divide';
}

function root() {
	firstNumber = parseFloat(document.getElementById("LCD").textContent);
	document.getElementById("LCD").textContent=Math.sqrt(firstNumber);
}

function equals() {
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
			score='error';
			break;
	}
	
	document.getElementById("LCD").textContent = score;
	score=0;
	operation='none';
}
