function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("ADD").innerHTML = "2 + 2= " + addition; //simple addition
}

function subtraction_Function() {
	var Subtraction = 5 - 2;
	document.getElementById("SUB").innerHTML = "5 - 2 = " + Subtraction; //simple subtraction
}

function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("MULT").innerHTML = "6 x 8 = " + simple_Math; //simple multiplication
}

function division() {
    var simple_Math = 48 / 6;
    document.getElementById("DIV").innerHTML = "48 / 6 = " + simple_Math; // simple division
}

function more_Math() {
    var simple_Math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MORE").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math; // math :D
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("MOD").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math; //remainder
}

function negation_Operator() {
    var x = 10;
    document.getElementById("NEG").innerHTML = -x; // makes a number negative
}

var X = 5;
X++;
document.write(X + "<br>"); //increases number by 1
//"<br>" creates a space after variable

var Y = 5.25;
Y--;
document.write(Y); //decreases number by 1

window.alert(Math.random() * 100); // generates random number between 0-100

document.getElementById("object").innerHTML = Math.sqrt(194); //finds square root of number