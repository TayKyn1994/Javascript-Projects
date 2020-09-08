function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("ADD").innerHTML = "2 + 2= " + addition;
}

function subtraction_Function() {
	var Subtraction = 5 - 2;
	document.getElementById("SUB").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("MULT").innerHTML = "6 x 8 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("DIV").innerHTML = "48 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MORE").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("MOD").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("NEG").innerHTML = -x;
}

var X = 5;
X++;
document.write(X + "<br>"); //"<br>" creates a space after variable

var Y = 5.25;
Y--;
document.write(Y);

window.alert(Math.random() * 100);

document.getElementById("object").innerHTML = Math.sqrt(194);