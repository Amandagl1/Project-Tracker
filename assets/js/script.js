// Selects the div ID that will set the current time and date
var displayClock = $("#clock")

function updateTime() {
    // Moment.js for display format of time
    displayClock.html(moment().format("dddd, MMMM Do YYYY, hh:mm:ssA"));
}

// Updates every second
setInterval(updateTime, 1000);


// Using jQuery to set local storage
$(document).ready(function() {
    $(".save-btn").click(function() {
        var input = $(this).siblings(".user-input").val();
        var user = $(this).parent().attr("class");

    // Setting item to local storage
    localStorage.setItem(user, input);
    // Logs user input in the console
    console.log(input);

    });
});

// Getting item from local storage
$(".user-input").val(localStorage.getItem(".user-input"));


window.onload = function() {
    localStorage.getItem("9:00am", $('#9am').val());
    localStorage.getItem("10:00am", $('#10am').val());
    localStorage.getItem("11:00am", $('#11am').val());
    localStorage.getItem("12:00pm", $('#12pm').val());
    localStorage.getItem("1:00pm", $('#1pm').val());
    localStorage.getItem("2:00pm", $('#2pm').val());
    localStorage.getItem("3:00pm", $('#3pm').val());
    localStorage.getItem("4:00pm", $('#4pm').val());
    localStorage.getItem("5:00pm", $('#5pm').val());
}