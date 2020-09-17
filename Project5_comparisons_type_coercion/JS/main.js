document.write("10" + 5); //coercion 

console.log(2<1); //console will print false

document.write(10 == 10); //double equal signs, will prompt true

document.write(2 == 4); //double equal signs, will prompt false

X = 10;
Y = 10;
document.write(X === Y); // === verifies if the two strings have the same value, will return true

Z = 2;
D = 4;
document.write(Z === D); // === verifies if the two strings have the same value, will return flase

A = 2;
E = "2";
document.write(A === E); //different data type/same value

document.write(5 > 2 && 10 > 4); // AND Boolean &&, will return true

document.write(5 > 10 && 10 > 4); // AND Boolean &&, will return false

document.write(5 > 10 || 10 > 4); // OR Boolean ||, will return true becuase 10 > 4

document.write(5 > 10 || 10 > 20); // OR Boolean ||, will return false becuase neither are true

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); //NOT Boolean !, will return False, ie "Not False", double negative to return true ex. (5 > 10) would return true because it's "Not Not False"
}

