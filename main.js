
//var LCD=String(document.getElementById("LCD"));
var LCD='';

function select(digit)
{
	LCD=digit;
	//document.getElementById("LCD").innerHTML= digit;
	document.getElementById("LCD").innerHTML+= LCD;
}
function clear()
{
	var LCD='';
	var LCDdiv=document.getElementById("LCD");
	LCDdiv.textContent=0;
}