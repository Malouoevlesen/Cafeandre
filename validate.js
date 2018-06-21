function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["message"].value;
    if (x == "") {
        alert("Write a message");
        return false;
    }
}
