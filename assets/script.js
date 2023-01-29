
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
//   });

// PsudeoCode
// GIVEN I am using a daily planner to create a schedule

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// we want to use DayJS to dusplay current date in header
// creat a variable, get DayJS data
// set the format - HH:MM:SS etc...
// got to the Docs
// make sure DayJS CDN lin exsits in the HTML file
// set the current time to an element in HTML
// var customParseFormat = require('dayjs/plugin/customParseFormat')
// dayjs.extend(customParseFormat)
// dayjs("MMMM-DD-YYYY")

var timeDisplayEl = $('#currentDay');
var rowEl = $(".row")


function displayTime() {
    var rightNow = dayjs().format('[Today is] dddd, MMMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
};

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// complete rest of the timeblocks from 3 given in HTML file//
// remove static past, present, and future classes
// find a way to prgrammatically add or remove the appropriate class
// colors need to shift at the start of new hour
// use <,>,= to compare to current time

function now() {
    var currentTime = dayjs().format('H');

    for (let i = 0; i < rowEl.length; i++) {
        if ($(rowEl[i]).attr("id").replace("hour-", "") > currentTime) {
            $(rowEl[i]).addClass("future");
        }
        if ($(rowEl[i]).attr("id").replace("hour-", "") < currentTime) {
            $(rowEl[i]).addClass("past");
        }
        if ($(rowEl[i]).attr("id").replace("hour-", "") === currentTime) {
            $(rowEl[i]).addClass("present");
        }
    };
};
now();

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future (these are classses in html)
//     compare time block to current time and apply class based on comparison in time // (DayJS)
// WHEN I click into a timeblock
// THEN I can enter an event
//     grab text input (text areas)//
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//     EventListener on the save button//
//     create variable, get the value//
//     set it to local stroage//

$(".saveBtn").on("click", function () {
    var textArea = $(this).siblings(".description").val();
    var timeBlock = $(this).parent().attr("id");

    localStorage.setItem(timeBlock, textArea);
});
  
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

displayTime();
setInterval(displayTime, 1000);

// WHEN I refresh the page
// THEN the saved events persist
//     LocalStorage