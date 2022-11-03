// Display current time and date using setInterval() and Moment.js for formatting
var timeNow = moment().format("MMMM Do, YYYY");
$("#time").text(timeNow);
var dateNow = moment().format("Today: dddd");
$("#date").text(dateNow);
