var table = prompt("Please enter your value:"); // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplcation Table</h2>';              // Message
var el = document.getElementById('blackboard');
el.innerHTML = msg;

if (operator === 'multiplication') {
   //Do multiplication
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
//else {
 // Do addition
  //while (i < 11) {
   // msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
   // i++;
  }
}

