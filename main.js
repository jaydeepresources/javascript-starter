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

var flag = true;

function toggleSection() {
    var someText = document.getElementById('someText');
    var caption = document.getElementById('toggle');

    flag = !flag;

    if (!flag) {
        someText.style.display = 'none';
        caption.innerHTML = 'show';
        caption.className = 'btn btn-success';
    }
    else {
        someText.style.display = 'block';
        caption.innerHTML = 'hide';
        caption.className = 'btn btn-danger';
    }
}

var hobbies = ['music', 'films', 'dance', 'books'];

function iterateHobbies() {
    var list = "";
    for (var i = 0; i < hobbies.length; i++) {
        list += "<a class='list-group-item list-group-item-action'>"
            + hobbies[i] +
            "<span><button type='button' onclick='deleteRow(" + i + ")' class='close' data-dismiss='alert'>&times;</button></span>"
        "</a>";
    }
    document.getElementById('hobbiesList').innerHTML = list;
}

function deleteRow(i) {
    hobbies.splice(i, 1);
    iterateHobbies();
}

function tabs() {
    var emp = [[1, 'john'], [2, 'adam'], [3, 'harris'], [4, 'luke']];
    var data = document.getElementById('data');
    var tableEmp = "<table class='table table-hover'><tr><th>Id</th><th>Name</th></tr>";
    for (var i = 0; i < emp.length; i++) {
        tableEmp += "<tr>";
        for (var j = 0; j < emp[i].length; j++) {
            tableEmp += "<td>" + emp[i][j] + "</td>";
        }
        tableEmp += "</tr>";       
    }
    data.innerHTML = tableEmp;
}

function addHobby(){
    var newHobby = document.getElementById('newHobby').value;
    hobbies.push(newHobby);
    iterateHobbies();
    document.getElementById('newHobby').value = '';
}

function resetHobbies(){
    hobbies = ['music', 'films', 'dance', 'books'];
    iterateHobbies();
}