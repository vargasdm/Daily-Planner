// Wrap all code that interacts with the DOM in a call to jQuery to ensure that                 ?????
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// TODO: Add code to display the current date in the header of the page.
var currentTime = dayjs().format('dddd, MMMM D YYYY');
var saveBtn = document.querySelectorAll(".saveBtn")
// var nineBlock = $("#hour-9");
// var tenBlock = $("#hour-10");
// var elevenBlock = $("#hour-11");
// var twelveBlock = $("#hour-12");
// var oneBlock = $("#hour-1");
// var twoBlock = $("#hour-2");
// var threeBlock = $("#hour-3");
// var fourBlock = $("#hour-4");
// var fiveBlock = $("#hour-5");
var hourBlocks = [
  {
    nineBlock: $("#hour-9"),
    tenBlock: $("#hour-10"),
    elevenBlock: $("#hour-11"),
    twelveBlock: $("#hour-12"),
    oneBlock: $("#hour-1"),
    twoBlock: $("#hour-2"),
    threeBlock: $("#hour-3"),
    fourBlock: $("#hour-4"),
    fiveBlock: $("#hour-5"),
  }]
console.log(hourBlocks[0]);
var hourNine = dayjs().hour('9');
console.log(hourNine.$H);
var hourTen = dayjs().hour('10');
var houreleven = dayjs().hour('11');
var hourTwelve = dayjs().hour('12');
var hourOne = dayjs().hour('1');
var hourTwo = dayjs().hour('2');
var hourThree = dayjs().hour('3');
var hourFour = dayjs().hour('4');
var hourFive = dayjs().hour('5');

var workHours = [hourNine.$H, hourTen.$H, houreleven.$H, hourTwelve.$H, hourOne.$H, hourTwo.$H, hourThree.$H, hourFour.$H, hourFive.$H];
console.log(workHours)

var eventsArr = JSON.parse(localStorage.getItem("events")) || [];

var hourEvents = document.querySelectorAll(".description")
hourEvents = "";

$('#currentDay').text(currentTime);

// will need  to render the events to their corresponding time bloks whenever the page is refroshed
// function init() {
 
//   // window.onload = addBlockStyling();
// }
// window.onload = renderEvents(), addBlockStyling();
// add a click eventListener for when save buutton is clicked that executes a function or functions that will save the info you put in the <textarea> to local storage and render the event info on teh page
// need to call a function that uses localStorage.setItem to store the event data in the local storage
function saveEvent() {
  // var hourEvents = document.querySelectorAll(".description")
  console.log(hourEvents);
  for (var i = 0; i < hourEvents.length; i++) {

    // var eventsArr = JSON.parse(localStorage.getItem("events")) || [];
    eventsArr.push(hourEvents[i].value);
    console.log(eventsArr);
  }
  localStorage.setItem("events", JSON.stringify(eventsArr));
  renderEvents()
};

// // need another function that renders the event information to the <textarea> of the correct time block
function renderEvents() {
  // var scheduledEvents = JSON.parse(localStorage.getItem("events")); 
  for (var i = 0; i < eventsArr.length; i++) {
    if (eventsArr[i] !== null) {
      hourEvents[i].text(eventsArr[i])
      console.log(hourEvents)
      i++
    } else {
      i++;
    }
  }
};


// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
$(".saveBtn").click(function (event) {
  event.preventDefault();
  saveEvent();
  renderEvents();
});









//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the                ??????
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// I want the styling of a timeblock to be based on the current time of day
//  need to make a function that based on the current time of day, will assign a past, present, future style class to all of the hour divs in the html 
// will need make if statment that uses dayjs() and when executed will use element.classList.add() method to assign either the past, present, or future class to that div
// do I compare teh value of dayjs() with the id of the div
// ex if dayjs() === textcontent.hour-9
// hour-9.classList.add("present")
// make variabels for all hours of the day
// function addBlockStyling() {
//   for (var i = 0; i < hourBlocks.length; i++) {
//     console.log(dayjs().hour())
//     if (dayjs().hour() > workHours[i]) {
//       hourBlocks[i].addClass("past");
//       i++
//     } else if (dayjs().hour() < workHours[i]) {
//       hourBlocks[i].addClass("future");
//       i++
//     } else {
//       hourBlocks[i].addClass("present");
//       i++
//     }
//   }
// }



  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //






// });
