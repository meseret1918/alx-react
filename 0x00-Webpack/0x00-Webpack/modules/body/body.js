import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<div id="body"></div>');
$('#body').append('<p>Dashboard data for the students</p>');
$('#body').append('<button>Click here to get started</button>');
$('#body').append('<p id="count"></p>');
$('#body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$('button').on('click', _.debounce(updateCounter, 300));
console.log('Init body');

