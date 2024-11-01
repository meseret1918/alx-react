// Import CSS for styling
import './css/main.css';

// Import jQuery
import $ from 'jquery';

// Function to update the click counter
let count = 0;
function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Create and append the elements
$(document).ready(() => {
    // Add the paragraphs and button to the body
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="click-me">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Bind the click event to the button with lodash debounce
    $('#click-me').on('click', _.debounce(updateCounter, 300));
});

