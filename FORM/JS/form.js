function validateForm() {
    var x = document.forms["myForm"]["phone"].value;
    if (x == "") {
        alert("Phone number must be included");
        return false;
    }
}