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


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
    // complete rest of the timeblocks from 3 given in HTML file//
    // remove static past, present, and future classes
    // find a way to prgrammatically add or remove the appropriate class
    // colors need to shift at the start of new hour
    // use <,>,= to compare to current time


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future (these are classses in html)
    // compare time block to current time and apply class based on comparison in time // (DayJS)



// WHEN I click into a timeblock
// THEN I can enter an event
    // grab text input (text areas)//



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
    // EventListener on the save button//
    // create variable, get the value//
    // set it to local stroage//



// WHEN I refresh the page
// THEN the saved events persist
    // LocalStorage