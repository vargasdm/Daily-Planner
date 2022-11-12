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
    nineBlock = $("#hour-9"),
    tenBlock= $("#hour-10"),
    elevenBlock= $("#hour-11"),
    twelveBlock= $("#hour-12"),
    oneBlock= $("#hour-1"),
    twoBlock= $("#hour-2"),
    threeBlock= $("#hour-3"),
    fourBlock= $("#hour-4"),
    fiveBlock= $("#hour-5"),
  ]
// console.log(hourBlocks[0]);
var hourNine = dayjs().hour('9');
// console.log(hourNine.$H);
var hourTen = dayjs().hour('10');
var houreleven = dayjs().hour('11');
var hourTwelve = dayjs().hour('12');
var hourOne = dayjs().hour('13');
var hourTwo = dayjs().hour('14');
var hourThree = dayjs().hour('15');
var hourFour = dayjs().hour('16');
var hourFive = dayjs().hour('17');

var hour = $(this).siblings('div').val();

var i = 0
var workHours = [hourNine.$H, hourTen.$H, houreleven.$H, hourTwelve.$H, hourOne.$H, hourTwo.$H, hourThree.$H, hourFour.$H, hourFive.$H];
console.log(workHours)

// var eventsArr = JSON.parse(localStorage.getItem("events")) || [];

// var hourEvents = document.querySelectorAll("textarea");
// console.log(hourEvents);


$('#currentDay').text(currentTime);

window.onload = renderEvents(), addBlockStyling();


// // need another function that renders the event information to the <textarea> of the correct time block
function renderEvents() {
  $("#hour-9 .description").val(localStorage.getItem(9))
  $("#hour-10 .description").val(localStorage.getItem(10))
  $("#hour-11 .description").val(localStorage.getItem(11))
  $("#hour-12 .description").val(localStorage.getItem(12))
  $("#hour-1 .description").val(localStorage.getItem(1))
  $("#hour-2 .description").val(localStorage.getItem(2))
  $("#hour-3 .description").val(localStorage.getItem(3))
  $("#hour-4 .description").val(localStorage.getItem(4))
  $("#hour-5 .description").val(localStorage.getItem(5))

};

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id bes
// useful when saving the description in local storage?
$(".saveBtn").click(function (event) {
  event.preventDefault();
  var eventAnswer = $(this).siblings('textarea').val();
  console.log(eventAnswer)
  if (eventAnswer !== "") {
    var hour = $(this).attr('id').split('-')[1];
    console.log(hour);
    localStorage.setItem(hour, eventAnswer);
  }
})

//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the                ??????
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
// I want the styling of a timeblock to be based on the current time of day
//  need to make a function that based on the current time of day, will assign a past, present, future style class to all of the hour divs in the html 
// will need make if statment that uses dayjs() and when executed will use element.classList.add() method to assign either the past, present, or future class to that div

function addBlockStyling() {
  for (var i = 0; i < hourBlocks.length; i++) {
    console.log(hourBlocks[3])
    console.log(hourBlocks.length)
    console.log(dayjs().hour())
    if (dayjs().hour() > workHours[i]) {
      hourBlocks[i].addClass("past");
    } else if (dayjs().hour() < workHours[i]) {
      hourBlocks[i].addClass("future");
    } else {
      hourBlocks[i].addClass("present");
    }
  }
}



// });
