import $ from 'jquery';
import './header.css';

$('body').append('<div id="header"></div>');
$('#header').append('<img src="path_to_logo" alt="logo" width="200" height="200">');
$('#header').append('<h1>Holberton Dashboard</h1>');
console.log('Init header');

