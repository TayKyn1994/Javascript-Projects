function count_to_ten() {   // while loops
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function myFunction() {     //returns the number of characters used in the string "Hello World!"
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];       //for loop
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] +"<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {       // array function
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function myFunction() {     // function scope
    var carName= "Corvette";
    document.getElementById("Example").innerHTML = carName;
}

function constant_function() {      // constant scope
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var E = 43;     // utilizing the LET keyword
document.write(E);
{
    let E = 86;
    document.write("<br>" + E);
}
document.write("<br>" + E);

function myFunction() {             // how to use RETURN function
    return Math.PI;
  }
  document.getElementById("demo").innerHTML = myFunction();

  let car = {       //how to create an object with properties
      make: "Dodge ",
      model: "Viper ",
      year: "2021 ",
      color: "red ",
      description: function() {
          return "The car is a " + this.year + this.color + this.make + this.model;
      }
  }
  document.getElementById("Car_Object").innerHTML = car.description();

function myFunction() {     //break function
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}

function myFunction() { // continue function, skips the number 3 
    var text = "";
    var i;
    for (i = 0; i < 5; i++) {
      if (i === 3) {
        continue;
      }
      text += "The number is " + i + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
  }