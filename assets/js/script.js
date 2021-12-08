// GLOBAL VARIABLES
// Reference the paragraph that holds the current date and time
var todayEl = document.getElementById('currentDay');

// Reference the whole task and buttons
var timeBlockEl = document.getElementById('time-block');
var editBtnEl = document.getElementById('edit-button');
var deleteBtnEl = document.getElementById('delete-button');

// Reference to just the task (not the time)
var task = document.getElementById('task')

// REFERENCES
// Access moments.js and format it to say the current day of the week, date, and time
var rightNow = moment().format('LLLL');
// Display the current date and time on the paragraph with an id of "currentDay"
todayEl.innerHTML = rightNow;

// FUNCTIONS
// Edit task function
var editTask = function() {

}

var deleteTask = function() {

};

// EVENT LISTENERS
// Capture edit button click
deleteBtnEl.addEventListener('click', deleteTask);


