# Daily-Planner

## Description

The motivation for this project was as busy person, I wanted to have a planner to store my important events. That way, I can manage my time more efficiently. The purpose of this project was to create a daily planner for business hours during the day. With this planner I wanted to be able to keep track of the current date and time, save events to a specific time, and have the events in the planner persist, so even if I leave and come back to the page, my events don't disappear.

During this project I learned: 
- how to traverse the DOM and accesses html elements using jquery methods
- how to link jquery, dayjs, bootstrap and google fonts libraries in html
- how to format, set, and show the time useing dayjs
- how to add classes to html elements using jquery methods
- how to create a click eventListener using jquery methods
- how to alter html elements in JS using .setAttribute method
- how to use "this" key reference word
- how to store data in the local storage and then retreive and render that data later
- how to use an .onlaod method to run functions when I reload my page

![Screenshot](https://github.com/vargasdm/Daily-Planner/blob/main/assets/images/daily-planner.jpg)

## Table of Contents

- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

##Usage

When the page is opened, you are presented with the date and date at the time. Below that will be the business hour time blocks, which will be styled in three differnt ways depending on the hour: grey if the hour has past, red if the hour is the current hour, and green in the hour is in the future. You are able to add events to the text areas of each time block. By clicking the save button on the right side of the time block, you are able to save the event to the local storage. When the page is refreshed, the events saved in the local storage will be rendered to their respective time blocks.

There is no istallation required. The project can be viewed at through the following link: https://vargasdm.github.io/Daily-Planner/.
The GitHub repository can be viewed at https://github.com/vargasdm/Daily-Planner

![Screenshot](https://github.com/vargasdm/Daily-Planner/blob/main/assets/images/daily-planner-saved-events.jpg)
![Screenshot](https://github.com/vargasdm/Daily-Planner/blob/main/assets/images/daily-planner-saved-refresh.jpg)

## Credits

I followed these links and tutorials in the completion of this project:

- https://www.geeksforgeeks.org/difference-between-this-and-this-in-jquery/
- https://day.js.org/docs/en/display/format
- https://day.js.org/docs/en/get-set/hour
- https://stackoverflow.com/questions/17109593/how-can-i-get-the-class-of-a-parent-element
- https://api.jquery.com/addclass/
- https://stackoverflow.com/questions/16063549/class-method-in-javascript-is-not-a-function
- https://www.educative.io/answers/what-are-the-different-ways-to-select-dom-elements-in-javascript
- https://www.javascripttutorial.net/dom/manipulating/iterate-over-selected-elements/
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://www.w3schools.com/jsref/event_onload.asp
- https://stackoverflow.com/questions/61253909/how-do-i-set-a-javascript-variable-to-the-contents-of-a-textarea-tag

## License

No licenses were used during this project.



