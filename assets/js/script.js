// GLOBAL VARIABLES
// Reference the paragraph that holds the current date and time
var todayEl = document.getElementById('currentDay');

// Array for each hour 
var hours = [
    {
        hour: 8,
        meridiem: 'AM' // meridiem sets AM and PM
    },
    {
        hour: 9,
        meridiem: 'AM' // meridiem sets AM and PM
    },
    {
        hour: 10,
        meridiem: 'AM' // meridiem sets AM and PM
    },
    {
        hour: 11,
        meridiem: 'AM' // meridiem sets AM and PM
    },
    {
        hour: 12,
        meridiem: 'PM' // meridiem sets AM and PM
    },
    {
        hour: 1,
        meridiem: 'PM' // meridiem sets AM and PM
    },
    {
        hour: 2,
        meridiem: 'PM' // meridiem sets AM and PM
    },
    {
        hour: 3,
        meridiem: 'PM' // meridiem sets AM and PM
    },
    {
        hour: 4,
        meridiem: 'PM' // meridiem sets AM and PM
    },
    {
        hour: 5,
        meridiem: 'PM' // meridiem sets AM and PM
    },
];

// Array that stores the todo's
var toDoArr = [];

// REFERENCES
// Access moments.js and format it to say the current day of the week, date, and time
var rightNow = moment().format('LLLL');
// Display the current date and time on the paragraph with an id of "currentDay"
todayEl.innerHTML = rightNow;

// FUNCTIONS
// Dynamically create time block
for (var i = 0; i < hours.length; i++) {
    // reference the whole task (time and textarea)
    var timeBlockEl = document.querySelector('.container');
    // create a div for the time
    var scheduleTimeEl = document.createElement('div');
    // create a paragraph to store the time
    var timeEl = document.createElement('p');
    // create a div to store the tasks
    var scheduleTaskEl = document.createElement('div');
    // create a textarea to write the task
    var taskEl = document.createElement('textarea');
    // create a div for the save icon
    var saveTaskEl = document.createElement('div');
    // create the save task icon
    var saveTaskIconEl = document.createElement('i');

    // style the time div
    scheduleTimeEl.className = 'd-flex justify-content-center align-items-center col-lg-1 hour';
    // style the task div
    scheduleTaskEl.className = 'col-lg-10 past row text';
    // style the textarea
    taskEl.className = 'col-lg-12 row text textarea';
    // style the save icon div
    saveTaskEl.className = 'd-flex justify-content-center align-items-center col-lg-1 saveBtn';
    // create the save icon
    saveTaskIconEl.className = 'fas fa-save';

    // dynamically make the time for the time block referencing the hours array
    timeEl.textContent = hours[i].hour + hours[i].meridiem;
    // helper text for the textarea content
    taskEl.textContent = 'Enter task';

    // append the time, task and save divs to the container. NOTE using append allows you to append multiple things at once
    timeBlockEl.append(scheduleTimeEl, scheduleTaskEl, saveTaskEl);
    // append the time to the time div
    scheduleTimeEl.appendChild(timeEl);
    // append textarea (for the task) to the task div
    scheduleTaskEl.appendChild(taskEl)
    // append the save icon to its div
    saveTaskEl.appendChild(saveTaskIconEl);
    
}

// Store data in local storage
var setStorage = function() {
   toDoArr.push(JSON.parse(localStorage.getItem('toDoArr')));
   localStorage.setItem('taskEl', JSON.stringify(toDoArr));
}

// Check due dates
var auditTasks = function auditTask() {

};


// EVENT LISTENERS
// Capture add button click
saveTaskIconEl.addEventListener('click', setStorage);

// Use setTimeout to update the time every minute (1000ms * 60s)
setTimeout(function() {
    // clear the current URL
    location = ''; // location references the current URL
}, 1000 * 60);
