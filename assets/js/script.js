// Selects the div ID that will set the current time and date
var displayClock = $("#clock")

function updateTime() {
    displayClock.html(moment().format("dddd, MMMM Do YYYY, hh:mm:ssA"));
}

setInterval(updateTime, 1000);

var resetData = document.getElementById("cancel-btn")

function cancelRequest() {
    resetData.reset();
};

resetData.addEventListener("onClick", cancelRequest);


var formData = document.getElementById("form");
form.addEventListener("submit", submitForm);
localStorage.setItem("form", formData.value);

var getForm = localStorage.getItem("form");

function submitForm(e) {
    e.preventDefault();
}

