window.alert("This is an alert method!");

var A = "This is a string";
document.write(A);

document.write("\"Be who you are and say what you feel,"
       + " because those who mind don\'t matter and those who matter don\'t mind.\""
       + "  " + "-Dr. Seuss");

var B = " Concatenated" + " String";
document.write(B);

var Family = "The Johnsons", Dad = " Conner ", Mom = "Jennifer", Daughter = "Lucy", Son = "Vaughn";
document.write(Dad);

var purple = "I see purple clouds.";
var purple = purple.fontcolor("purple");
document.write(purple);

document.write(3 + 3);      //Expression example

function My_First_Function() {                                  //Defining a function and naming it
    var str = "This text is green!";                            //Defining a variable and giving it a 
    var result = str.fontcolor("green");                  //string value
    document.getElementById("Green_Text").innerHTML = result;   //Putting the value
}                                                               //of result into HTML element with "Green_Text" id

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
}