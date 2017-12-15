

function onSubmit() {

    var email = document.forms.userForm.email.value;
    var password = document.forms.userForm.password.value;
    var userData = document.getElementById("userData");

    userData.innerHTML =
        "<h2>Your Details:</h2>" +
        "<br>" +
        "<p>Email:" + email + "</p>" +
        "<p>Password:" + password + "</p>";

}

function onReset() {
    document.forms.userForm.email.value = "";
    document.forms.userForm.password.value = "";
    var userData = document.getElementById("userData");

    userData.innerHTML =
        "<h2>Your Details:</h2>" +
        "<br>" +
        "<p>Email:</p>" +
        "<p>Password:</p>";
}

function validateForm() {
    console.log('hi');
    var email = document.forms.userForm.email.value;
    var password = document.forms.userForm.password.value;
    if (email == "") {
        alert("Enter email");
        return false;
    }
    if (password == "") {
        alert("Enter password");
        return false;
    }

    return true;

}