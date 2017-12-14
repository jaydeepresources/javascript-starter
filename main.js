function showAlert() {
    var alertArea = document.getElementById('alert');
    alertArea.innerHTML = "<br>" +
        "<div class='alert alert-dismissible alert-info'>" +
        "<button type='button' class='close' data-dismiss='alert'>&times;</button>" +
        "<strong>This is an alert !</strong>" +
        "</div>"
}
function showDate() {
    document.getElementById('date').innerHTML = "<br><h3 class='text-warning'>Date:" + Date() + "</h3>";
}
function hideDate() {
    document.getElementById('date').innerHTML = "";
}
function print(){
    console.log('hi');
}