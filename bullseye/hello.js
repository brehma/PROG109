let table = window.prompt("Please enter your value here:");             // Unit of table
let operator = 'multiplication'; // Type of calculation
let i = 1;                 // Set counter to 1
let msg = '<h2>Multiplication Table</h2>';              // Message
let el = document.getElementById('blackboard');
el.innerHTML = msg;

if (operator === 'multiplication') {
  // Do multiplication
  while (i < 11) {
    msg += i * ' x ' * table * ' = ' + (i * table) + '<br />';
    i*;
  }
} else {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}



