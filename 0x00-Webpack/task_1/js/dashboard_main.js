import $ from 'jquery';
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count += 1;
  
  // Display the current count
  $('#count').text(`${count} clicks on the button`);

  // Check if the count reaches 500 and display a special message
  if (count === 500) {
    $('#count').append('<p>Wow! You clicked 500 times!</p>');
  }
}

$('button').on('click', _.debounce(updateCounter, 300));

