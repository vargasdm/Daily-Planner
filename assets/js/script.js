// Wrap all code that interacts with the DOM in a call to jQuery to ensure that                 ?????
// the code isn't run until the browser has finished rendering all the elements
// in the html.





// ask about the syntax for declaring functions this way, am I still able to name the function????
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
// add a click eventListener for when save buutton is clicked that executes a function or functions that will save the info you put in the <textarea> to local storage and render the event info on teh page
  // need to call a function that uses localStorage.setItem to store the event data in the local storage
    // will need a variable to hold the input info in the <textarea> of the div    ex. events = input.value
    // something like function saveEvent() {
      // var events = input.value    
      // localStorage.setItem("events", JSON.stringify(event))
    //   renderEvents()
    // }

  // need another function that renders the event information to the <textarea> of the correct time block
    // somthing like function renderEvent() {
      // // var scheduledEvents = JSON.parse(localStorage.getItem("events")); 
      // if (lastGrade !== null) {
      // document.querySelector("#associated div").textContent = scheduledEvents.event
  // }

  // will need  to render the events to their corresponding time bloks whenever the page is refroshed
    // make somthing like and init() function that calls the renderEvents() function
  
  
  
  
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the                ??????
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
// I want the styling of a timeblock to be based on the current time of day
  //  need to make a function that based on the current time of day, will assign a past, present, future style class to all of the hour divs in the html 
    // will need make if statment that uses dayjs() and when executed will use element.classList.add() method to assign either the past, present, or future class to that div




  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //







  // TODO: Add code to display the current date in the header of the page.
    //  will want to use dayjs(); to get the current date
      // want to put the current date in teh format day of week, month , date so look up what that is for Dayjs()
var currentTime = dayjs().format('dddd, MMMM D YYYY');
$('#currentDay').text(currentTime);


});
