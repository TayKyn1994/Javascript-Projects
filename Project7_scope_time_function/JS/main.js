var X = 10;     // this code is for a global variable "a global variable can be accessed from any function within the program"
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() {      // this code is for a local variable "a local variable is only accessed by the function it is assigned to"
    var Y = 10;
    document.write(20 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
}
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() {      // this code uses the console.log to help debug and solve why it isn't displaying
    var Z = 10;
    console.log(15 + Z);
}
function Add_number_6() {
    console.log(Z + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date() {       // this is an IF statement
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {   // this is an else statement
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
