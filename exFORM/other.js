var day = document.querySelector('.day');
var email = document.querySelector(".email");
var reMail = document.querySelector(".reMail");
var back = document.querySelector(".back");
var name = document.querySelector(".name");
var month = document.querySelector('.month');
var year = document.querySelector('.year');
var createButton = document.querySelector('.button');

for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    day.appendChild(option);
}

var nameMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agust',
    'September',
    'October',
    'November',
    'December'
];

for (var i = 0; i < nameMonth.length; i++) {
    var option = document.createElement("option");
    option.value = nameMonth[i];
    option.text = nameMonth[i];
    month.appendChild(option);
}

for (var i = 2017; i >= 1900; i--) {
    var option = document.createElement("option");
    option.value = [i];
    option.text = [i];
    year.appendChild(option);
}

function val() {
    if ((email.value === reMail.value) && (email.value) !== "") {
        back.innerHTML = "Thank you" + name.value;
    } else {
        back.innerHTML = "Failed to create account";
        email.style.borderColor='red';
        reMail.style.borderColor='red';
    }
}

createButton.addEventListener("click",val);
