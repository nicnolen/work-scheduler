// GLOBAL VARIABLES
var today = document.getElementById('currentDay');

// REFERENCES
// Access moments.js and format it to say the current day of the week, date, and time
var rightNow = moment().format('LLLL');

// Display the current date and time on the paragraph with an id of "currentDay"
today.innerHTML = rightNow;
