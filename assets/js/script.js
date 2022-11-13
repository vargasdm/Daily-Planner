// variable that sets the format for the current date and time
var currentTime = dayjs().format('dddd, MMMM D YYYY H:mm');
var saveBtn = document.querySelectorAll(".saveBtn");
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
  ];
// sets hour values that will be used addBlockStyling function
var hourNine = dayjs().hour('9');
var hourTen = dayjs().hour('10');
var houreleven = dayjs().hour('11');
var hourTwelve = dayjs().hour('12');
var hourOne = dayjs().hour('13');
var hourTwo = dayjs().hour('14');
var hourThree = dayjs().hour('15');
var hourFour = dayjs().hour('16');
var hourFive = dayjs().hour('17');
//  array that holds the hour number values
var workHours = [hourNine.$H, hourTen.$H, houreleven.$H, hourTwelve.$H, hourOne.$H, hourTwo.$H, hourThree.$H, hourFour.$H, hourFive.$H];

// display the current date in the header of the page.
$('#currentDay').text(currentTime);

// when page is reloaded, renders the events and assigns classes to hour blocks
window.onload = renderEvents(), addBlockStyling();

// renders events saved in local storage to the appropriate block
function renderEvents() {
  // gets value from local storage with the corresponding number and puts it in the div with the same ID and textarea with the class description
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

// click eventListener for when save button is clicked
$(".saveBtn").click(function (event) {
  event.preventDefault();
  // variable that uses "this" to refer to the click event that involves the save button in one of the hour blocks. .siblings is used to access the sibling <textarea> element. .val() is used to access the value from that element
  var eventAnswer = $(this).siblings('textarea').val();
  // if statement that saves the event when the text area is not empty
  if (eventAnswer !== "") {
    // creates a variable that uses this to refer to clicking of the button element in the hour block div. . attr is accessing the attribute "id" of that button element that was clicked. 
    // .split is splitting the id, at the dash, into 2 parts "save" and the number and the 2 parts are put into an array. [1] is accessing the number in the 2 index array
    // this is just making a variable that accessing the number part of the button element's id
    var hour = $(this).attr('id').split('-')[1];
    // creates a key in local storage that has the same number as the id of the save button element that is clicked and saves whatever is in the text area
    localStorage.setItem(hour, eventAnswer);
  }
})

// function that assigns styling of hour blocks based on the current hour
function addBlockStyling() {
  // for loop that loops through the hour block divs
  for (var i = 0; i < hourBlocks.length; i++) {
    // if statement that compares current hour value to the values set for each hour on the planner, then assigns appropriate class styling
    if (dayjs().hour() > workHours[i]) {
      hourBlocks[i].addClass("past");
    } else if (dayjs().hour() < workHours[i]) {
      hourBlocks[i].addClass("future");
    } else {
      hourBlocks[i].addClass("present");
    }
  }
}