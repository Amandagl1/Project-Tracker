// Selects the div ID that will set the current time and date
var displayClock = $("#clock")

function updateTime() {
    displayClock.html(moment().format("dddd, MMMM Do YYYY, hh:mm:ssA"));
}

setInterval(updateTime, 1000);

