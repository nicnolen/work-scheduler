// GLOBAL VARIABLES
// Reference the paragraph that holds the current date and time
var todayEl = document.getElementById('currentDay');

// Reference the whole task (time and textarea)
var timeBlockEl = document.getElementById('time-block');

// Reference the save icon
var addBtnEl = document.getElementById('save-button');

// Array that stores the todo's
var toDoArr = [];

// Reference to just the task (not the time (textarea))
var task = document.getElementById('task');


// REFERENCES
// Access moments.js and format it to say the current day of the week, date, and time
var rightNow = moment().format('LLLL');
// Display the current date and time on the paragraph with an id of "currentDay"
todayEl.innerHTML = rightNow;

// FUNCTIONS
var setStorage = function() {
   toDoArr.push(JSON.parse(localStorage.getItem('toDoArr')));
   localStorage.setItem('task', JSON.stringify(toDoArr));
}

// Check due dates
var auditTasks = function auditTask() {

};


// EVENT LISTENERS
// Capture add button click
addBtnEl.addEventListener('click', setStorage);

// Use setTimeout to update every minute
setTimeout(function() {
    location = '';
}, 1000*60);
